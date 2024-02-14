import LoginForm from "../Login/LoginForm";
import UtilisateurFormAdd from "../UtilisateurForm/UtilisateurFormAdd";
import UtilisateurFormGetAll from "../UtilisateurForm/UtilisateurFormGetAll";
import {useState} from "react";
import NavigationBar from "./NavigationBar";

const Accueil = ({isLoggedInProp}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/utilisateur/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Vos données de connexion
                }),
            });

            if (response.ok) {
                console.log('Connexion réussie!');
                setIsLoggedIn(true);
            } else {
                console.error('Échec de la connexion');
            }
        } catch (error) {
            console.error('Erreur lors de la requête de connexion:', error);
        }
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
            } else {
                console.error('Échec de la déconnexion. Assurez-vous que l\'utilisateur est authentifié.');
            }
        } catch (error) {
            console.error('Erreur lors de la requête de déconnexion:', error);
        }
    };


    const handleLoginSuccess = (loginInfo) => {
        console.log(loginInfo)
        setIsLoggedIn(true);
    };




    return (
        <div>
            {isLoggedIn && "Welcome To Accueil"}
            {/*isLoggedIn ? (
                <div>
                    <h2>Accueil</h2>
                    <button onClick={handleLogout}>Se déconnecter</button>
                    <NavigationBar/>
                </div>
            ) : (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            )*/}
        </div>
    );
};

export default Accueil;
