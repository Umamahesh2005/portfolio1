import { User, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <User className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Who I Am</h3>
            <p className="text-gray-400 leading-relaxed">
              Student
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-100">What I Do</h3>
            <p className="text-gray-400 leading-relaxed">
              B.Tech Student
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-100">My Goals</h3>
            <p className="text-gray-400 leading-relaxed">
              I aim to contribute to cutting-edge projects that make a difference. I'm constantly expanding my skill set and seeking opportunities to collaborate on innovative cloud computing and serverless architecture projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
