import React, { useState } from 'react';

const UtilisateurFormSearchByName = ({ onSearch }) => {
    const [userName, setUserName] = useState('');
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
                onSearch(data); // Remonte les résultats au composant parent
                setError(null);
            })
            .catch(error => {
                console.error('Erreur lors de la recherche utilisateur par nom :', error);
                onSearch(null, error.message); // Remonte l'erreur au composant parent
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
        </div>
    );
};

export default UtilisateurFormSearchByName;
