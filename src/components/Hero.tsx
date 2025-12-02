import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile photo removed per request (kept layout minimal) */}

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
          Srushti F H
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up delay-100">
          B.Tech Student
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Passionate about cloud computing, serverless architecture, and building scalable web applications
        </p>

        <div className="flex justify-center space-x-4 mb-12 animate-fade-in-up delay-300">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Github className="text-gray-300 hover:text-cyan-400 transition-colors" size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-blue-500/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin className="text-gray-300 hover:text-blue-400 transition-colors" size={24} />
          </a>
          <a
            href="mailto:viveksakre13@gmail.com"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-red-500/50 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="text-gray-300 hover:text-red-400 transition-colors" size={24} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-1 animate-fade-in-up delay-400"
        >
          <span>Explore My Work</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
