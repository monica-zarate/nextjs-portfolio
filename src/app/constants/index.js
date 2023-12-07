import {
  faEnvelope,
  faLaptopCode,
  faPersonChalkboard,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const routes = [
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "contact",
    name: "Contact",
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
      imgAlt: "monica zarate",
      p: [
        [
          {
            id: 1,
            content: "I'm a Vancouver BC-based",
            isHighlight: false,
          },
          {
            id: 2,
            content: "Front-end Developer",
            isHighlight: true,
          },
          {
            id: 3,
            content: "and",
            isHighlight: false,
          },
          {
            id: 4,
            content: "Web Designer",
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
  highlights: {
    copy: {
      h2: "Crafting Successful Projects",
      skills: [
        {
          name: "Adaptability",
          img: faLaptopCode,
          description:
            "In the ever-evolving technology landscape, my approach is marked by embracing the dynamic nature of digital tools and trends.",
        },
        {
          name: "User-Centric",
          img: faPersonChalkboard,
          description:
            "I aim to deliver digital experiences that not only align with the company's goals but also resonate seamlessly with the expectations of the end-users.",
        },
        {
          name: "Collaboration",
          img: faComments,
          description:
            "My strong communication skills enable seamless collaboration with diverse roles, which allows me to adapt to cross-functional teams.",
        },
      ],
    },
  },
  testimonials: {
    copy: {
      h2: "Recommendations and Testimonials",
      p: "What other industry professionals have said about my work",
    },
    testimonials: [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  },
  cta: {
    copy: {
      h2: "Explore my previous work and",
      h22: "let's build something amazing together!",
      main: "Projects",
      mainHref: "/projects",
      secondary: "Contact Me",
      secondaryHref: "/contact",
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
      timeline: {
        heading: "Education",
        events: [
          {
            id: "1",
            name: "Web Development",
            institution: "BrainStation - Diploma",
            description:
              "This full-time Bootcamp unlocked the ability to build interactive web applications through JavaScript and React.js, using SASS and BEM notation. Learned how to use APIs, MySQL and Git.",
            date: "June, 2020",
          },
          {
            id: "2",
            name: "UX Design",
            institution: "BrainStation - Course",
            description:
              "Discovered the UX Design process, best practices, how to conduct user research, create wireframes, and how to apply user-centred design principles to create digital solutions.",
            date: "September, 2021",
          },
          {
            id: "3",
            name: "New Media Design & Web Development",
            institution: "BCIT - Diploma with Distinction",
            description:
              "Acquired knowledge and hands-on experience in Web and App Development, Graphic Design, UI/UX Design, Project Management and QA.",
            date: "July, 2023",
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
      h2: "Featured Projects",
      p: "Each project has offered me valuable experiences and insights, shaping my skills and deepening my understanding of effective and innovative web development practices.",
    },
  },
  featured: {
    copy: {
      h2: "Featured Projects",
      cta: "All Projects",
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
    copy: {},
  },
  notFound: {
    copy: {
      h1: "Page Not Found",
      p: "Oops! Looks like you've ventured into the Bermuda Triangle. Please return to safety.",
      cta: "Home Page",
    },
  },
  footer: {
    acknowledgement: {
      span: "I would like to acknowledge that I'm fortunate to live and work on the traditional, ancestral, and unceded territory of the Coast Salish Peoples, including the territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil- Waututh) Nations.",
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
