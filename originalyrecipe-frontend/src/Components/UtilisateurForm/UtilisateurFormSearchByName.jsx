import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const UtilisateurFormSearchByName = () => {
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        fetch(`http://localhost:8080/utilisateur/searchByName?nom=${userName}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Erreur HTTP! Statut : ${response.status}`);
                }
            })
            .then(data => {
                setUserData(data);
                setError(null);
            })
            .catch(error => {
                console.error('Erreur lors de la recherche utilisateur par nom :', error);
                setUserData(null);
                setError('Erreur lors de la recherche utilisateur par nom. Veuillez réessayer.');
            });
    };

    return (
        <div className="container mt-5">
            <h1>Recherche d'Utilisateur par Nom</h1>

            {/* Champ de saisie pour le nom d'utilisateur avec gestion de l'événement onChange */}
            <label>Nom Utilisateur:</label>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

            {/* Bouton de recherche qui déclenche la fonction handleSearch au clic */}
            <button className="btn btn-primary" onClick={handleSearch}>
                Rechercher
            </button>

            {/* Affiche le message d'erreur s'il y en a un */}
            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}

            {/* Affiche les données de l'utilisateur si elles sont disponibles */}
            {userData && (
                <div>
                    <h2>Résultat de la recherche :</h2>

                    {/* Tableau pour afficher les détails de l'utilisateur */}
                    <table className="table table-bordered mt-3">
                        <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Mail</th>
                        </tr>
                        </thead>

                        <tbody>
                        {userData.map((user, index) => (
                            <tr key={index}>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.mail}</td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            )}
        </div>
    );
};

export default UtilisateurFormSearchByName;
