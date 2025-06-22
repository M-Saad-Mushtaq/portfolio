
import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 85, category: 'Programming', icon: '🟨' },
    { name: 'TypeScript', level: 70, category: 'Programming', icon: '🔷' },
    { name: 'XML', level: 95, category: 'Frontend', icon: '📄' },        
    { name: 'Kotlin', level: 90, category: 'Backend', icon: '🧬' },      
    { name: 'Java', level: 75, category: 'Backend', icon: '☕' },      
    { name: 'C', level: 95, category: 'Programming', icon: '💻' },       
    { name: 'C++', level: 95, category: 'Programming', icon: '➕' },     
    { name: 'Assembly', level: 90, category: 'Programming', icon: '🧠' }, 
    { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢' },
    { name: 'Python', level: 80, category: 'Programming', icon: '🐍' },
    { name: 'MongoDB', level: 90, category: 'Database', icon: '🍃' },
    { name: 'Firebase', level: 90, category: 'Database', icon: '🔥' },  
    { name: 'Git', level: 90, category: 'Tools', icon: '📋' },
    { name: 'Github', level: 90, category: 'Tools', icon: '🐙' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend', icon: '🎨' },
    { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
    { name: 'Express.js', level: 90, category: 'Backend', icon: '🚀' }
  ];

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-600';
    if (level >= 80) return 'from-blue-500 to-cyan-600';
    if (level >= 70) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'glass bg-blue-600 text-white hover:bg-blue-700'
                  : 'glass hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{skill.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
                <div className="text-sm font-medium text-blue-600">
                  {skill.level}%
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
