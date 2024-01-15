// NavigationBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#accueil">Recettes de Cuisine</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto"> {/* Utilisez mr-auto pour pousser à gauche */}
                        <li className="nav-item">
                            <a className="nav-link" href="#accueil">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#recettes">Recettes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#astuces">Astuces</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto right-corner"> {/* Ajoutez la classe right-corner ici */}
                        <li className="nav-item">
                            <a className="nav-link" href="#inscription">Inscription</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#connexion">Connexion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
