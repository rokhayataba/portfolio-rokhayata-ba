// src/Pages/Projects.jsx
import ProjectCard from "../Components/ProjectCard";
import portfolioImg from "../Assets/porfolio.jpeg";
import logoImg from "../Assets/logo.jpeg";
import ecommerceImg from "../Assets/e-commerce.jpeg";

const projects = [
  {
    id: 1,
    title: "Portfolio React",
    description: "Site web personnel développé pour présenter mon profil, mes compétences et mes projets. Le site possède plusieurs sections comme Home, About, Skills et Projects avec un design moderne et responsive.",
    image: portfolioImg
  },
  {
    id: 2,
    title: "Image sur canva",
    description: "Affiche promotionnelle réalisée sur Canva pour annoncer une soirée de Saint-Valentin du Yata Club, avec un design romantique mettant en avant la date, l’heure et le prix d’entrée.",
    image: logoImg
  },
  {
    id: 3,
    title: "Site E-commerce Wordpress",
    description: "Yata Store est une boutique en ligne de vêtements que j’ai créée avec WordPress. Le site permet aux utilisateurs de parcourir différents articles, consulter les détails des produits et naviguer facilement dans la boutique grâce à une interface moderne et simple.",
    image: ecommerceImg
  }
];

function Projects() {
  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-10 text-center">Mes Projets</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;