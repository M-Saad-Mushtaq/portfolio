
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
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubLink: 'https://github.com/msaad/ecommerce',
      demoLink: 'https://demo.example.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Web Application'
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      techStack: ['React', 'Firebase', 'Material-UI'],
      githubLink: 'https://github.com/msaad/taskmanager',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Web Application'
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive charts.',
      techStack: ['JavaScript', 'API Integration', 'Chart.js'],
      githubLink: 'https://github.com/msaad/weather',
      demoLink: 'https://weather.example.com',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      year: '2023',
      type: 'Web Application'
    },
    {
      id: 4,
      name: 'Portfolio Website',
      description: 'Modern portfolio website with glassmorphic design and smooth animations.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/msaad/portfolio',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      year: '2024',
      type: 'Website'
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
