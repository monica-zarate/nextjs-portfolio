import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
    id: "linkedin",
    network: "LinkedIn",
    title: "Monica Zarate's LinkedIn Profile",
    url: "https://www.linkedin.com/in/monica-zarate/",
    icon: faLinkedin,
  },
  {
    id: "github",
    network: "GitHub",
    title: "Monica Zarate's Github Profile",
    url: "https://github.com/monica-zarate",
    icon: faGithub,
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
  intro: {
    copy: {
      h1: "Hola! I'm Monica",
      p: [
        "I'm a Vancouver BC-based Web Designer and Developer who values inclusion, accessibility and agile work.",
        "Let's work together!",
      ],
    },
  },
  about: {
    copy: {
      h1: "Hello there!",
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
            content: "who values inclusion, accessibility and agile work.",
            isHighlight: false,
          },
        ],
        [
          {
            id: "1",
            content: "Being a part of a team that welcomes",
            isHighlight: false,
          },
          {
            id: "2",
            content: "diversity",
            isHighlight: true,
          },
          {
            id: "3",
            content:
              "and encourages me to learn and to improve my skills keeps me motivated.",
            isHighlight: false,
          },
        ],
        [
          {
            id: "1",
            content: "I like to bring a",
            isHighlight: false,
          },
          {
            id: "comma",
            content: "proactive attitude",
            isHighlight: true,
          },
          {
            id: "3",
            content: ",",
            isHighlight: false,
          },
          {
            id: "4",
            content: "empathy",
            isHighlight: true,
          },
          {
            id: "5",
            content: "and excellent",
            isHighlight: false,
          },
          {
            id: "6",
            content: "time management skills",
            isHighlight: true,
          },
          {
            id: "5",
            content: "to all my projects.",
            isHighlight: false,
          },
        ],
      ],
      ul: {
        title: "When I'm not working, you'll find me:",
        listItems: [
          "Baking something sweet",
          "Reading novels and manga",
          "Drinking lots of chai lattes",
        ],
      },
      cta: {
        title: "Say hi before you go!",
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
    },
    ids: {
      intro: "intro",
      learnMore: "learnmore",
    },
  },
};

export const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};
