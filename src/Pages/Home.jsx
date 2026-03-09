// src/Pages/Home.jsx
import aboutImg from "../Assets/about .jpeg";

function Home() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-900 text-white transition-colors duration-500 flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">

          {/* Photo */}
          <img
            src={aboutImg}
            alt="Yatta Bâ"
            className="w-80 h-45 object-cover rounded-lg border-4 border-gray-700"
          />

          {/* Texte */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Bienvenue sur mon Portfolio</h1>

            <p>
              Email:
              <a href="mailto:rokhayataba@gmail.com" className="underline text-blue-400 ml-1">
                rokhayataba@gmail.com
              </a>
            </p>

            <p>
              Je suis Rokhayata Bâ, étudiante en Génie Informatique, passionnée par le développement web.
              Je crée des sites et applications modernes, responsives et esthétiques, adaptés aux besoins des utilisateurs.

              Vous pouvez me contacter facilement par email, Snapchat, Instagram ou téléphone.
              Découvrez mes projets ci-dessous pour voir mes réalisations.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;