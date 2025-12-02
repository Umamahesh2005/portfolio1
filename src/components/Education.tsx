import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'GM University',
      location: 'Davanagere, Karnataka',
      duration: '2023 - 2027',
      grade: 'CGPA: 8.05/10',
      highlights: [
        
        'Active participant in hackathons and coding competitions',
      ],
      icon: GraduationCap,
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Smiore Vyasapuri Comp PU College,Vyasankere,Hospet',
      location: 'Karnataka',
      duration: '2021 - 2023',
      grade: 'Percentage: 81%',
      highlights: [
        'Science Stream with Computer Science',
      ],
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <edu.icon className="text-white" size={32} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-cyan-400 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-gray-400">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 font-medium">{edu.duration}</p>
                      <div className="mt-2 inline-flex items-center space-x-2 bg-gray-700/50 px-4 py-2 rounded-lg shadow">
                        <Award className="text-yellow-400" size={20} />
                        <span className="font-semibold text-gray-200">{edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-300 mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span className="text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
