import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UtilisateurFormGetAll from "./Components/UtilisateurForm/UtilisateurFormGetAll";
import UtilisateurFormSearchById from "./Components/UtilisateurForm/UtilisateurFormSearchById";


function App() {
  return (
    <div className="App">
        <UtilisateurFormGetAll/>
        <UtilisateurFormSearchById/>




    </div>
  );
}

export default App;
