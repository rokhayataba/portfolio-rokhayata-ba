// src/Pages/About.jsx
import aboutImg from "../Assets/yata.jpeg";
import cvImage from "../Assets/cv rokhayataba.jpeg"; // ton CV en image

function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-10">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
        
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src={aboutImg}
            alt="Rokhayata Bâ"
            className="w-80 h-45 md:w-96 md:h-96 object-cover rounded-lg border-4 border-gray-700"
          />
        </div>

        {/* Texte */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">À propos de moi</h1>
          
          <p className="text-lg">
            Je suis Rokhayata Bâ, étudiante en Génie Informatique, et je souhaite me spécialiser en développement web.  
            Je suis passionnée par la création d’interfaces modernes et interactives qui offrent une expérience utilisateur optimale.
          </p>

          <p className="text-lg">
            Mon objectif est de développer des sites web et applications performants, esthétiques et responsives.  
            J’aime apprendre de nouvelles technologies et améliorer mes compétences pour créer des projets innovants et fonctionnels.
          </p>

          <p className="text-lg font-semibold">Compétences principales :</p>
          <ul className="list-disc list-inside text-lg">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Tailwind CSS</li>
            <li>Création de composants réutilisables</li>
            <li>Gestion du state et des hooks React</li>
            <li>Design responsive et expérience utilisateur</li>
          </ul>

          {/* Bouton CV */}
          <a
            href={cvImage}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Voir mon CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;