export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  images: string[];
  year: string;
  type: string;
}

const projectImageModules = import.meta.glob('/public/assets/projects/*/*.{png,PNG,jpg,JPG}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>;

type ProjectImageEntry = {
  fileName: string;
  url: string;
};

const validProjectImageName = /^\d{2}-(cover|detail)\.(png|jpg)$/i;

const groupedImageEntries = Object.entries(projectImageModules).reduce<Record<string, ProjectImageEntry[]>>(
  (accumulator, [path, url]) => {
    const match = path.match(/\/public\/assets\/projects\/([^/]+)\/([^/]+)$/);
    if (!match) return accumulator;

    const slug = match[1];
    const fileName = match[2];

    if (!validProjectImageName.test(fileName)) {
      return accumulator;
    }

    if (!accumulator[slug]) {
      accumulator[slug] = [];
    }

    accumulator[slug].push({ fileName, url });
    return accumulator;
  },
  {}
);

const projectImagesBySlug = Object.fromEntries(
  Object.entries(groupedImageEntries).map(([slug, entries]) => [
    slug,
    entries
      .sort((first, second) =>
        first.fileName.localeCompare(second.fileName, undefined, {
          numeric: true,
          sensitivity: 'base',
        })
      )
      .map((entry) => entry.url),
  ])
) as Record<string, string[]>;

const projectMetadata: Omit<Project, 'images'>[] = [
  {
    id: 1,
    slug: 'huntigo-web',
    name: 'Huntigo Website',
    description: 'Innovative platform that combines AR and location-based treasure hunts to drive foot traffic to local businesses.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/huntigo-web',
    year: '2025',
    type: 'Website',
  },
  {
    id: 2,
    slug: 'portfolio-website',
    name: 'Portfolio Website',
    description: 'Modern portfolio website with glassmorphic design and smooth animations.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/portfolio',
    year: '2025',
    type: 'Website',
  },
  {
    id: 3,
    slug: 'pulseplay',
    name: 'PulsePlay',
    description: 'AI-based song streaming and recommendation mobile app.',
    techStack: ['Kotlin', 'XML', 'Firebase'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/Pulseplay',
    year: '2025',
    type: 'Mobile Application',
  },
  {
    id: 4,
    slug: 'kinderpal',
    name: 'Kinderpal',
    description: 'Content Management app for Kids.',
    techStack: ['Kotlin', 'XML', 'Firebase'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/kinderpal',
    year: '2025',
    type: 'Mobile Application',
  },
  {
    id: 5,
    slug: 'ai-image-generator',
    name: 'AI Image Generator',
    description: 'AI image generator built with the MERN stack.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/AI-Image-Generator',
    year: '2024',
    type: 'Web Application',
  },
  {
    id: 6,
    slug: 'ngo-blood-donation-dotnet',
    name: 'NGO Blood Donation System (.NET)',
    description: 'Blood donation management web app using SQL and .NET Core.',
    techStack: ['.NET Core', 'SQL'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/Blood-Donation-Site-ASP.NET-SQL-SERVER',
    year: '2024',
    type: 'Web Application',
  },
  {
    id: 7,
    slug: 'ngo-blood-donation-mern',
    name: 'NGO Blood Donation System (MERN)',
    description: 'Blood donation management web app built with the MERN stack.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/NGO-Blood-Donation-Fullstack-WebApp',
    year: '2024',
    type: 'Web Application',
  },
  {
    id: 8,
    slug: 'movie-review-website',
    name: 'Movie Review Website',
    description: 'Movie review platform built on the MERN stack.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/Movie-Review-Website-NodeJS-MongoDB-',
    year: '2024',
    type: 'Web Application',
  },
  {
    id: 9,
    slug: 'tenzies',
    name: 'Tenzies',
    description: 'Dice game Tenzies implemented in React.',
    techStack: ['React'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/Tenzies-Game-Using-REACT',
    year: '2024',
    type: 'Web Game',
  },
  {
    id: 10,
    slug: 'chat-app',
    name: 'Chat App',
    description: 'Real-time chat application using MERN stack and Socket.io.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/Chat-App',
    year: '2024',
    type: 'Web Application',
  },
  {
    id: 11,
    slug: 'solitaire',
    name: 'Solitaire',
    description: 'Classic solitaire card game implemented with C++ libraries.',
    techStack: ['C++'],
    githubLink: 'http://github.com/M-Saad-Mushtaq/Solitaire-Using-OOP',
    year: '2023',
    type: 'Game',
  },
  {
    id: 12,
    slug: 'alphabet-catcher',
    name: 'Alphabet Catcher',
    description: 'Assembly-language game where players catch falling alphabets.',
    techStack: ['Assembly'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/Alphabet-Catcher-in-Assembly',
    year: '2023',
    type: 'Game',
  },
  {
    id: 13,
    slug: 'teleword',
    name: 'Teleword',
    description: 'C++ console-based word-finding program for a 15x15 grid.',
    techStack: ['C++'],
    githubLink: 'https://github.com/M-Saad-Mushtaq/Teleword-Project',
    year: '2022',
    type: 'Console Application',
  },
];

export const projects: Project[] = projectMetadata.map((project) => ({
  ...project,
  images: projectImagesBySlug[project.slug] ?? [],
}));
