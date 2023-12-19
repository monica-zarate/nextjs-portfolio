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
import {
  CakeIcon,
  SparklesIcon,
  PhotoIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export const routes = [
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "about",
    name: "About",
  },
];

export const footerRoutes = [
  {
    id: "",
    name: "Home",
  },
  ...routes,
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
            content: "with 1.5 years of experience building web applications.",
            isHighlight: false,
          },
        ],
        [
          {
            id: 1,
            content:
              "As a professional, some of the things I value in a project are inclusion, accessibility and agile work.",
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
        body: "She taught me industry standards or best practices while developing websites/applications.",
        author: {
          name: "Rikki Soriano",
          relationship:
            "Classmate at BCIT and Co-worker at Cavallo Technologies",
          role: "Front-end Developer",
        },
      },

      {
        body: "She shows commitment to the work and has no trouble adapting to sudden changes in business processes or web technologies.",
        author: {
          name: "Daniel Villaverde",
          relationship:
            "Supervisor at Moe's Home and Classmate at BrainStation",
          role: "Software Engineer",
        },
      },
      {
        body: "Monica was able to transform all the UI/UX wireframes into a well-design, fast website for Mascopolys business partners.",
        author: {
          name: "Ytalo Borja",
          relationship: "Technical Leader at Mascopolys",
          role: "Cloud Application Architect",
        },
      },
      {
        body: "Monica brings a diverse skill set to the table, seamlessly blending both design and development expertise.",
        author: {
          name: "Karina Song",
          relationship: "Classmate at BCIT",
          role: "Front-end Developer",
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
      secondary: "About Me",
      secondaryHref: "/about",
    },
  },
  about: {
    copy: {
      imgAlt: "monica zarate",
      bgAlt: "sunflower landscape",
      h2: "Hello there!",
      h3: "My journey so far",
      featured: [
        "Early 2020 I found myself at a crossroads, contemplating the direction of my professional journey.",
        "I decided to embark on a thrilling career pivot towards the dynamic world of front-end development.",
        "Fueled by a desire to channel my creativity into tangible digital experiences, this shift has been full of professional evolution and personal growth.",
        "I graduated with Distinction from BCIT in the Summer of 2023 and I'm looking forward to embracing new challenges as a Front-end Developer!",
      ],
      skills: {
        h2: "Skills",
        list: [
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Javascript",
          "TypeScript",
          "React.js",
          "Next.js",
          "React Native",
          "SQL",
          "Git",
          "Figma",
          "Adobe CC",
        ],
      },
      educationTimeline: {
        heading: "Education",
        events: [
          {
            id: "bcit",
            name: "New Media Design & Web Development",
            institution: "BCIT - Diploma with Distinction",
            description:
              "Acquired knowledge and hands-on experience in Web and App Development, Graphic Design, UI/UX Design, Project Management and QA.",
            date: "July, 2023",
          },
          {
            id: "brainstation-ux",
            name: "UX Design",
            institution: "BrainStation - Course",
            description:
              "Discovered the UX Design process, best practices, how to conduct user research, create wireframes, and how to apply user-centred design principles to create digital solutions.",
            date: "September, 2021",
          },
          {
            id: "brainstation-webdev",
            name: "Web Development",
            institution: "BrainStation - Diploma",
            description:
              "This full-time Bootcamp unlocked the ability to build interactive web applications through JavaScript and React.js, using SASS and BEM notation. Learned how to use APIs, MySQL and Git.",
            date: "June, 2020",
          },
        ],
      },
      workTimeline: {
        heading: "Work experience",
        events: [
          {
            company: "Cavallo Technologies Inc.",
            title: "Web Design and Development Intern",
            date: "May, 2023 - Present",
            description:
              "Implemented the company's branding and digital presence. Designed and Developed their live site. Currently participating in internal projects.",
          },
          {
            company: "Mascopolys",
            title: "Front-end Developer",
            date: "Mar, 2021 - Dec, 2021",
            description:
              "Completed the MVP for a web application and provided continuos support for the company's site.",
          },
          {
            company: "Moe's Home Collection",
            title: "Customer Service Representative",
            date: "Oct, 2019 - Mar, 2020",
            description:
              "Followed daily queries while answering phone calls and emails with orders or product inquiries.",
          },
        ],
      },
      hobbies: {
        h2: "In my spare time, you will find me",
        hobbiesList: [
          {
            name: "Baking something sweet",
            description:
              "There's something incredibly magical about turning a bunch of seemingly random ingredients into a delicious treat.",
            icon: CakeIcon,
          },
          {
            name: "Reading novels and manga",
            description:
              "I grew up reading fantasy, like Harry Potter and manga by CLAMP. One of my favourite books is 1Q84 by Haruki Murakami.",
            icon: SparklesIcon,
          },
          {
            name: "Snapping photos",
            description:
              "Maintaining a visual diary to document my daily life is a great way for me to cherish the little moments.",
            icon: PhotoIcon,
          },
          {
            name: "Planning my next adventure",
            description:
              "Always looking for a chance to break free from the routine, embrace spontaneity, and collect stories.",
            icon: MapPinIcon,
          },
        ],
      },
      cta: {
        h2: "Let's connect!",
        p: "Interested in working together, grab a coffee or just want to say hi?",
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
    },
  },
  notFound: {
    copy: {
      h1: "Page Not Found",
      p: "Oops! Looks like you've ventured into the Bermuda Triangle. Please return to safety.",
      cta: "Home Page",
      imgAlt: "sunflower field",
    },
  },
  footer: {
    acknowledgement: {
      p: "I would like to acknowledge that I'm fortunate to live and work on the traditional, ancestral, and unceded territory of the Coast Salish Peoples, including the territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil- Waututh) Nations.",
    },
  },
};

export const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};
