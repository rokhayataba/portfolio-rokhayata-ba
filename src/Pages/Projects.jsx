// src/Pages/Projects.jsx
import ProjectCard from "../Components/ProjectCard";
import portfolioImg from "../Assets/porfolio.jpeg";
import meteoImg from "../Assets/meteo.jpeg";
import ecommerceImg from "../Assets/e-commerce.jpeg";

const projects = [
  {
    id: 1,
    title: "Portfolio React",
    description: "Portfolio moderne créé avec React et Tailwind CSS.",
    image: portfolioImg
  },
  {
    id: 2,
    title: "Application météo",
    description: "Application météo utilisant une API pour afficher la météo.",
    image: meteoImg
  },
  {
    id: 3,
    title: "Site E-commerce",
    description: "Site de vente en ligne simple avec produits et panier.",
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