import {
  cavallo1,
  cavallo2,
  cavallo3,
  cavallo4,
  cavalloThumb,
  cavallo,
  mz,
  mz1,
  mzThumb,
} from "../../assets";

import {
  BookmarkIcon,
  BriefcaseIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";

export const projects = [
  {
    id: "cavallo-technologies",
    title: "Cavallo Technologies Website & Branding",
    subtitle: "End-to-end design and development for a consulting firm",
    images: {
      thumb: cavalloThumb,
      thumbAlt: "Cavallo Technologies Home Page",
      featuredImg: cavallo,
      featuredImgAlt: "Full screenshot of Cavallo Technologies website",
    },
    description:
      "Designed the brand identity and developed a fully responsive website for Cavallo Technologies. The project included logo design, social media presence, and front-end development.",
    chip: "Branding + Development",
    path: "cavallo-technologies",
    isFeatured: true,
    links: [
      {
        href: "https://cavallotechnologies.ca/",
        title: "Visit Cavallo Technologies",
        tag: "Live Website",
      },
    ],
    details: [
      {
        name: "Deliverables:",
        description:
          "Visual identity (logo, colour palette, typography), website prototype and development, social media setup and templates.",
        icon: BookmarkIcon,
      },
      {
        name: "Role:",
        description:
          "Designer and Front-end Developer (part of a 2-person team).",
        icon: BriefcaseIcon,
      },
      {
        name: "Tools:",
        description:
          "Figma and Adobe CC for design and branding. Website built with Vite and Tailwind CSS. Integrated a headless CMS for dynamic content. Deployed via Azure.",
        icon: PaintBrushIcon,
      },
    ],
    tools: ["Figma", "Adobe CC", "Vite", "Tailwind", "API Integration"],
    intro: [
      "Cavallo Technologies needed a complete digital presence, from branding to website and social media presence. We were tasked with creating all assets from scratch.",
      "The website is responsive, dynamic, and tailored to two main audiences: potential business partners and job seekers. We aimed to build a professional yet approachable digital brand that represents the company's mission and values.",
    ],
    steps: [
      {
        name: "Conception",
        description: [
          "We started from a blank slate, with no existing assets or brand guidelines.",
          "We worked closely with the company's President to define the business values, tone of voice, and primary audiences.",
          "From these conversations, we developed a brand story and identity to inform both visual and written content across the site and social media.",
        ],
        imgs: [],
      },
      {
        name: "Design",
        description: [
          "Based on the branding discovery, we created a sleek, modern visual identity that communicates reliability and expertise.",
          "The logo was designed to feel clean and technical, using an analogous colour palette.",
          "We created desktop and mobile mockups using Figma, refining them through early iterations to ensure a polished and user-friendly design.",
        ],
        imgs: [cavallo1, cavallo2],
      },
      {
        name: "Development",
        description: [
          "We implemented the site using Vite, styled with Tailwind.",
          "The site is integrated with a headless CMS, allowing the client to update the website's content as needed.",
          "Responsive design and performance optimization were prioritized to ensure accessibility on all devices.",
        ],
        imgs: [],
      },
      {
        name: "Social Media & Brand Assets",
        description: [
          "In addition to the website, we developed Cavallo's social media presence, including banners, post templates, and content strategy.",
          "We provided a brand kit with logo variations, typography and social templates to maintain consistency across platforms.",
        ],
        imgs: [cavallo3],
      },
      {
        name: "Final Result",
        description: [
          "Cavallo Technologies now has a strong digital foundation. Their website presents the company clearly to stakeholders and invites job seekers to explore opportunities.",
          "The brand and website are cohesive, scalable, and easy for the client to maintain without developer support.",
          "This was a valuable collaboration in branding, UX design, and full-stack implementation.",
        ],
        imgs: [cavallo4],
      },
    ],
  },
  {
    id: "portfolio",
    title: "My Portfolio Website",
    subtitle: "A responsive portfolio to showcase my skills",
    images: {
      thumb: mzThumb,
      thumbAlt: "Monica Zarate's Website Home Page",
      featuredImg: mz,
      featuredImgAlt: "Monica Zarate's Website Home Page",
    },
    description:
      "Designed and Developed this website to demonstrate my skills in crafting user-friendly interfaces, responsive designs, and seamless user experiences.",
    chip: "Development",
    path: "my-portfolio",
    isFeatured: true,
    links: [
      {
        href: "https://github.com/monica-zarate/nextjs-portfolio",
        title: "My Portfolio Website's Repository",
        tag: "GitHub Repository",
      },
      {
        href: "https://www.figma.com/proto/nEUgRjRJDVeGHPf6E5pnXV/Portfolio-Mockup?page-id=0%3A1&type=design&node-id=6-93&viewport=316%2C302%2C0.13&t=Xp1jaAISVY5EJzfZ-1&scaling=scale-down&starting-point-node-id=6%3A93&mode=design",
        title: "My Portfolio Website's Prototype",
        tag: "Figma Prototype",
      },
    ],
    details: [
      {
        name: "Deliverables:",
        description: "Design prototype. Project's repository and live website.",
        icon: BookmarkIcon,
      },
      {
        name: "Role:",
        description: "UI Designer and Front-end Developer.",
        icon: BriefcaseIcon,
      },
      {
        name: "Tools:",
        description:
          "Figma was used to build the prototype. The codebase was built in Next.js with React.js, Typescript, and Tailwind UI. Deployment was done using Vercel.",
        icon: PaintBrushIcon,
      },
    ],
    tools: ["Figma", "React.js", "Typescript", "Tailwind UI"],
    intro: [
      "The site's current version was built using React with Next.js, Typescript and Tailwind CSS.",
      "This project is a work in progress, and I'm constantly looking to improve both the design and the codebase.",
    ],
    steps: [
      {
        name: "Conception",
        description: [
          "As part of the BCIT curriculum, we started working on a portfolio website during our third term.",
          "The first phase of the project consisted of defining our personal brand. We had a comprehensive assignment that helped us identify our values,  goals and skills as New Media professionals.",
          "This was the foundation to start developing all the necessary assets for my portfolio website, like creating my own logo, selecting an intentional colour palette, finding an adequate typeface and other digital elements.",
          "All these components are meant to resonate with my goals so that I can showcase my skills by integrating all elements seamlessly.",
        ],
        imgs: [],
      },
      {
        name: "Design",
        description: [
          "In order to achieve a high-fidelity mockup, I started out by drawing sketches of the basic ideas I had for the layout, this helped me identify how I wanted to divide the page's content.",
          "I then created a lo-fi wireframe, which was particularly helpful in order to identify the hierarchy of information and to make sure the site had enough contrast and a good balance between text and images.",
          "The general layout and sections have remained the same, but I've been fine-tuning the details to make the website the best it can be. One of my main goals was introducing colour in a mindful way. I want to support the navigation experience by pairing a colour with a discipline and to highlight the interactive elements of the interface.",
          "I've also worked on improving the copy and leveraging different font weights and sizes to improve readability and information hierarchy.",
          "For reference, this is what the V1 mock-up looked like:",
        ],
        imgs: [mz1],
      },
      {
        name: "Development",
        description: [
          "The first version of this site was built out of CRA and SASS. It was a great way for me to get back into React.js since I'd spent a few months without coding properly because school had been focusing on different subject matters.",
          "Some of the libraries I used for the first version of this project were React Router, Helmet for SEO purposes and Framer Motion to add animations. The deployment was done through GitHub Pages.",
          "When I graduated from BCIT, I kept studying on my own to keep improving my React.js skills, and one of the first things I learned was that the cool kids don't use CRA anymore, mainly because it adds many unnecessary and sometimes outdated dependencies to the project, resulting in a website with slow compilation time.",
          "One of the frameworks that kept popping up on my YouTube feed was Next.js, so I followed a few small tutorials to try out an alternative to CRA. Initially, what drew me in was the possibility of experimenting with both Client and Server Side Rendering, to speed up the loading time of the application by leveraging the fact that Server Side Components are pre-rendered when the page first loads, making it faster to display static content. I also learned more features Next.js has, like routing and SEO integrations already built in, which I consider a big improvement, compared to using external libraries if starting a project with CRA.",
          "There's also the possibility of implementing a Loading Component, which Next.js handles behind the scenes, I didn't have to write any of the logic; simply included the component in the right folder and it gets displayed as the route gets fetched. Finally, I also appreciated the fact that while setting up a new Next.js project, you have the option to set up Tailwind at the same time; which is nothing complicated to accomplish, but again, just very convenient.",
          "What better way to learn than by doing? Since I wanted to keep improving my portfolio website's interface design and the codebase, I decided to build this new version using Next.js this time with the added layer of type safety by implementing Typescript, to build a more reliable and easy-to-maintain codebase.",
          "For this new version of the project, I decided to use Tailwind for styling, as opposed to SASS which is what I used in V1. I've found my workflow to be much more efficient and fast with Tailwind. I find it extremely convenient, reliable and easy to implement, since one of the main drawbacks I see now for SASS is the amount of initial setup that's required to start implementing any styling. Tailwind also removes the need for an external stylesheet, (for the most part, since you can also create custom classes but I didn't find the need for them for this project.)",
          "The website's now deployed with Vercel, which is Next.js' default deployment platform. After some research I discovered Vercel's one of the fastest ways to release the application, again with the added benefit of no extra configuration.",
          "",
        ],
        imgs: [],
      },
      {
        name: "Final Result",
        description: [
          "This website's current design showcases my brand as a professional in a cohesive way while keeping functionality as the main priority. The Project Cards use labels and colour to identify different disciplines and scan content and tools used. Inside the Project Details Page, there's a way to navigate to each section, which helps the user know what to expect.",
          "In terms of development, I've kept the React Components as reusable as possible, passing down props and using React Hooks to create different versions of a single element if needed. The Components were written using Typescript, which has helped in error prevention and to keep a better data structure across the project. I've also implemented 404 and Loading screens, which are a part of Next.js' features.",
          "Feel free to explore the website's repository and get in touch if you have any feedback or comments that could help me improve it or make it more efficient.",
        ],
        imgs: [mz],
      },
    ],
  },
];
