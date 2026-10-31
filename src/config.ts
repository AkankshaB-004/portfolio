// Single place to edit all content. Empty strings render as visible placeholders, never broken links.
export interface Skill { g: string; key: string[]; rest: string[] }
export interface Project { title: string; kind: string; status: string; desc: string; stack: string[]; role: string; challenge: string; contribution: string; approach: string; outcome: string; github: string; githubBackend?: string; demo: string }
export interface Job { co: string; role: string; dates: string; line: string }
export interface Config { name: string; available: string; email: string; resumeUrl: string; resumeFile: string; skills: Skill[]; projects: Project[]; timeline: Job[] }
export const CONFIG: Config = {
  name: "Akanksha Bhardwaj",
  available: "Open to Senior / Lead Software Engineer roles",   // set "" to hide
  email: "akanksha.bhardwaj73@gmail.com",                 // e.g. "you@example.com"              // full URL
  resumeUrl: "Akanksha_Bhardwaj_Resume.pdf",             // e.g. "/resume.pdf" after you put the PDF in /public
  resumeFile: "Akanksha_Bhardwaj_Resume.pdf",
  skills: [
    { g: "Frontend engineering", key: ["React.js", "TypeScript", "JavaScript (ES6+)", "Angular 11"], rest: ["HTML5 & CSS3", "State management"] },
    { g: "Backend development", key: ["Node.js"], rest: ["Express.js"] },
    { g: "Databases and APIs", key: ["MongoDB", "SQL"], rest: ["Mongoose", "REST APIs", "API integration"] },
    { g: "Testing and code quality", key: [], rest: ["Jest", "Jasmine", "Karma", "Unit testing", "TDD principles", "SonarQube"] },
    { g: "CI/CD and developer tooling", key: [], rest: ["Jenkins", "GitLab CI/CD", "Git", "Webpack", "Build & deployment automation"] },
    { g: "Architecture and performance", key: [], rest: ["Microfrontend architecture", "Frontend performance optimization", "Maintainable component design"] }
  ],
  projects: [
    // {
    //   title: "Enterprise Gaming Platform", kind: "Professional experience", status: "In production use",
    //   desc: "Interactive, graphics-intensive gaming front ends built with React, TypeScript, PixiJS, and Canvas.",
    //   stack: ["React.js", "TypeScript", "PixiJS", "Canvas"], role: "Technical Lead (Aristocrat Technologies)",
    //   challenge: "Keeping graphics-heavy interfaces responsive while the component codebase stays scalable.",
    //   contribution: "[Add: your specific ownership, e.g. architecture decisions, reviews, mentoring. Keep it non-confidential.]",
    //   approach: "Reusable UI components, rendering and performance optimization, integration with APIs and application services.",
    //   outcome: "[Add: verified outcome you can share publicly.]", github: "", demo: ""
    // },
    {
      title: "Full Stack Job Discovery Platform", kind: "Personal project", status: "Live",
      desc: "Job search platform with a React frontend and a Node.js/Express API on MongoDB.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"], role: "Sole developer",
      challenge: "Designing a clean data model and API so search and filtering stay fast and maintainable.",
      contribution: "Search Jobs by Title, Salary, Location, Experience and Skills In Dubai & Abu Dhabi",
      approach: "REST API, schema design with Mongoose, frontend-to-backend integration, environment-based configuration.",
      outcome: "Completed: Search Jobs by Title, Salary, Location, Experience and Skills In UAE.", github: "https://github.com/AkankshaB-004/dev-jobs-uae-ui", githubBackend: "https://github.com/AkankshaB-004/dev-jobs-uae", demo: "https://dev-jobs-uae-ui.vercel.app/"
    },
    {
      title: "Next.js Nexus Platform", kind: "Personal project", status: "Live",
      desc: "Multi-module platform app with Dashboard, Products, Properties and Tracking views, built with Next.js and React.",
      stack: ["Next.js", "React.js", "State management", "Static data files"], role: "Sole developer",
      challenge: "Keeping state consistent across four modules using static data files and no backend.",
      contribution: "Built the Dashboard, Products, Properties and Tracking modules in Next.js and React, loading data from static files and managing application state through a client-side store.",
      approach: "Next.js routing, reusable React components, a central state store, file-based static data.",
      outcome: "Deployed on Vercel with Dashboard, Products, Properties and Tracking sections.", github: "https://github.com/AkankshaB-004/nexus-platform", demo: "https://nexus-platform-rho.vercel.app/"
    }
  ],
  timeline: [
    { co: "Aristocrat Technologies", role: "Tech Lead", dates: "Jun 2023 – Present", line: "Designed and developed online casino games and also, utility tools for all internal studios" },
    { co: "Coforge", role: "Senior Software Engineer", dates: "Mar 2021 – May 2023", line: "Built microfrontend application for SITA airline for Dubai and Norway clients." },
    { co: "Rovi91", role: "Software Engineer", dates: "Nov 2019 – March 2021", line: "Built Angular and TypeScript frontends for Paytm FASTag and e-commerce marketplaces (Amazon IN, Flipkart)." },
    { co: "StompMarket", role: "Software Engineer", dates: "May 2018 – Oct 2019", line: "Built a shared Angular component library that cut feature development time by 30% and standardised UI across products, plus C# REST APIs for e-commerce workflows." },
    { co: "WonderPillars", role: "Web Designer", dates: "Sep 2017 – Nov 2017", line: "Improved usability of government websites using HTML5, CSS3, Bootstrap, and JavaScript." }
  ]
};
