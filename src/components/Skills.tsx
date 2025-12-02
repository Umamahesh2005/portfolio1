import { Code2, Database, Cloud, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'JavaScript/TypeScript', level: 78 },
        { name: 'Python', level: 72 },
        { name: 'Java', level: 68 },
        { name: 'C++', level: 65 },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS (S3, EC2, Lambda)', level: 55 },
        { name: 'Docker', level: 52 },
        { name: 'Git & GitHub', level: 82 },
        { name: 'CI/CD', level: 50 },
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Web Technologies',
      icon: Wrench,
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 74 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Tailwind CSS', level: 76 },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Database & Backend',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 54 },
        { name: 'MongoDB', level: 52 },
        { name: 'Supabase', level: 56 },
        { name: 'REST APIs', level: 58 },
      ],
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
