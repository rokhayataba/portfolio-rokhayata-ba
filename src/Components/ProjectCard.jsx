// src/Components/ProjectCard.jsx
function ProjectCard({ title, description, image }) {
  return (
    <div className="border p-6 rounded-lg shadow-lg hover:scale-105 transition transform bg-white dark:bg-gray-700 text-black dark:text-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover mb-4 rounded"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;