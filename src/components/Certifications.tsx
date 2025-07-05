
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      badge: '🎓',
      title: 'Meta Front-End Developer',
      provider: 'Meta via Coursera',
      link: '/certificate for front end development.pdf'
    },
    {
      badge: '🤖',
      title: 'AI/ML Specialization',
      provider: 'Krish Naik - Udemy',
      link: 'https://coursera.org/share/your-meta-certificate-link'
    },
{
      badge: '🤖',
      title: 'CS-50',
      provider: 'Harvard University-Coursera',
      link: 'https://coursera.org/share/your-meta-certificate-link'
    },
  ];

  return (
<section id="certifications" className="py-24 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
      Certifications
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="glass-effect rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group w-full max-w-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg shadow-blue-500/25 relative z-10">
            {cert.badge}
          </div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2 relative z-10">{cert.title}</h3>
          <p className="text-slate-400 text-sm mb-4 relative z-10">{cert.provider}</p>
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 relative z-10"
          >
            View Certificate
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Certifications;
