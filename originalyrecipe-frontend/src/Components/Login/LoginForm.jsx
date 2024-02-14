import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

const LoginForm = ({ onLoginSuccess, onLogout }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        // Vérifier l'état de connexion lors du chargement du composant
        checkLoginStatus();
    }, []);
    useEffect(() => {
        if(data) {
            onLoginSuccess(data)
        }
    }, [data]);
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/utilisateur/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const userData = await response.json(); // Supposons que l'API renvoie les données de l'utilisateur, y compris le rôle

                console.log('Connexion réussie!');
                setIsLoggedIn(true);
                setData({role:userData.role, isLoggedIn:true}); // Transmettez le rôle ici
            } else {
                console.error('Échec de la connexion');
            }
        } catch (error) {
            console.error('Erreur lors de la requête de connexion:', error);
        }
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/utilisateur/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setIsLoggedIn(false);
                // Appeler la fonction de rappel pour gérer la déconnexion
                if (onLogout) {
                    onLogout();
                }
            } else {
                console.error('Échec de la déconnexion. Assurez-vous que l\'utilisateur est authentifié.');
            }
        } catch (error) {
            console.error('Erreur lors de la requête de déconnexion:', error);
        }
    };

    const checkLoginStatus = async () => {
        // Vérifier l'état de connexion actuel
        try {
            const response = await fetch('http://localhost:8080/utilisateur/check-login', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error('Erreur lors de la vérification de l\'état de connexion:', error);
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Vous êtes connecté</p>
                    <button type="button" onClick={handleLogout}>Se déconnecter</button>
                </div>
            ) : (
                <form>
                    <label>
                        E-mail:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Mot de passe:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <button type="button" onClick={handleLogin}>Se connecter</button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
