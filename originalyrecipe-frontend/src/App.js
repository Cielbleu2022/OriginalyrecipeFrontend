import logo from './logo.svg';
import './App.css';
import React from "react";
import UtilisateurForm from "./Components/UtilisateurForm/UtilisateurFormAdd";
import 'bootstrap/dist/css/bootstrap.min.css';
import UtilisateurFormGetAll from "./Components/UtilisateurForm/UtilisateurFormGetAll";

function App() {
  return (
    <div className="App">
        <UtilisateurForm/>
        <UtilisateurFormGetAll/>



    </div>
  );
}

export default App;
