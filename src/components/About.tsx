
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="glass-card">
              <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a dedicated Software Engineer with a passion for building scalable web applications 
                  and creating seamless user experiences. My journey in software development has been driven 
                  by curiosity and a commitment to continuous learning.
                </p>
                <p>
                  With expertise in modern web technologies, I specialize in full-stack development, 
                  focusing on React, Node.js, and cloud technologies. I enjoy tackling complex problems 
                  and turning innovative ideas into reality.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://linkedin.com/in/msaad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 hover:scale-105 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a
                  href="mailto:hello@msaad.dev"
                  className="glass-card p-3 hover:scale-105 transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/30"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6 text-green-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="glass-card text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                    MS
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">M Saad</h3>
              <p className="text-muted-foreground mb-4">Software Engineer</p>
              <div className="flex justify-center gap-6 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-2xl gradient-text">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-2xl gradient-text">50+</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-2xl gradient-text">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
