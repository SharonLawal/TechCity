import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Project 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Project 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Project 1',
    image: 'https://via.placeholder.com/150',
  },
];

const ProjectCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img className="w-full h-32 object-cover rounded-md mb-4" src={image} alt={title} />
      <h3 className="text-center text-gray-700 font-semibold">{title}</h3>
    </div>
  );
};

const Board = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-blue-600 font-bold text-lg mb-4">Favourites Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-blue-600 font-bold text-lg mb-4">Recent Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          {projects.slice(3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
