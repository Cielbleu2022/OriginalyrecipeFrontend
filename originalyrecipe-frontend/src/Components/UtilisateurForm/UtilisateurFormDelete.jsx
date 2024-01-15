import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UtilisateurDelete = ({ onDeleteSuccess, onDeleteError }) => {
    const [userId, setUserId] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleDelete = () => {
        // Effectue une requête DELETE vers le backend pour supprimer l'utilisateur par ID
        fetch(`http://localhost:8080/utilisateur/delete?idUtilisateur=${userId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut : ${response.status}`);
                }
                setSuccessMessage('Utilisateur supprimé avec succès.');
                setError(null);
                onDeleteSuccess(); // Appel de la fonction de succès
            })
            .catch(error => {
                console.error('Erreur lors de la suppression de l\'utilisateur :', error);
                setSuccessMessage(null);
                setError('Erreur lors de la suppression de l\'utilisateur. Veuillez réessayer.');
                onDeleteError(error.message); // Appel de la fonction d'erreur avec le message
            });
    };

    return (
        <div className="container mt-5">
            <h1>Suppression d'Utilisateur par ID</h1>
            <label>ID Utilisateur:</label>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <button className="btn btn-danger" onClick={handleDelete}>
                Supprimer
            </button>

            {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                </div>
            )}

            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}
        </div>
    );
};

export default UtilisateurDelete;
