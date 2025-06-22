
import React, { useState } from 'react';
import { Download, Eye, Calendar, MapPin } from 'lucide-react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      title: 'Software Engineer Intern',
      company: 'InvenXen',
      location: 'Remote',
      period: '2025 - Present',
      description: [
        'Working primarily as an Android app developer using Kotlin and Firebase',
        'Also contributed to web development tasks using the MERN stack',
        'Built and maintained scalable mobile app features for real-world use cases',
        'Collaborated with cross-functional teams to integrate APIs and optimize UX',
        'Assisted in deploying and debugging mobile and web applications'
      ]
    }
    
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Fast-NUCES, Lahore',
      location: 'Lahore, Pakistan',
      period: '2022 - 2026',
      gpa: '',
      honors: ''
    }
  ];

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/M Saad - Software Engineer.pdf';
    link.download = 'M Saad - Software Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/M Saad - Software Engineer.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey and educational background
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleView}
              className="glass-card px-6 py-3 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View Resume
            </button>
            <button
              onClick={handleDownload}
              className="glass-card px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-xl p-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'hover:bg-accent'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'hover:bg-accent'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="glass-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 pl-6">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      <span className="text-blue-600">•</span>
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                    )}
                    {edu.honors && (
                      <p className="text-sm text-green-600 font-medium">{edu.honors}</p>
                    )}
                  </div>
                  <div className="flex flex-col lg:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
