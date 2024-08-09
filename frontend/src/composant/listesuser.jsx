import React, { useState, useEffect } from 'react';
import images from '../assets/images/profil.svg';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Dasbord from './dasbord';
const Userliste = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  async function supprimer(id) {
    try {
      const url = `http://localhost:3000/users/${id}`;
      const response = await fetch(url, {
        method: 'DELETE'
      });

      if (response.ok) {
        const nouvelleListe = users.filter(user => user.id !== id);
        setUsers(nouvelleListe);
      } else {
        console.error('Erreur lors de la suppression:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    }
  }

  return (
    <div className="liste flex h-screen bg-[#FAFAFA]">
      <div className="w-72">
        <Dasbord />
      </div>

      <div className="flex-grow flex flex-col">
        <div className="header h-20 bg-white pl-10 pr-10 flex items-center justify-between">
          <div className="users flex justify-between items-center w-full">
            <div>Utilisateurs</div>
            <div className="flex items-center gap-4">
              <span><img src={images} alt="User profile" /></span>
              <span>
                <p>Omar FALL<br />fallo@dexchange.sn</p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex-grow p-10">
          <div className="cong">
            <h1 className="text-3xl font-bold">Configuration</h1>
            <div className="relative flex items-center mt-5 w-full max-w-xs">
              <GoSearch className="absolute left-3 text-xl text-[#A1A1AA]" />
              <input
                type="text"
                placeholder="Vous cherchez quel utilisateur"
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4256D0]"
              />
            </div>

            <Link to='/add'>
              <button className="mt-5 w-60 py-2 px-4 bg-[#4256D0] rounded-xl text-white">
                Ajouter un utilisateur +
              </button>
            </Link>
          </div>

          <div className="mt-10 bg-white rounded-xl">
            <div className="flex items-center gap-x-3 whitespace-nowrap pl-12 pr-12 pt-10 pb-10">
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="block text-gray-700 text-sm font-bold">Name</span>
                  <span className="block text-gray-700 text-sm font-bold">Email</span>
                  <span className="block text-gray-700 text-sm font-bold">Action</span>
                </div>
                {users.map(user => (
                  <React.Fragment key={user.id}>
                    <hr className="border-t-2 border-gray-300 my-2 w-full" />
                    <div className="flex items-center justify-between w-full">
                      <span className="block text-gray-700 text-sm font-medium">{user.name}</span>
                      <span className="block text-gray-700 text-sm ml-28 font-medium">{user.email}</span>
                      <span className="block text-gray-700 text-sm font-medium">
                        <Link to={`/update/${user.id}`}>
                          <button className="border-2 border-[#4256D0] text-[#4256D0] w-16 h-10 rounded-lg">
                            modifier
                          </button>
                        </Link>
                        <button onClick={() => supprimer(user.id)} className="bg-[#DC2626] text-white w-16 h-10 rounded-lg ml-2">
                          supprimer
                        </button>
                      </span>
                    </div>
                    <hr className="border-t-2 border-gray-300 my-2 w-full" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userliste;
