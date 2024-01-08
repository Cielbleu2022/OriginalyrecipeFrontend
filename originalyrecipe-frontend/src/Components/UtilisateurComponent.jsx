import React, { useEffect, useState } from 'react';

const UtilisateurComponent = () => {
    const [utilisateurs, setUtilisateurs] = useState([]);

    useEffect(() => {
        // Effectuer une requête HTTP pour récupérer les utilisateurs depuis votre API
        // Utilisez fetch, axios, ou une bibliothèque similaire
        fetch('http://localhost:8080/utilisateur/all')
            .then(response => response.json())
            .then(data => setUtilisateurs(data))
            .catch(error => console.error('Erreur lors de la récupération des utilisateurs :', error));
    }, []); // Le tableau vide en tant que dépendance signifie que l'effet est exécuté une fois après le rendu initial

    return (
        <div>
            <h1>Liste des Utilisateurs</h1>
            <ul>
                {utilisateurs.map(utilisateur => (
                    <li key={utilisateur.id}>
                        {utilisateur.nom} {utilisateur.prenom} - {utilisateur.mail}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UtilisateurComponent;
