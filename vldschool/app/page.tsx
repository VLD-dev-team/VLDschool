import { Metadata } from "next";
import React from "react";
import LandingPageProfile from "./components/landingPageProfileSelector";
import WelcomeTimer from "./components/welcomeTimer";
import Logos from "./components/topCircleLogo";
import Card from "./components/card";
import VisitorSection from "./components/visitorCount";
// import CarouselSection from "./components/caroussel";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "VLDschool",
  description: "Trouvez la formation qu'il vous faut avec VLDschool.",
};

export default async function LandingPage() {
  const session = await auth();

  return (
    <div className="w-full h-full bg-[var(--primary-container)] overflow-y-scroll text-white">
      <header className="fixed z-10 w-full min-h-[100px] flex flex-col items-center backdrop-blur-lg bg-[var(--primary-container-70)]">
        <a href="/shop" className="w-full z-10 h-[50px] bg-white text-black flex items-center justify-center">
          <div className="w-[90%] xl:w-[70%] h-full flex items-center justify-between ">
            <p><strong>Offre de bienvenue ! </strong><span className="hidden md:inline">Formation linux offerte + réduction sur la boutique</span></p>
            <div className="flex gap-2 items-center">
              <p className="hidden lg:block">Se termine le <WelcomeTimer></WelcomeTimer></p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </a>
        <div className="w-[90%] xl:w-[70%] h-[100px] flex items-center justify-between">
          <nav className="flex items-center gap-6">
            <a href="#" className="shrink-0"><img src="/logos/vldminiwhite.png" alt="VLDschool" className="h-10" /></a>
            <a href="#" className="hidden md:block hover:underline">Accueil</a>
            <a href="/shop" className="hidden sm:flex hover:underline items-center gap-1" target="_blank">
              <p>Boutique</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
              </svg>
            </a>
          </nav>
          <LandingPageProfile></LandingPageProfile>
        </div>
      </header>
      <section className="pt-48 md:pt-64 pb-20 flex items-center justify-center flex-col gap-4">
        <Logos></Logos>
        <h1 className="text-4xl font-semibold text-center px-6">Trouvez la formation qu'il vous faut avec VLDschool.</h1>
        <h2 className="text-2xl text-center px-6">Informatique, graphisme, 3D, tout ce qu'il faut pour bien vous lancer !</h2>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <a href="/shop" className="flex items-center justify-center gap-2 rounded bg-[var(--primary)] px-7 py-4 hover:bg-[var(--primary-hover)] transition-colors">
          <p>Parcourir nos offres de formations</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0 0 18 15.06v-11a.75.75 0 0 0-.546-.721A9.006 9.006 0 0 0 15 3a8.963 8.963 0 0 0-4.25 1.065V16.82ZM9.25 4.065A8.963 8.963 0 0 0 5 3c-.85 0-1.673.118-2.454.339A.75.75 0 0 0 2 4.06v11a.75.75 0 0 0 .954.721A7.506 7.506 0 0 1 5 15.5c1.579 0 3.042.487 4.25 1.32V4.065Z" />
          </svg>
        </a>
        <a href="/auth" className="flex items-center justify-center gap-2 rounded bg-[var(--primary)] px-7 py-4 hover:bg-[var(--primary-hover)] transition-colors">
          {(session) ? <p>Accéder au dashboard</p> : <p>Créer un compte étudiant</p>}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </a>
      </section>
      <section className="py-36 flex flex-col items-center justify-center gap-2">
        <h3 className="text-xl px-6 text-center font-bold">Bénéficiez d'une formation complète et accompagnée.</h3>
        <p className="px-6 text-center">Toute nos formations comprennent les éléments suivants pour vous permettre de réussir</p>
        <div className="w-[90%] xl:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full">
              <div className="lg:basis-9/12 xl:basis-7/12 shrink-0 p-8">
                <span className="material-symbols-rounded text-[24px] rounded-full p-3 border-[var(--neutral)] border">description</span>
                <p className="pt-2 font-semibold">Un support écrit disponible en ligne 24h/24h</p>
                <p className="pt-2">Toutes nos formations sont organisés en chapitres disponibles en ligne depuis le lecteur. Le support écrit est accessible depuis n'importe quel appareil 24h/24h.</p>
              </div>
              <div className="h-40 lg:h-60 mx-8 lg:mx-0 lg:block lg:w-full bg-cover lg:my-8 lg:rounded-s-xl rounded-t" style={{ backgroundImage: "url('/screenshots/reader_linux.png')" }}></div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full">
              <div className="lg:basis-9/12 xl:basis-7/12 shrink-0 p-8">
                <span className="material-symbols-rounded text-[24px] rounded-full p-3 border-[var(--neutral)] border">edit</span>
                <p className="pt-2 font-semibold">Des projets et des exercices guidés sur chaque sujet du cours</p>
                <p className="pt-2">Des exercices et des projets vous permettront d'experimenter chaque notion de votre formation. Les projets soumis seront vérifié par nos professeurs pour vous faire un retour sur vos erreurs.</p>
              </div>
              <div className="h-40 lg:h-60 mx-8 lg:mx-0 lg:block lg:w-full bg-cover lg:my-8 lg:rounded-s-xl rounded-t" style={{ backgroundImage: "url('/screenshots/exo_linux.png')" }}></div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full">
              <div className="lg:basis-9/12 xl:basis-7/12 shrink-0 p-8">
                <span className="material-symbols-rounded text-[24px] rounded-full p-3 border-[var(--neutral)] border">movie</span>
                <p className="pt-2 font-semibold">Des vidéos explicatives en plus de chacunes des leçons</p>
                <p className="pt-2">Vous pourrez retrouver une vidéo explicative pour chaque chapitre afin de mieux comprendre le sujet et de pouvoir progresser.</p>
              </div>
              <div className="h-40 lg:h-60 mx-8 lg:mx-0 lg:block lg:w-full bg-cover lg:my-8 lg:rounded-s-xl rounded-t" style={{ backgroundImage: "url('/screenshots/movie_linux.png')" }}>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full">
              <div className="lg:basis-9/12 xl:basis-7/12 shrink-0 p-8">
                <span className="material-symbols-rounded text-[24px] rounded-full p-3 border-[var(--neutral)] border">chat</span>
                <p className="pt-2 font-semibold">Un channel discord pour pouvoir communiquer avec vos professeurs et leurs poser toutes vos questions</p>
                <p className="pt-2">Vous avez la possibilité d'être guidé de A à Z et même de poser des questions à votre professeur afin de pouvoir éclaircir les différents points que vous n'avez pas compris.</p>
              </div>
              <div className="h-40 lg:h-60 mx-8 lg:mx-0 lg:block lg:w-full bg-cover lg:my-8 lg:rounded-s-xl rounded-t" style={{ backgroundImage: "url('/screenshots/discord_screen.png')" }}>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <VisitorSection></VisitorSection>
      <section className="py-6 flex flex-col items-center justify-center gap-2">
        <section className="py-8 flex flex-col items-center justify-center gap-4 px-4 sm:px-6 md:px-9 max-w-[70%]">
          <h3 className="text-xl px-6 text-center font-bold">Profitez d'un système pensé pour l'apprentissage</h3>
          <div className="w-full p-4 rounded-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 mb-4 md:mb-0 md:pr-8">
                <h4 className="text-lg md:text-xl text-white">Le système VLD xp</h4>
                <p className="text-gray-300">Un système d'XP vous encourageant à apprendre et à développer vos compétences. Apprenez tout en gagnant des récompenses.</p>
                <div className="mt-6 bg-[var(--surface)] rounded text-[var(--neutral)] p-4 rounded-md max-w-full">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/5 text-center items-center justify-center">
                      <span className="material-symbols-rounded text-[48px]">query_stats</span>
                    </div>
                    <div className="flex-1 w-full md:w-4/5 overflow-hidden">
                      <h5 className="text-lg font-semibold text-white">Les paliers</h5>
                      <p className="text-gray-300">Les paliers ont été pensés de manière à ce que tout au long de votre apprentissage, vous puissiez gagner les récompenses. Les niveaux étant de plus en plus durs à atteindre, on vous encourage à développer de nouvelles compétences.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 text-center md:pl-8">
                <div className="text-3xl md:text-4xl mb-4 text-white">
                  <span className="material-symbols-rounded text-[48px]">trending_up</span>
                </div>
                <p className="text-gray-300">Gagnez tout en apprenant</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 rounded-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 mb-4 md:mb-0 md:pr-8">
                <div className="mt-6 bg-[var(--surface)] rounded text-[var(--neutral)] p-4 rounded-md max-w-full">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/5 text-center items-center justify-center">
                      <span className="material-symbols-rounded text-[48px]">box</span>
                    </div>
                    <div className="flex-1 w-full md:w-4/5 overflow-hidden">
                      <h5 className="text-lg font-semibold text-white">Les récompenses</h5>
                      <p className="text-gray-300">C'est à travers votre montée en niveau que vous retrouverez des récompenses, toutes les unes plus intéressantes que les autres, allant de code promotionnel -10%, jusqu'à une formation offerte en passant par des vidéos gratuites et des heures de cours particuliers avec le professeur de votre choix.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 text-center md:pr-8">
                <div className="text-3xl md:text-4xl mb-4 text-white">
                  <span className="material-symbols-rounded text-[48px]">featured_seasonal_and_gifts</span>
                </div>
                <p className="text-gray-300">Profitez des récompenses</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 rounded-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 mb-4 md:mb-0 md:pr-8">
                <div className="mt-6 bg-[var(--surface)] rounded text-[var(--neutral)] p-4 rounded-md max-w-full">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-shrink-0 w-full md:w-1/5 text-center items-center justify-center">
                      <span className="material-symbols-rounded text-[48px]">monitoring</span>
                    </div>
                    <div className="flex-1 w-full md:w-4/5 overflow-hidden">
                      <h5 className="text-lg font-semibold text-white">Le suivi</h5>
                      <p className="text-gray-300">C'est lorsque vous aurez appris et ce pendant plusieurs jours que vous pourrez constater votre évolution. En effet grâce à notre graphique de suivi, vous pourrez voir quel jour vous avez contribué le plus ce dernier mois mais aussi à quel hauteur vous aurez appris en 1 mois.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 text-center md:pr-8">
                <div className="text-3xl md:text-4xl mb-4 text-white">
                  <span className="material-symbols-rounded text-[48px]">analytics</span>
                </div>
                <p className="text-gray-300">Constatez vos progrès</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="py-8 flex flex-col items-center justify-center gap-2">
        <h3 className="text-xl px-6 text-center font-bold">Profitez de l'offre VLD+</h3>
        <p className="px-6 text-center">Si vous souhaitez aller encore plus loin</p>
        <div className="w-[90%] xl:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full">
              <div className="lg:basis-9/12 xl:basis-7/12 shrink-0 p-8">
                <span className="material-symbols-rounded text-[24px] rounded-full p-3 border-[var(--neutral)] border">video_camera_front</span>
                <p className="pt-2 font-semibold">10h de cours particuliers</p>
                <p className="pt-2">Des cours à des prix privilégiers avec le professeur de la formation à disposer quand vous le souhaitez en fonction des disponibilités de votre professeur. Ces cours ont été creer afin d'avoir le suivi le plus personnalisé possible.</p>
              </div>
              <div className="h-40 lg:h-60 mx-8 lg:mx-0 lg:block lg:w-full bg-cover lg:my-8 lg:rounded-s-xl rounded-t" style={{ backgroundImage: "url('/screenshots/particular_course.png')" }}></div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full">
              <div className="lg:basis-9/12 xl:basis-7/12 shrink-0 p-8">
                <span className="material-symbols-rounded text-[24px] rounded-full p-3 border-[var(--neutral)] border">post_add</span>
                <p className="pt-2 font-semibold">Du contenu supplémentaire et un accès privilégier</p>
                <p className="pt-2">En plus des différents cours donnés par le professeur, vous aurez accès à un canal de communication privée vous permettant de discuter avec les professeurs des cours et de récupérer les supports de cours.</p>
              </div>
              <div className="h-40 lg:h-60 mx-8 lg:mx-0 lg:block lg:w-full bg-cover lg:my-8 lg:rounded-s-xl rounded-t" style={{ backgroundImage: "url('/screenshots/vip_screen.png')" }}></div>
            </div>
          </Card>
        </div>
      </section>
      {/* <CarouselSection></CarouselSection> */}
    </div>
  )
}
