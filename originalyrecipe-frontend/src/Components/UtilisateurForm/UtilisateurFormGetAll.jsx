import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UtilisateurFormGetAll = () => {
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [showUtilisateurs, setShowUtilisateurs] = useState(false);

    const handleAfficherUtilisateurs = () => {
        // Effectuer une requête HTTP pour récupérer les utilisateurs depuis votre API
        // Utilisez fetch, axios, ou une bibliothèque similaire
        fetch('http://localhost:8080/utilisateur/all')
            .then(response => response.json())
            .then(data => setUtilisateurs(data))
            .catch(error => console.error('Erreur lors de la récupération des utilisateurs :', error));

        // Afficher la liste des utilisateurs
        setShowUtilisateurs(true);
    };

    return (
        <div className="container mt-5">
            <h1>Liste des Utilisateurs</h1>
            <button className="btn btn-primary" onClick={handleAfficherUtilisateurs}>
                Afficher les Utilisateurs
            </button>
            {showUtilisateurs && (
                <table className="table table-bordered mt-3">
                    <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Mail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {utilisateurs.map(utilisateur => (
                        <tr key={utilisateur.id}>
                            <td>{utilisateur.nom}</td>
                            <td>{utilisateur.prenom}</td>
                            <td>{utilisateur.mail}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UtilisateurFormGetAll;
