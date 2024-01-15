import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UtilisateurForm = ({ setSuccess }) => {
    const [user, setUser] = useState({
        nom: '',
        prenom: '',
        dateDeNaissance: '',
        pays: '',
        mail: '',
        motDePasse: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/utilisateur/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('Utilisateur ajouté avec succès !');
                setUser({
                    nom: '',
                    prenom: '',
                    dateDeNaissance: '',
                    pays: '',
                    mail: '',
                    motDePasse: '',
                });
                setErrorMessage('');
                setSuccess("ok");
            } else {
                console.log('Erreur lors de l\'ajout de l\'utilisateur');
                setErrorMessage('Erreur lors de l\'ajout de l\'utilisateur. Veuillez réessayer.');
                setUser({
                    nom: '',
                    prenom: '',
                    dateDeNaissance: '',
                    pays: '',
                    mail: '',
                    motDePasse: '',
                });
            }
        } catch (error) {
            console.error('Erreur lors de la requête HTTP :', error);
            setErrorMessage('Erreur lors de la requête HTTP. Veuillez réessayer.');
        }
    };

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title">Formulaire d'Utilisateur</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">
                            Nom
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nom"
                            name="nom"
                            value={user.nom}
                            onChange={handleChange}
                            placeholder="Nom"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenom" className="form-label">
                            Prénom
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="prenom"
                            name="prenom"
                            value={user.prenom}
                            onChange={handleChange}
                            placeholder="Prénom"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateDeNaissance" className="form-label">
                            Date de Naissance
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="dateDeNaissance"
                            name="dateDeNaissance"
                            value={user.dateDeNaissance}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pays" className="form-label">
                            Pays
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="pays"
                            name="pays"
                            value={user.pays}
                            onChange={handleChange}
                            placeholder="Pays"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mail" className="form-label">
                            Mail
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="mail"
                            name="mail"
                            value={user.mail}
                            onChange={handleChange}
                            placeholder="Mail"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="motDePasse" className="form-label">
                            Mot de Passe
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="motDePasse"
                            name="motDePasse"
                            value={user.motDePasse}
                            onChange={handleChange}
                            placeholder="Mot de Passe"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Soumettre
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UtilisateurForm;
