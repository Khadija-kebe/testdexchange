import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find(); // Retourne tous les utilisateurs de la base de données
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id: parseInt(id) } }); // Retourne un utilisateur spécifique par son ID
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser); // Sauvegarde l'utilisateur dans la base de données
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id); // Retourne l'utilisateur mis à jour
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id); // Supprime un utilisateur de la base de données
  }
}
