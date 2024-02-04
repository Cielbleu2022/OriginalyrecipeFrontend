// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from "./Components/AccueilPage /Accueil";




const App = () => {
    return (
        <Router>
            <div>
                <h1>Mon Application React</h1>
                <Routes>
                    <Route path="/login" element={<Accueil />} />
                    {/* Ajoutez une route pour Accueil ici si nécessaire */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
