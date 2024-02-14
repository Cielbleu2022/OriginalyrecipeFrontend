import React from 'react';

const AccueilPage = ({ isLoggedIn, userRole }) => {
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Bienvenue sur la page d'accueil</h2>
                    <p>Rôle de l'utilisateur : {userRole}</p>
                    {/* Ajoutez le contenu de votre page d'accueil ici */}
                    <h1>Bienvenue sur Originaly recipe!</h1>
                    <p>Bienvenue sur [Nom de votre application] - Découvrez les Saveurs de Madagascar!

                        Plongez dans un voyage culinaire inédit avec Originalyrecipe, votre guide gastronomique vers les
                        délices exotiques de Madagascar. Nous sommes ravis de vous accueillir dans cet univers gourmand
                        où les traditions culinaires riches et variées de cette île paradisiaque prennent vie.

                        🌴 Explorez la Diversité Culinaire de Madagascar 🌶️

                        Madagascar, surnommée l'île rouge, est un melting-pot de cultures qui se reflète magnifiquement
                        dans sa cuisine. De la cuisine côtière aux saveurs épicées , en passant par les influences
                        arabes et indiennes, chaque bouchée est une invitation à un festin sensoriel.

                        🍲 Des Recettes Authentiques et Délicieuses 🍍

                        Notre application regorge de recettes authentiques transmises de génération en génération.
                        Découvrez des plats emblématiques tels que le Ravitoto, le Romazava, et bien d'autres. Chaque
                        recette est soigneusement élaborée pour vous permettre de recréer l'authentique goût de
                        Madagascar dans le confort de votre cuisine.

                        📸 Des Images Qui Racontent des Histoires 🎨

                        Explorez visuellement chaque recette grâce à des images magnifiques qui capturent l'essence même
                        de la cuisine malgache. Des marchés animés aux plats somptueusement présentés, chaque photo
                        raconte une histoire de passion culinaire.

                        🔍 Filtrez par Région, Ingrédient ou Type de Plat 🍛

                        Naviguez facilement à travers notre collection de recettes en utilisant des filtres intuitifs.
                        Que vous soyez à la recherche d'un plat végétarien, de fruits de mer exquis ou de desserts
                        sucrés, [Nom de votre application] vous offre une expérience personnalisée pour satisfaire
                        toutes les papilles.

                        🌐 Partagez Vos Propres Recettes et Expériences 📝

                        Participez à notre communauté dynamique en partageant vos propres recettes et expériences
                        culinaires. Connectez-vous avec d'autres passionnés de cuisine malgache, échangez des conseils
                        et découvrez de nouvelles variantes de plats traditionnels.

                        Préparez-vous à un Festin Inoubliable! 🍽️

                        Nous sommes ravis de vous accompagner dans cette aventure gustative à travers les saveurs
                        uniques de Madagascar. Préparez-vous à explorer, cuisiner et déguster des plats qui éveilleront
                        vos sens et vous transporteront directement dans les rues animées de cette île enchanteresse.

                        Bienvenue sur Originalyrecipe - où chaque recette raconte une histoire, et chaque plat est une
                        célébration de la diversité culinaire de Madagascar! Bon appétit!

                    </p>
                </div>
            ) : (
                <div>
                    <h2>Vous n'êtes pas connecté</h2>
                    <p>Connectez-vous pour accéder à cette page.</p>
                    {/* Vous pouvez également rediriger l'utilisateur vers la page de connexion */}
                </div>
            )}

        </div>
    );
};

export default AccueilPage;
