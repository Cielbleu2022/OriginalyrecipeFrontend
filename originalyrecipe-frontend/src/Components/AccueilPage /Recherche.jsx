// Recherche.jsx
import React from 'react';

const Recherche = ({ searchResults }) => {
    console.log('Résultats de la recherche dans Recherche.jsx :', searchResults);

    return (
        <div className="search-container">
            {searchResults && searchResults.length > 0 ? (
                <div className="search-results">
                    <h3>Résultats de la recherche :</h3>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>
                                Nom: {result.nom}, Prénom: {result.prenom}, Email: {result.mail}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Aucun résultat trouvé</p>
            )}
        </div>
    );
};

export default Recherche;
