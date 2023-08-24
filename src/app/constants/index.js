import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const routes = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
        "I'm a Web Designer and Developer who values inclusion, accessibility and agile work.",
        "Being a part of a team that welcomes diversity and encourages me to learn and to improve my skills keeps me motivated.",
        "I like to bring a proactive attitude, empathy and excellent time management skills to all my projects.",
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
};
