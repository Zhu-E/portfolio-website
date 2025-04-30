import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, Project } from "../../../data/projects";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  // If project not found, show 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="inline-flex items-center text-blue-400 mb-6 hover:underline"
      >
        ← Back to projects
      </Link>
      
      <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <h1 className="text-3xl font-bold mb-2 md:mb-0 text-white">{project.title}</h1>
          <span className="text-gray-300">{project.date}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-white mb-6">{project.longDescription}</p>
          
          {project.features && (
            <>
              <h2 className="text-xl font-semibold mb-4 text-white">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-white">{feature}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-white bg-gray-700 hover:bg-gray-600"
            >
              View on GitHub
            </a>
          )}
          
          

        </div>
      </div>
    </div>
  );
} 