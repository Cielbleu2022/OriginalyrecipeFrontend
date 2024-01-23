import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "./Components/AccueilPage /NavigationBar";
import Accueil from "./Components/AccueilPage /Accueil";
import Inscription from "./Components/AccueilPage /Inscription";


const App = () => {
    return (
        <Router>
            <div className="App">
                <NavigationBar />
                <Routes>
                    <Route path="/accueil" element={<Accueil />} />
                    <Route path="/inscription" element={<Inscription />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
