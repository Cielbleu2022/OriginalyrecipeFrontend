import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from "../Login/LoginForm";
import UtilisateurFormAdd from "../UtilisateurForm/UtilisateurFormAdd";

const NavigationBar = ({ onSearch,setLoginInfo }) => {
    const navigate = useNavigate();
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [activePath, setActivePath] = useState('accueil');
    const [searchMessage, setSearchMessage] = useState('');

    const handleAccueilClick = () => {
        setShowRegistrationForm(false);
        setShowLoginForm(false);
        setActivePath('accueil');
    };

    const handleInscriptionClick = () => {
        setShowRegistrationForm(true);
        setShowLoginForm(false);
        setActivePath('inscription');
    };

    const handleLoginClick = () => {
        setShowLoginForm(true);
        setShowRegistrationForm(false);
        setActivePath('connexion');
    };

    const handleLoginSuccess = (loginInfo) => {

        console.log('Login successful. Role:', loginInfo);
        if(loginInfo.isLoggedIn) {
            setLoginInfo(loginInfo)
            setIsLoggedIn(loginInfo.isLoggedIn)
            setShowLoginForm(false);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleRechercheChange = (results, error) => {
        if (results) {
            setSearchResults(results);
            onSearch(results);
        } else {
            console.error('Erreur lors de la recherche :', error);
        }
    };

    const handlePerformSearch = async () => {
        if (!searchTerm || searchTerm.trim() === '') {
            setSearchMessage('Veuillez entrer une valeur de recherche.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/utilisateur/searchByName?nom=${searchTerm}`);
            const results = await response.json();
            console.log('Résultats de la recherche:', results);
            handleRechercheChange(results, null);

            // Effacer le message après une recherche réussie
            setSearchMessage('');

            navigate('/recherche');
        } catch (error) {
            handleRechercheChange(null, error);
            // Afficher le message d'erreur lorsqu'une recherche ne donne pas de résultats
            setSearchMessage('Aucun résultat trouvé.');
        }
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <Link to="/accueil" className={`navbar-brand ${activePath === 'accueil' ? 'active' : ''}`} onClick={handleAccueilClick}>
                        Recettes de Cuisine
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className={`nav-item ${activePath === 'accueil' ? 'active' : ''}`} onClick={handleAccueilClick}>
                                <Link to="/accueil" className="nav-link" href="#accueil">
                                    Accueil
                                </Link>
                            </li>
                            <li className={`nav-item ${activePath === 'recettes' ? 'active' : ''}`}>
                                <Link to="/recettes" className="nav-link" href="#recettes">
                                    Recettes
                                </Link>
                            </li>
                            <li className={`nav-item ${activePath === 'astuces' ? 'active' : ''}`}>
                                <Link to="/astuces" className="nav-link" href="#astuces">
                                    Astuces
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto right-corner">
                            {isLoggedIn ? (
                                <React.Fragment>
                                    <li className={`nav-item ${activePath === 'inscription' ? 'active' : ''}`} onClick={handleInscriptionClick}>
                                        <Link to="/inscription" className="nav-link" href="#inscription">
                                            Inscription
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${activePath === 'deconnexion' ? 'active' : ''}`} onClick={handleLogout}>
                                        <Link to="/deconnexion" className="nav-link" href="#deconnexion">
                                            Déconnexion
                                        </Link>
                                    </li>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <li className={`nav-item ${activePath === 'inscription' ? 'active' : ''}`} onClick={handleInscriptionClick}>
                                        <Link to="/inscription" className="nav-link" href="#inscription">
                                            Inscription
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${activePath === 'connexion' ? 'active' : ''}`} onClick={handleLoginClick}>
                                        <Link to="/connexion" className="nav-link" href="#connexion">
                                            Connexion
                                        </Link>
                                    </li>
                                </React.Fragment>
                            )}
                        </ul>
                    </div>

                    <div className="bg-light">
                        <div className="d-flex">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Rechercher..."
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                                onKeyDown={(e) => e.key === 'Enter' && handlePerformSearch()}
                            />
                            <button className="btn btn-primary ml-2" onClick={handlePerformSearch}>
                                Rechercher
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {showRegistrationForm && <UtilisateurFormAdd />}

            {showLoginForm && (
                <div className="login-form-container">
                    <LoginForm onLoginSuccess={handleLoginSuccess} />
                </div>
            )}
            {searchMessage && <p style={{ color: 'red' }}>{searchMessage}</p>}
        </div>
    );
};

export default NavigationBar;
