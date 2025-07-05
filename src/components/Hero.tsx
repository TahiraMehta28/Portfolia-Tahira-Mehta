import React, { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Tahira Mehta';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const handleResumeDownload = () => {
    // Replace 'resume.pdf' with your actual resume file path
    const resumeUrl = '/TAHIRA MEHTA1 (4).pdf'; // Put your resume file in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Tahira Mehta Resume'; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb w-48 h-48 top-[15%] left-[10%] animate-float"></div>
      <div className="floating-orb w-32 h-32 top-[60%] right-[15%] animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-orb w-24 h-24 bottom-[20%] left-[15%] animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="floating-orb w-20 h-20 top-[30%] right-[25%] animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="text-center z-10 max-w-4xl px-4">
        <div className="inline-block px-6 py-2 mb-8 glass-effect rounded-full text-blue-400 font-medium animate-fadeInUp">
          Available for opportunities
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {displayText}
          <span className="animate-blink">|</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 text-slate-400 font-medium animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          UI/UX Designer & Front-end Developer
        </p>
        
        <p className="text-lg mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          Crafting inclusive digital experiences that bridge technology and human needs. 
          I specialize in creating accessible, user-centered solutions that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
          >
         <center> View My Work</center>  
          
          </a>
          <button
            onClick={handleResumeDownload}
            className="px-8 py-4 glass-effect text-blue-400 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-blue-500/50 hover:border-blue-400 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-400 animate-fadeInUp" style={{ animationDelay: '1s' }}>
        <span className="text-sm mb-2">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 animate-bounce text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;