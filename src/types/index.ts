export const projects = [
  {
    title: "Ticket Platform",
    description:
      "A full-stack e-commerce ticket application built with Next, Java, and PostgreSQL. Features include user authentication, event catalog, cart, and Admin Dashboard.",
    image: "/tapakila.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl:
      "https://github.com/Radiant-Wizard/Tapakila-hub/blob/main/README.md",
    featured: true,
  },
  {
    title: "STREAMLIT - PROJECT MANAGER",
    description:
      "A python streamlit app that manage project from excel template to make an interactive dashboard",
    image: "/python.png",
    technologies: ["streamlit", "Sqlite", "Python", "Pandas"],
    githubUrl: "https://github.com/Radiant-Wizard/PROJECT_MANAGER",
    featured: false,
  },
  {
    title: "Restaurant Management Backend App",
    description: "An API rest for the management of a restaurant",
    image: "/resto-mngt.png",
    technologies: ["Java", "SpringBoot", "OpenAPI", "Maven", "Lombok"],
    githubUrl: "https://github.com/Radiant-Wizard/Spring-Resto-Mngt",
    featured: false,
  },
  {
    title: "Weather Forecast Apache Airflow Pipeline",
    description:
      "A complete apache airflow pipeline that fetches weather API datas, upload them to Google Drive and send them to looker studio",
    image: "/airflow.png",
    technologies: ["Python", "Airflow", "Google APIs", "Pandas"],
    githubUrl: "https://github.com/Radiant-Wizard/AIRFLOW-WEATHER-FETCHING-ETL",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export const interests = [
  "Web Development",
  "Machine Learning",
  "Command Line Interface",
  "Open Source",
  "Gaming",
  "Music",
];

export const education = [
  {
    institution: "Haute Ecole d'Informatique ( HEI )",
    degree: "Bachelor of Science in Computer Science",
    period: "2023 - 2026 (Expected)",
    location: "Madagascar, Antananarivo",
    description:
      "Relevant coursework: Object-Oriented Programming, Database Systems, Software Engineering, Web Development, Algorithms and Data Science",
  },
];

export const experience = [
  {
    company: "Software Overseas Academy",
    position: "Student / Intern",
    period: "Currently working in alternance",
    location: "",
    description:
      "I am currently working at Software Overseas Academy as an intern",
    achievements: [
      "Currently accumulating experience as a junior developer",
      "Participating in SOA's projects ",
    ],
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Java", level: 85 },
      { name: "SpringBoot", level: 90 },
      { name: "Node.js", level: 70 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 40 },
      { name: "Linux", level: 80 },
    ],
  },
];

export const languages = ["JavaScript", "TypeScript", "Python", "Java", "SQL"];
export const frameworks = [
  "React",
  "Next.js",
  "Express",
  "Tailwind CSS",
  "Bootstrap",
];

export const tools = ["Git", "Docker", "VS Code", "Figma", "Postman"];
