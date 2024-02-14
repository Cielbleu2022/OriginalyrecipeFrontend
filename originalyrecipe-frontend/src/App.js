// App.jsx
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "./Components/AccueilPage /NavigationBar";
import AccueilPage from "./Components/AccueilPage /AccueilPage";
import Recherche from "./Components/AccueilPage /Recherche";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(); // Ajoutez cette ligne
    console.log('Rendering App component. isLoggedIn:', isLoggedIn, 'userRole:', userRole); // Ajout de console.log
    const [loginInfo, setLoginInfo] = useState(false);
    const loginUser = (longinInfo) => {
        setLoginInfo(longinInfo)
    }
    return (
        <Router>
            <div>
                <NavigationBar
                    onSearch={setSearchResults}
                    setLoginInfo={loginUser}

                />
                <div style={{marginTop: "100px"}}>
                    {loginInfo && <h1>Mon Application React${loginInfo.role} ${loginInfo.isLoggedIn.toString()}</h1>}
                    <Routes>
                        <Route
                            path="/accueil"
                            element={
                                // Condition pour afficher AccueilPage uniquement si l'utilisateur est connecté en tant qu'admin
                               loginInfo && loginInfo.isLoggedIn && loginInfo.role === "admin" ? (
                                    <AccueilPage isLoggedIn={loginInfo.isLoggedIn} userRole={loginInfo.role}/>
                                ) : (
                                    <div>Vous n'avez pas le droit de voir cette page</div>
                                )
                            }
                        />
                        <Route path="/recherche" element={<Recherche searchResults={searchResults}/>}/>

                        {/* Ajoutez une route pour Accueil ici si nécessaire */}
                    </Routes>


                </div>

            </div>
        </Router>
    );
};

export default App;
