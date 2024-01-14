import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UtilisateurUpdateForm = ({ utilisateurId }) => {
    const [mail, setMail] = useState('');
    const [pays, setPays] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleUpdate = () => {
        // Vérifiez que les champs obligatoires (mail, pays) sont remplis
        if (!mail || !pays) {
            setError('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        // Effectuez la requête de mise à jour vers votre API
        fetch(`http://localhost:8080/utilisateur/update?idUtilisateur=${utilisateurId}`, {
            method: 'PATCH', // Utilisez PATCH ou PUT en fonction de votre API
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail,
                pays,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut : ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setSuccessMessage('Utilisateur mis à jour avec succès.');
                setError(null);
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour utilisateur :', error);
                setError('Erreur lors de la mise à jour de l\'utilisateur. Veuillez réessayer.');
                setSuccessMessage(null);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Mise à jour d'Utilisateur</h1>
            <label>Mail:</label>
            <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />

            <label>Pays:</label>
            <input type="text" value={pays} onChange={(e) => setPays(e.target.value)} />

            <button className="btn btn-primary" onClick={handleUpdate}>
                Mettre à jour
            </button>

            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}

            {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                </div>
            )}
        </div>
    );
};

export default UtilisateurUpdateForm;
