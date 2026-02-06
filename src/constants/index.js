import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = 
`Actuellement en recherche d’une opportunité professionnelle.
Diplômé en Master - Architecte Logiciel
Passionné par le développement et toujours à la recherche de nouveaux défis, j'ai une expérience de 3 ans avec une variété de technologies comme Java, TypeScript, React, Node.js, ou Python.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "01/2024 - 05/2025",
    role: "Développeur Full-Stack",
    company: "OTC Royan Atlantique",
    description: [
    "- Conception et développement d’applications web internes en Java / React",
    "- Développement d’API et de services métiers pour la gestion des utilisateurs et des systèmes",
    "- Automatisation de processus techniques via scripts Python et PowerShell, intégrés aux outils applicatifs",
    "- Participation à l’architecture, au déploiement et à la maintenance d’applications sur un parc multi-sites (18 sites)",
    "- Mise en place et exploitation d’outils de supervision, monitoring et suivi applicatif"
    ],
    technologies: ["Java", "React", "Python", "Powershell"],
  },
  {
    year: "01/2022 - 01/2024",
    role: "Développeur Full-Stack",
    company: "Freelance",
    description: [
      "- Développement d’une application de monitoring en MERN avec React, Node et Express et la BDD gérée avec MongoDB",
      "- Optimisation et référencement (SEO) de sites web",
      "- Traduction de sites ou d’applications pour des particuliers",
    ],
    technologies: ["React", "TypeScript", "MongoDB", "Node.js"],
  },
  {
    year: "09/2021 - 09/2023",
    role: "Développeur Full-Stack",
    company: "ADEI17",
    description: [
      "- Développement ou refactoring d’applications internes avec PHP, React en mode AGILE",
      "- Renforcement des bases TypeScript/JavaScript et bonnes pratiques (découpage, accessibilité,...)",
      "- Mis en place des conteneurs Docker pour homogénéiser les environnements et faciliter les déploiements",
      "-Conception de modèles et requêtes sur PostgreSQL/MySQL",
      "- Maintenance du réseau et des serveurs (Linux, Debian) / Support Téléphonique"
    ],
    technologies: ["PHP", "JavaScript", "SQLSever", "Symfony","Powershell"],
  }
];

export const PROJECTS = [
  {
    title: "Master - Architecte Logiciel (2023)",
    description:
      "",
    technologies: ["Java", "Spring", "React", "Node.js"],
  },
  {
    title: "Licence Informatique (2021)",
    image: project1,
    description:
      "",
    technologies: ["Java", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Bac Scientifique - SVT (2018)",
    image: project1,
    description:
      "",
    technologies: [],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "06 51 47 75 99",
  email: "guitton.eliee@gmail.com",
};
