import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Filter, Search, Shapes } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const fallbackImage = '/placeholder.svg';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allTechs = useMemo(
    () => ['All', ...Array.from(new Set(projects.flatMap((project) => project.techStack)))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesSearch =
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTech = selectedTech === 'All' || project.techStack.includes(selectedTech);
        return matchesSearch && matchesTech;
      }),
    [searchTerm, selectedTech]
  );

  const projectImages = selectedProject?.images?.length
    ? selectedProject.images
    : [fallbackImage];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const goToNextImage = () => {
    if (!projectImages.length) return;
    setActiveImageIndex((current) => (current + 1) % projectImages.length);
  };

  const goToPrevImage = () => {
    if (!projectImages.length) return;
    setActiveImageIndex((current) => (current - 1 + projectImages.length) % projectImages.length);
  };

  useEffect(() => {
    if (!showModal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }

      if (!selectedProject) return;

      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % projectImages.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) => (current - 1 + projectImages.length) % projectImages.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showModal, selectedProject, projectImages.length]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-amber-50/50 via-rose-50/30 to-background dark:from-slate-950 dark:via-slate-900/80 dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, experiments, and creative builds
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="glass w-full pl-10 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 bg-background/50"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <select
              value={selectedTech}
              onChange={(event) => setSelectedTech(event.target.value)}
              className="glass pl-10 pr-8 py-3 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 bg-background/50 appearance-none cursor-pointer"
            >
              {allTechs.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const coverImage = project.images[0] || fallbackImage;
            return (
              <div
                key={project.id}
                className="glass-card group cursor-pointer animate-fade-in border border-orange-200/30 dark:border-orange-400/10"
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={coverImage}
                    alt={project.name}
                    className="w-full h-48 object-contain bg-black/5 dark:bg-black/20 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold leading-tight">{project.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-200 whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-full glass bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-1 text-xs rounded-full glass text-muted-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {showModal && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.name} details`}
        >
          <div
            className="glass-card max-w-5xl w-full max-h-[94vh] overflow-y-auto border border-orange-200/30 dark:border-orange-400/10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-200">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedProject.year}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-200">
                    <Shapes className="w-3.5 h-3.5" />
                    {selectedProject.type}
                  </span>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            <div className="relative mb-4">
              <img
                src={projectImages[activeImageIndex] || fallbackImage}
                alt={`${selectedProject.name} screenshot ${activeImageIndex + 1}`}
                className="w-full h-[52vh] md:h-[66vh] object-contain bg-black/5 dark:bg-black/20 rounded-lg"
              />

              {projectImages.length > 1 && (
                <>
                  <button
                    onClick={goToPrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:scale-105 transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:scale-105 transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {projectImages.length > 1 && (
              <div className="flex items-center justify-center gap-2 mb-5">
                {projectImages.map((image, index) => (
                  <button
                    key={`${selectedProject.slug}-${index}`}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-14 h-10 rounded-md overflow-hidden border transition-all ${
                      activeImageIndex === index
                        ? 'border-orange-500 scale-105'
                        : 'border-border opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`Open image ${index + 1}`}
                  >
                    <img src={image} alt={`${selectedProject.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <p className="text-muted-foreground mb-5">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full glass bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
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
                  className="glass-card px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 transition-all duration-300"
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
