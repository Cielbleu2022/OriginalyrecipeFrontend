import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UtilisateurFormGetAll from "./Components/UtilisateurForm/UtilisateurFormGetAll";
import UtilisateurFormSearchById from "./Components/UtilisateurForm/UtilisateurFormSearchById";
import UtilisateurFormSearchByName from "./Components/UtilisateurForm/UtilisateurFormSearchByName";
import Accueil from "./Components/AccueilPage /Accueil";


function App() {
  return (
    <div className="App">
        <Accueil/>
        <UtilisateurFormGetAll/>
        <UtilisateurFormSearchById/>
        <UtilisateurFormSearchByName/>



    </div>
  );
}

export default App;
