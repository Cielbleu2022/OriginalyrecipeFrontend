import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UtilisateurUpdateForm from "./UtilisateurFormUpdate";
import UtilisateurFormAdd from "./UtilisateurFormAdd";
import { useParams, Outlet } from 'react-router-dom';

const UtilisateurFormGetAll = () => {
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);
    const [isAddFormVisible, setIsAddFormVisible] = useState(false);
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);

    const fetchUsers = () => {
        fetch('http://localhost:8080/utilisateur/all')
            .then(response => response.json())
            .then(data => setUtilisateurs(data))
            .catch(error => console.error('Erreur lors de la récupération des utilisateurs :', error));
    };

    const handleUpdate = (userId) => {
        setSelectedUserId(userId);
        setIsDeleteConfirmationVisible(false);
        setIsAddFormVisible(false);
    };

    const handleDelete = (userId) => {
        setSelectedUserId(userId);
        setIsDeleteConfirmationVisible(true);
        setIsAddFormVisible(false);
    };

    const confirmDelete = () => {
        fetch(`http://localhost:8080/utilisateur/delete?idUtilisateur=${selectedUserId}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                setUtilisateurs(data);
                setSelectedUserId(null);
                setIsDeleteConfirmationVisible(false);
            })
            .catch(error => console.error('Erreur lors de la suppression de l\'utilisateur :', error));
    };

    const handleAdd = () => {
        setSuccessMessageVisible(true);

        // Masquer le message de succès après 3 secondes
        setTimeout(() => {
            setSuccessMessageVisible(false);
            toggleAddForm();
            // Mettez à jour la liste des utilisateurs après l'ajout
            fetchUsers();
        }, 3000);
    };

    const handleUpdateSuccess = () => {
        // Mettez à jour la liste des utilisateurs après la mise à jour
        fetchUsers();
        setSuccessMessageVisible(true);

        // Masquer le message de succès après 3 secondes
        setTimeout(() => {
            setSuccessMessageVisible(false);
            toggleAddForm();
        }, 3000);
    };

    const handleUpdateError = (errorMessage) => {
        // Gérer l'erreur de mise à jour (affichage ou autre)
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', errorMessage);
    };

    const toggleAddForm = () => {
        setIsAddFormVisible(prevState => !prevState);
        setSelectedUserId(null);
        setIsDeleteConfirmationVisible(false);
    };

    useEffect(() => {
        fetchUsers(); // Appel initial pour charger les utilisateurs
    }, [utilisateurs]); // Ajout de utilisateurs comme dépendance

    return (
        <div className="container mt-5">
            <h1>Liste des Utilisateurs</h1>

            {utilisateurs.length > 0 && (
                <table className="table table-bordered mt-3">
                    <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Pays</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {utilisateurs.map(utilisateur => (
                        <tr key={utilisateur.id}>
                            <td>{utilisateur.nom}</td>
                            <td>{utilisateur.prenom}</td>
                            <td>{utilisateur.mail}</td>
                            <td>{utilisateur.pays}</td>
                            <td>
                                <button className="btn btn-secondary" onClick={() => handleUpdate(utilisateur.id)}>
                                    Update
                                </button>
                                <button className="btn btn-danger m-lg-3" onClick={() => handleDelete(utilisateur.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            <button className="btn btn-primary" onClick={toggleAddForm}>
                {isAddFormVisible ? 'Annuler add utilisateur' : 'Add Utilisateur'}
            </button>

            {(selectedUserId && !isDeleteConfirmationVisible) && (
                <UtilisateurUpdateForm
                    utilisateurId={selectedUserId}
                    onUpdateSuccess={handleUpdateSuccess}
                    onUpdateError={handleUpdateError}
                />
            )}

            {isDeleteConfirmationVisible && (
                <div className="alert alert-warning mt-3" role="alert">
                    <p>Confirmez-vous la suppression de l'utilisateur ?</p>
                    <button className="btn btn-danger" onClick={confirmDelete}>
                        Oui
                    </button>
                    <button className="btn btn-secondary ml-2" onClick={() => setIsDeleteConfirmationVisible(false)}>
                        Annuler
                    </button>
                </div>
            )}

            {isAddFormVisible && <UtilisateurFormAdd setSuccess={handleAdd} />}

            {successMessageVisible && (
                <div className="alert alert-success mt-3" role="alert">
                    Utilisateur ajouté ou mis à jour avec succès !
                </div>
            )}
        </div>
    );
};

export default UtilisateurFormGetAll;
