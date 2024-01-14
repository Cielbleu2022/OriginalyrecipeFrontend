// Importe React et la fonction useState depuis la bibliothèque React
import React, { useState } from 'react';

// Importe les styles CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Définit un composant fonctionnel UtilisateurFormSearchById
const UtilisateurFormSearchById = () => {
    // Utilise le hook useState pour créer un état local pour userId, userData et error
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    // Définit une fonction handleSearch qui sera appelée lors du clic sur le bouton de recherche
    const handleSearch = () => {
        // Effectue une requête fetch vers le backend en utilisant l'ID utilisateur saisi
        fetch(`http://localhost:8080/utilisateur/searchUtilisateur?idUtilisateur=${userId}`)
            .then(response => {
                // Vérifie si la réponse HTTP est OK (200)
                if (response.ok) {
                    // Parse la réponse en JSON et la renvoie
                    return response.json();

                }
               else{
                    // Lance une erreur avec le statut HTTP si la réponse n'est pas OK
                    throw new Error(`Erreur HTTP! Statut : ${response.status}`);
                }
            })
            .then(data => {
                // Met à jour l'état de userData avec les données de la réponse
                setUserData(data);
                // Réinitialise l'état d'erreur s'il y avait une erreur précédente
                setError(null);
            })
            .catch(error => {
                // Affiche une erreur dans la console en cas d'erreur lors de la requête
                console.error('Erreur lors de la recherche utilisateur :', error);
                // Réinitialise l'état de userData
                setUserData(null);
                // Définit un message d'erreur dans l'état
                setError('Erreur lors de la recherche utilisateur l identifiant n existe pas. Veuillez réessayer.');
            });
    };

    // Rendu du composant avec JSX
    return (
        <div className="container mt-5">
            <h1>Recherche d'Utilisateur par ID</h1>
            {/* Champ de saisie pour l'ID utilisateur avec gestion de l'événement onChange */}
            <label>ID Utilisateur:</label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />

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
                        <tr>
                            <td>{userData.nom}</td>
                            <td>{userData.prenom}</td>
                            <td>{userData.mail}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

// Exporte le composant pour qu'il puisse être utilisé ailleurs dans l'application
export default UtilisateurFormSearchById;
