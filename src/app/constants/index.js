import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const routes = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
];

export const social = [
  {
    id: "github",
    network: "GitHub",
    title: "Monica Zarate's Github Profile",
    url: "https://github.com/monica-zarate",
    icon: faGithub,
  },
  {
    id: "linkedin",
    network: "LinkedIn",
    title: "Monica Zarate's LinkedIn Profile",
    url: "https://www.linkedin.com/in/monica-zarate/",
    icon: faLinkedin,
  },
  {
    id: "instagram",
    network: "Instagram",
    title: "Monica Zarate's Instagram Profile",
    url: "https://www.instagram.com/monicanstudio/",
    icon: faInstagram,
  },
  {
    id: "email",
    network: "Email",
    title: "hello@monicazarate.com",
    url: "mailto:hello@monicazarate.com",
    icon: faEnvelope,
  },
];

export const pagesContent = {
  navbar: {
    copy: {
      title: "Monica Zarate",
    },
  },
  intro: {
    copy: {
      h1: "Hola! I'm Monica",
      p: [
        [
          {
            id: 1,
            content: "I'm a Vancouver BC-based",
            isHighlight: false,
          },
          {
            id: 2,
            content: "Web Designer",
            isHighlight: true,
          },
          {
            id: 3,
            content: "and",
            isHighlight: false,
          },
          {
            id: 4,
            content: "Developer",
            isHighlight: true,
          },
          {
            id: 5,
            content: "with 1.5 years of experience building web applications.",
            isHighlight: false,
          },
        ],
        [
          {
            id: 1,
            content:
              "Some of the things I value in a project are inclusion, accessibility and agile work.",
            isHighlight: false,
          },
        ],
        [
          {
            id: 1,
            content: "Let's work together!",
            isHighlight: false,
          },
        ],
      ],
    },
  },
  about: {
    copy: {
      intro: {
        heading: "Hello there!",
        p: [
          [
            {
              id: "1",
              content: "I'm a",
              isHighlight: false,
            },
            {
              id: "2",
              content: "Web Designer",
              isHighlight: true,
            },
            {
              id: "3",
              content: "and",
              isHighlight: false,
            },
            {
              id: "4",
              content: "Developer",
              isHighlight: true,
            },
            {
              id: "5",
              content:
                "with 1.5 years of experience building web applications.",
              isHighlight: false,
            },
          ],
          [
            {
              id: "1",
              content:
                "Being a part of a team that welcomes diversity and encourages me to learn and to improve my skills keeps me motivated.",
              isHighlight: false,
            },
          ],
          [
            {
              id: "1",
              content:
                "I like to bring a proactive attitude, empathy and excellent time management skills to all my projects.",
              isHighlight: false,
            },
          ],
        ],
      },
      design: {
        heading: "Design Skills",
        skillsList: [
          {
            id: "1",
            name: "Figma",
          },
          {
            id: "2",
            name: "Adobe CC",
          },
          {
            id: "6",
            name: "Graphic Design",
          },
          {
            id: "7",
            name: "User Research",
          },
          {
            id: "8",
            name: "User Testing",
          },
        ],
      },
      development: {
        heading: "Development Skills",
        skillsList: [
          {
            id: "1",
            name: "HTML",
          },
          {
            id: "2",
            name: "CSS",
          },
          {
            id: "3",
            name: "Tailwind CSS",
          },
          {
            id: "4",
            name: "Javascript",
          },
          {
            id: "5",
            name: "React.js",
          },
          {
            id: "6",
            name: "React Native",
          },
          {
            id: "7",
            name: "SQL",
          },
          {
            id: "8",
            name: "Git",
          },
        ],
      },
      hobbies: {
        heading: "When I'm not working, you'll find me:",
        hobbiesList: [
          "Baking something sweet",
          "Reading novels and manga",
          "Drinking lots of chai lattes",
        ],
      },
      cta: {
        heading: "Say hi before you go!",
        p: ["Find me on", "or send me an"],
      },
    },
  },
  projects: {
    copy: {
      h1: "Projects",
    },
  },
  featured: {
    copy: {
      h2: "Featured Projects",
    },
  },
  projectDetails: {
    copy: {
      overview: {
        h3: "Overview",
      },
      tools: {
        h3: "Tools",
      },
      steps: {
        h3: "Introduction",
      },
      ctas: {
        h3: "Learn more",
      },
      links: {
        github: "GitHub Repository",
        figma: "Figma Prototype",
        adobeXd: "Adobe Xd Prototype",
        website: "Project's Website",
      },
    },
    ids: {
      intro: "intro",
      learnMore: "learnmore",
      guavaPunch: "guava-punch",
    },
  },
  projectCard: {
    copy: {
      span: "Built with",
    },
  },
  notFound: {
    copy: {
      h1: "Page Not Found",
      p: "Oops! Looks like you've ventured into the Bermuda Triangle. Please return to safety.",
      cta: "Home Page",
    },
  },
};

export const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

export const disciplines = {
  design: "design",
  development: "development",
};
