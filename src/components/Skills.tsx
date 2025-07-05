
import React from 'react';

const Skills = () => {
  const skills = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      items: ['Figma, Adobe XD, Sketch', 'Accessibility-First Design', 'User Research & Testing', 'Design Systems & Prototyping']
    },
    {
      icon: '⚡',
      title: 'Frontend Development',
      items: ['React.js, Next.js', 'HTML5, CSS3, JavaScript', 'Tailwind CSS, Bootstrap', 'Responsive Design']
    },
    {
      icon: '🔧',
      title: 'Backend Development',
      items: ['Node.js, Express.js', 'RESTful API Development',  'JSON Handling', 'Intro to MongoDB']
    },
    {
      icon: '🚀',
      title: 'Tools & Technologies',
      items: ['Git, GitHub', 'Canva, Adobe Creative Suite', 'Agile Development', 'Team Leadership']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl mb-6 relative z-10">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4 relative z-10">{skill.title}</h3>
              <ul className="space-y-2 relative z-10">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-slate-300 flex items-center">
                    <span className="text-blue-400 mr-2">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
