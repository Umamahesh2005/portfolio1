import { Award, CheckCircle, Calendar, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Introduction to Full Stack Development (Stage-1)',
      issuer: 'Full Stack Development Program',
      date: '2024',
      description: 'Foundation of full-stack development concepts',
      verify: '/Introduction to Full Stack Development (STAGE-1)  (1).pdf',
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Fundamentals'],
    },
    {
      title: 'Full Stack Development - Frontend Essentials (Stage-2)',
      issuer: 'Full Stack Development Program',
      date: '2024',
      description: 'Advanced frontend development techniques',
      verify: '/Full Stack development- Frontend Essentials (Stage-2) (1).pdf',
      skills: ['React', 'Frontend', 'UI/UX', 'Modern JavaScript'],
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex items-center space-x-1 text-green-400">
                  <CheckCircle size={16} />
                  <span className="text-xs font-medium">Verified</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-100 mb-2">{cert.title}</h3>
              <p className="text-cyan-400 font-semibold mb-3">{cert.issuer}</p>

              <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>

              <p className="text-gray-400 text-sm mb-4">{cert.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-cyan-400 border border-blue-500/30 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
              >
                <span>Verify Certificate</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
