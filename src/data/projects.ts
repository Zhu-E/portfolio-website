// Project type definition
export type Project = {
  id: string;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  longDescription?: string;
  features?: string[];
  githubUrl?: string;
  leetcodeUrl?: string;
  demoUrl?: string;
};

// Sample project data
export const projects: Project[] = [
  {
    id: "personal-website",
    title: "Personal Portfolio Website",
    date: "April 2025",
    description: "A website built with Next.js and Tailwind CSS to showcase my projects.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    longDescription: "This portfolio website showcases my work as a developer. Built with Next.js and styled with Tailwind CSS, it features a responsive design that works well on all devices. The site includes project cards on the homepage, detailed project pages, and an about page.",
    features: [
      "Responsive design that works on mobile, tablet, and desktop",
      "Project cards with technology tags",
      "Detailed project pages"
    ],
    githubUrl: "https://github.com/Zhu-E/portfolio-website",
  },
  {
    id: "google-drive-RAG",
    title: "Google Drive RAG",
    date: "2024",
    description: "An assistant that uses Retrieval Augmented Generation to answer user queries based on their personal Google Documents.",
    technologies: ["Python", "OpenAI API", "Vector Embeddings", "Pandas", "Google OAuth", "Google API"],
    longDescription: "A comprehensive task management application that helps users organize their work. This full-stack application features user authentication, task creation, categorization, due dates, and more.",
    features: [
      "User authentication and authorization through Google OAuth",
      "Relevant document retrieval utilizing vector embeddings",
      "Response generation using OpenAI's API"
    ],
    githubUrl: "https://github.com/Zhu-E/GoogleDriveRAG",
  },
  {
    id: "clip-compilation-bot",
    title: "Twitch Clip Compilation Bot",
    date: "2024",
    description: "A bot that retrieves the most popular clips from Twitch, downloads them and turns them into a single compilation video before uploading it to YouTube.",
    technologies: ["Python", "Google OAuth", "Selenium", "FFmpeg", "Twitch API", "Youtube API"],
    longDescription: "A weather forecast application that provides current weather data and forecasts for locations worldwide. It uses the OpenWeather API to fetch real-time weather information and presents it in a user-friendly interface.",
    features: [
      "Web scraping using Selenium",
      "Video concatenation using FFmpeg",
      "Automatic upload to YouTube using the YouTube API",
      "Find most popular clips using the Twitch API",
      "Google OAuth for authentication"
    ],
    githubUrl: "https://github.com/Zhu-E/auto_highlights_bot_revisited",
  }
]; 