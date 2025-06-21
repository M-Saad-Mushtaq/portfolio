
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">M Saad</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="mb-2">Software Engineer</p>
            <p className="text-lg">Building digital experiences that matter</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="glass-card px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-medium"
            >
              Get In Touch
            </button>
            
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="glass-card px-8 py-4 hover:scale-105 transition-all duration-300 font-medium flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              View Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full glass hover:scale-110 transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
