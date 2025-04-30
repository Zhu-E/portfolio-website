import Link from "next/link";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* About Section */}
      <div className="md:w-1/3 space-y-6">
        <div className="flex flex-col items-center mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700">
            <img 
              src="/profile-photo.jpg" 
              alt="Profile Photo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-white">About Me</h1>
        <div className="space-y-4 text-white">
          <p>
            Hi there! I'm a passionate developer who loves to code, with a particular interest in both
            Cyber Security and AI.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Skills</h2>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
              <h3 className="font-medium mb-1 text-white">Languages</h3>
              <div className="flex flex-wrap gap-1">
                {["Python", "C/C++", "SQL", "R", "MIPS Assembly", "JavaScript"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-gray-700 text-white text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
              <h3 className="font-medium mb-1 text-white">Dev Tools</h3>
              <div className="flex flex-wrap gap-1">
                {["Git", "GDB", "Valgrind", "Docker", "VS Code", "Vim", "Pycharm"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-gray-700 text-white text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mt-6 mb-3 text-white">Links</h2>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/zhu-e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://leetcode.com/u/3dd13zhu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LeetCode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/edwardzhu1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="md:w-2/3">
        <h1 className="text-2xl font-bold mb-4 text-white">My Projects</h1>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              className="border border-gray-700 rounded-lg p-6 transition-all hover:shadow-md bg-gray-800"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                  <span className="text-sm text-white">{project.date}</span>
                </div>
                <p className="text-white mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-700 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
