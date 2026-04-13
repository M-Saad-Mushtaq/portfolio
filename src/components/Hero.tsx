
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
        <div className="absolute top-1/4 left-1/4 w-56 h-56 md:w-64 md:h-64 bg-orange-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-teal-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-rose-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text animate-pulse">M Saad</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="mb-2">Software Engineer</p>
            <p className="text-lg">Building digital experiences that matter</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="glass-card px-8 py-4 bg-orange-600 text-white font-medium transition-all duration-200 hover:bg-orange-700 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Get In Touch
            </button>
            
            <button
              onClick={() => window.open('/M%20Saad%20-%20Software%20Engineer.pdf', '_blank')}
              className="glass-card px-8 py-4 font-medium flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <Download className="w-4 h-4" />
              View Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-22 left-1/2 transform -translate-x-1/2 animate-bounce">
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
