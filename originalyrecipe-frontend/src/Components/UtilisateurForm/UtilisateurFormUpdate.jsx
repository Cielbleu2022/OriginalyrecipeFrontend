import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UtilisateurUpdateForm = ({ utilisateurId, onUpdateSuccess, onUpdateError }) => {
    const [mail, setMail] = useState('');
    const [pays, setPays] = useState('');

    const handleUpdate = () => {
        if (!mail || !pays) {
            onUpdateError('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        fetch(`http://localhost:8080/utilisateur/update?idUtilisateur=${utilisateurId}`, {
            method: 'PATCH',
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
                onUpdateSuccess();
                // Réinitialise les champs après une mise à jour réussie
                setMail('');
                setPays('');
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour utilisateur :', error);
                onUpdateError('Erreur lors de la mise à jour de l\'utilisateur. Veuillez réessayer.');
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
        </div>
    );
};

export default UtilisateurUpdateForm;
