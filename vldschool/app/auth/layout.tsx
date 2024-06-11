import React from "react";

export default function AuthScreenLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full flex">
            <div className="flex-1">
                <div className="info" id="infoContent">
                    <div>
                        <a href="/">
                            <img className="logo" src="/logo/vldminiwhite.png" alt="VLDschool" />
                        </a>
                        <h1>Ravi de vous revoir !</h1>
                        <p>Connexion</p>
                    </div>
                    <div className="LoginSteps">
                        <h2>Étapes de la connexion</h2>
                        <div className="step">
                            <span className="material-icons-round">
                                edit
                            </span>
                            <p>Entrez votre identifiant et votre mot de passe</p>
                        </div>
                        <div className="step">
                            <span className="material-icons-round">
                                done
                            </span>
                            <p>Accèdez à votre espace</p>
                        </div>
                        <div className="step">
                            <span className="material-icons-round">
                                school
                            </span>
                            <p>Apprenez en toute simplicité !</p>
                        </div>
                    </div>
                    <div>
                        <h2>Vos liens</h2>
                        <div className="links">
                            <span className="material-icons-round">
                                login
                            </span>
                            <a href="/auth/signup">Je ne suis pas encore inscrit</a><br />
                        </div>
                        <div className="links">
                            <span className="material-icons-round">
                                home
                            </span>
                            <a href="/">Accueil du site</a><br />
                        </div>
                        <div className="links">
                            <span className="material-icons-round">
                                book
                            </span>
                            <a href="/userconditions">Conditions d'utilisation</a><br />
                        </div>
                        <div className="links">
                            <span className="material-icons-round">
                                description
                            </span>
                            <a href="/confidentialpolitical">Déclaration de confidentialité</a><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}