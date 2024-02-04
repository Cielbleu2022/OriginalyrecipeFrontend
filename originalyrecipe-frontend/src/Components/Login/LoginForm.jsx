import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                console.log('Connexion réussie!');
                // Appeler la fonction de rappel pour gérer la redirection
                if (onLoginSuccess) {
                    onLoginSuccess();
                }
            } else {
                console.error('Échec de la connexion');
            }
        } catch (error) {
            console.error('Erreur lors de la requête de connexion:', error);
        }

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
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
        </div>
    );
};

export default LoginForm;
