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
    githubUrl: "https://github.com/username/personal-website",
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
      "Categorize tasks with labels",
      "Set due dates and priority levels",
      "Filter and sort tasks by different criteria"
    ],
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    id: "clip-compilation-bot",
    title: "Twitch Clip Compilation Bot",
    date: "2024",
    description: "A bot that retrieves the most popular clips from Twitch, downloads them and turns them into a single compilation video before uploading it to YouTube.",
    technologies: ["Python", "Google OAuth", "Selenium", "FFmpeg", "Twitch API", "Youtube API"],
    longDescription: "A weather forecast application that provides current weather data and forecasts for locations worldwide. It uses the OpenWeather API to fetch real-time weather information and presents it in a user-friendly interface.",
    features: [
      "Current weather conditions display",
      "5-day weather forecast",
      "Search for locations worldwide",
      "Display of temperature, humidity, wind speed, and more",
      "Responsive design for all devices"
    ],
    githubUrl: "https://github.com/username/weather-app",
  }
]; 