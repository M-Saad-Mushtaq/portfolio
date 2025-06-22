
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  image: string;
  year: string;
  type: string;
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: 'Portfolio Website',
      description: 'Modern portfolio website with glassmorphic design and smooth animations.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/portfolio',
      image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=600&fit=crop',
      year: '2025',
      type: 'Website'
    },
  
    {
      id: 2,
      name: 'AI Image Generator',
      description: 'AI image generator built with the MERN stack.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/AI-Image-Generator',
      image: 'https://images.unsplash.com/photo-1502759683240-e98db45b829a?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Web Application'
    },
    {
      id: 3,
      name: 'Tenzies',
      description: 'Dice game “Tenzies” implemented in React.',
      techStack: ['React'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/Tenzies-Game-Using-REACT',
      image: 'https://images.unsplash.com/photo-1562826277-5d32259f9487?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Web Game'
    },
    {
      id: 4,
      name: 'PulsePlay',
      description: 'AI-based song streaming and recommendation mobile app.',
      techStack: ['Kotlin','XML','Firebase'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/Pulseplay',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop',
      year: '2025',
      type: 'Mobile Application'
    },
    {
      id: 5,
      name: 'Chat App',
      description: 'Real-time chat application using MERN stack and Socket.io.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/Chat-App',
      image: 'https://images.unsplash.com/photo-1551033139-3db6e2e40416?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Web Application'
    },
    {
      id: 6,
      name: 'Movie Review Website',
      description: 'Movie review platform built on the MERN stack.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/Movie-Review-Website-NodeJS-MongoDB-',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Web Application'
    },
    {
      id: 7,
      name: 'NGO Blood Donation System (.NET)',
      description: 'Blood donation management web app using SQL and .NET Core.',
      techStack: ['.NET Core', 'SQL'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/Blood-Donation-Site-ASP.NET-SQL-SERVER',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Web Application'
    },
    {
      id: 8,
      name: 'NGO Blood Donation System (MERN)',
      description: 'Blood donation management web app built with the MERN stack.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/NGO-Blood-Donation-Fullstack-WebApp',
      image: 'https://images.unsplash.com/photo-1516455207990-6a4e8e0dbd07?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Web Application'
    },
    {
      id: 9,
      name: 'Solitaire',
      description: 'Classic solitaire card game implemented with C++ libraries.',
      techStack: ['C++'],
      githubLink: 'http://github.com/M-Saad-Mushtaq/Solitaire-Using-OOP',
      image: 'https://images.unsplash.com/photo-1565299564271-93a8d6c411c9?w=800&h=600&fit=crop',
      year: '2023',
      type: 'Game'
    },
    {
      id: 10,
      name: 'Alphabet Catcher',
      description: 'Assembly-language game where players catch falling alphabets.',
      techStack: ['Assembly'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/Alphabet-Catcher-in-Assembly',
      image: 'https://images.unsplash.com/photo-1591797419764-18b7b145ffa5?w=800&h=600&fit=crop',
      year: '2023',
      type: 'Game'
    },
    {
      id: 11,
      name: 'Teleword',
      description: 'C++ console-based word-finding program for a 15×15 grid.',
      techStack: ['C++'],
      githubLink: 'https://github.com/M-Saad-Mushtaq/Teleword-Project',
      image: 'https://images.unsplash.com/photo-1605540542504-9500f82f835a?w=800&h=600&fit=crop',
      year: '2022',
      type: 'Console Application'
    }
  ];
  

  const allTechs = ['All', ...Array.from(new Set(projects.flatMap(p => p.techStack)))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech === 'All' || project.techStack.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass w-full pl-10 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 bg-background/50"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="glass pl-10 pr-8 py-3 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 bg-background/50 appearance-none cursor-pointer"
            >
              {allTechs.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full glass bg-blue-50 dark:bg-blue-900/30 text-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full glass text-muted-foreground">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{selectedProject.name}</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
            
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            
            <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full glass bg-blue-50 dark:bg-blue-900/30 text-blue-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-4 py-2 hover:scale-105 transition-all duration-300"
                >
                  GitHub
                </a>
              )}
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
