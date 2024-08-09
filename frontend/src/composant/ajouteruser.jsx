import React, { useState } from 'react';
import Dasbord from './dasbord';
import images from '../assets/images/profil.svg';
import { GoSearch } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';

const Ajouteruser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        navigate('/'); 
      } else {
        const result = await response.json();
        setError(result.message || 'Erreur lors de l\'ajout de l\'utilisateur');
      }
    } catch (error) {
      setError('Erreur lors de la connexion au serveur');
    }
  };

  return (
    <>
      <div className="liste flex h-screen bg-[#FAFAFA]">
        <div className="w-72">
          <Dasbord />
        </div>

        <div className="flex-grow flex flex-col">
          <div className="header h-20 bg-white pl-10 pr-10 flex items-center justify-between shadow-md">
            <div className="text-lg font-semibold">Utilisateurs</div>
            <div className="flex items-center gap-4">
              <span>
                <img src={images} alt="User profile" className="w-10 h-10 rounded-full" />
              </span>
              <span className="text-sm">
                <p className="font-semibold">Omar FALL</p>
                <p className="text-gray-500">fallo@dexchange.sn</p>
              </span>
            </div>
          </div>

          <div className="flex-grow p-10">
            <div className="cong bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold mb-6">Ajouter un utilisateur</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">Nom</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Entrez le nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Entrez l'email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Mot de passe</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Entrez le mot de passe"
                  />
                </div>
                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Ajouter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ajouteruser;
