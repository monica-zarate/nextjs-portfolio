import {
  acnh1,
  acnh2,
  acnh3,
  acnh4,
  acnh5,
  acnhThumb,
  acnh,
  apod1,
  apod2,
  apod3,
  apodThumb,
  apod,
  billy1,
  billy2,
  billy3,
  billy4,
  billy5,
  billy6,
  billyThumb,
  billy,
  tcDesign1,
  tcDesign2,
  tcDesign3,
  tcDesign4,
  tcDev1,
  tcDev2,
  tcDev3,
  tc,
  tcThumb,
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
  {
    id: "apod",
    title: "NASA's APOD: Website",
    subtitle: "Third party data request using the Fetch API",
    images: {
      thumb: apodThumb,
      thumbAlt: "astronomy picture of the day mockup website",
      featuredImg: apod,
      featuredImgAlt: "astronomy picture of the day mockup website",
    },
    description:
      "Designed and developed a site that consumes the NASA APOD API to display the Astronomy Picture of the Day. The project uses the Fetch API to make a request to an endpoint.",
    chip: "Development",
    path: "apod",
    isFeatured: false,
    links: [
      {
        href: "https://github.com/monica-zarate/nasa-apod",
        title: "APOD Project Repository",
        tag: "GitHub Repository",
      },
      {
        href: "http://apod.monicazarate.com",
        title: "Monica's APOD Website",
        tag: "Project's Website",
      },
    ],
    details: [
      {
        name: "Deliverables:",
        description: "Project's repository and live website.",
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
          "The codebase was built with Javascript and CSS. Postman was used to test the API Key. Deployment was done using GitHub Pages.",
        icon: PaintBrushIcon,
      },
    ],
    tools: ["HTML", "CSS", "Javascript", "Postman"],
    intro: [
      "To practice my Javascript skills, I decided to build my own version of NASA's Astronomy Picture of the Day. This project heavily focuses on the map() array method, writing DRY code and the ability to request data from a third-party API.",
    ],
    steps: [
      {
        name: "API Endpoints",
        description: [
          "For the Picture of the Day and a specific date, the endpoint must include a date string as yyyy-mm-dd. I.e: &date=2022-11-01. For the pictures of the month, I'm using a start date. I.e: &start_date=2022-11-01. If no end date is included, this query will retrieve pictures from the start date to the present day. I'm including &thumbs=true at the end of all endpoints, this is for when the APOD is a video, to display the thumbnail images of the video instead.",
        ],
        imgs: [],
      },
      {
        name: "Postman Tests",
        description: [
          "After registering to obtain an API key, I performed some test calls on Postman, to make sure the query parameters were being used properly and check the data I was receiving back.",
        ],
        imgs: [apod1],
      },
      {
        name: "fetch",
        description: [
          "The fetch() method gets invoked when there's a call to the APOD API, passing the query as a parameter. A then() method follows, which transforms the response from the API into a JSON format. A second then() method is called to pass the received data to a function that's in charge of displaying it in the DOM. A ctach() method is chained, to catch any errors from the API call, and display them in the browser's console. The finally() method closes this code block, which is removing a spinner from the DOM once all the data has loaded and it's ready to populate the page.",
        ],
        imgs: [apod2],
      },
      {
        name: "Content Template Element",
        description: [
          "In order to display the received data, I created a card component that will include the picture, its title, date and explanation, making use of the <template> HTML tag. This allowed me to have the card's skeleton already placed on the page's code, and use it to render the received data programmatically.",
        ],
        imgs: [apod3],
      },
      {
        name: "Final Result",
        description: [
          "This project offers three different ways to call the APOD API. On page load, the Picture of the Day gets displayed. Users also have the option to display all the pictures of the current month, or they can also find a specific date. For future iterations, I would like to re-work the page's layout, especially when having more than one card, to better align the content, as each picture's explanation varies in length.",
        ],
        imgs: [apod],
      },
    ],
  },
  {
    id: "acnh",
    title: "ACNH Villagers: Website",
    subtitle: "PHP classes, constructors and associative arrays",
    images: {
      thumb: acnhThumb,
      thumbAlt: "animal crossing villagers website mockup",
      featuredImg: acnh,
      featuredImgAlt: "animal crossing villagers website mockup",
    },
    description:
      "Designed and developed a site listing a collection of Animal Crossing villagers. The project includes classes and constructor methods and knowledge of arrays loops and functions in PHP.",
    chip: "Development",
    path: "acnh",
    isFeatured: false,
    links: [
      {
        href: "https://github.com/monica-zarate/acnh_residents",
        title: "ACNH PHP Project Repository",
        tag: "GitHub Repository",
      },
    ],
    details: [
      {
        name: "Deliverables:",
        description: "Project's repository and database.",
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
          "The codebase was built with PHP and CSS. The database was built with MySQL.",
        icon: PaintBrushIcon,
      },
    ],
    tools: ["HTML", "CSS", "PHP", "MAMP"],
    intro: [
      "Using Animal Crossing (a popular video game I like to play) characters as a starting point, this project shows the current residents I have on my island. All items in this collection have shared properties, and I'm looping through them so that I can create a card per character that displays its information.",
      "I created two types of residents: villagers and NPCs (non-playable characters). The project makes use of a parent class, that's used to create two child classes, allowing for variations amongst the displayed data. The page was built making use of partials for its different sections.",
    ],
    steps: [
      {
        name: "Project Structure",
        description: [
          "The first step was to create the basic folder structure and initiate the project with init.php, index.php and functions.php files. The init folder contains the project's constants, like the project's directory and localhost locations, to be able to run the application using MAMP. The Classes are also placed on this file, so they can be accessed globally. The index.php file acts as a container for the page's body. Here I'm importing the head tag, header and footer via global partials. The dynamic data is also included via the resident's card partial. Two foreach() loops were used on this file, to read both child classes and create a card for every item on those two collections.",
        ],
        imgs: [acnh1],
      },
      {
        name: "Parent Class",
        description: [
          "The first thing was to declare the parent Class properties, they all remained public, except for their fun facts, in which case a setter method was used to assign those. Inside the Class Methods section, a constructor was created. This Class expects a relational array to be passed as a parameter to be able to create an instance of it. There are two properties that remained optional, that were declared making use of the Null Coalescing operator.",
        ],
        imgs: [acnh2],
      },
      {
        name: "Child Classes",
        description: [
          "Two child classes were created for this project, Villager and an NPC. These two make use of the keyword extends to have access to their parent Class of Resident properties and methods. Each of these classes has a distinctive property and constructor method.",
        ],
        imgs: [],
      },
      {
        name: "Data",
        description: [
          "Inside the data folder, two files were created to contain the instances of the Villagers and Npc's classes accordingly. Each resident is built making use of the “new” keyword, the name of the Class, and is passing a relational array as a parameter. All these instances are then included in a Villager or NPC array.",
        ],
        imgs: [acnh3, acnh4],
      },
      {
        name: "Card Partial",
        description: [
          "Once all the data has been created, we're ready to access and display it. A partial called card was created to display all the residents' information. This partial contains an if statement, to display their personality if the resident is a Villager or the service they offer if the resident is an NPC.",
        ],
        imgs: [acnh5],
      },
      {
        name: "Final Result",
        description: [
          "The page loads a card for each resident and displays its distinctive information for Villagers and NPCs. All cards contain the character's name, image and other general details like species and birthday. I was pleased with the final result, considering it was my first PHP project. For future iterations, I would like to expand on this project and have the ability to filter residents per type of offer and the possibility to click on each card to access a resident's individual profile page with more information.",
        ],
        imgs: [acnh],
      },
    ],
  },
  {
    id: "tcdesign",
    title: "Travel Compass: Phase 1 App Prototype",
    subtitle: "Travel Management Mobile App Interface Design",
    images: {
      thumb: tcThumb,
      thumbAlt: "travel compass mobile interface preview",
      featuredImg: tc,
      featuredImgAlt: "travel compass mobile interface preview",
    },
    description:
      "Designed the interface of a travel management application. A mobile interface, from sketching to a prototype.",
    chip: "UX Design",
    path: "travel-compass-phase1",
    isFeatured: false,
    links: [
      {
        href: "https://xd.adobe.com/view/70b5d4ab-3e64-42bc-a21c-636217837e02-25e6/?fullscreen",
        title: "Travel Compass Prototype: Add New Trip",
        tag: "Adobe Xd Prototype",
      },
      {
        href: "https://www.monicazarate.com/projects/travel-compass-phase2",
        title: "Travel Compass Phase 2: Development",
        tag: "Travel Compass Phase 2: Development",
      },
    ],
    details: [
      {
        name: "Deliverables:",
        description: "Design prototype.",
        icon: BookmarkIcon,
      },
      {
        name: "Role:",
        description: "UI Designer.",
        icon: BriefcaseIcon,
      },
      {
        name: "Tools:",
        description: "Adobe Xd was used to build the prototype.",
        icon: PaintBrushIcon,
      },
    ],
    tools: ["Adobe Xd"],
    intro: [
      "The Travel Compass prototype is presented as the first iteration of a travel management tool, it shows an example of how an existing user would create a new trip. The application's functionality would allow users to have all the information related to a trip in one place, you would be able to read the trip's itinerary through a daily breakdown.",
    ],
    steps: [
      {
        name: "Research and Project Scope",
        description: [
          "This project started with research on other apps that already exist with similar functionality and features. I couldn't find many apps specifically targeted to leisure travel management; this topic tends to be important for employees on business trips, but I wanted to target the general public.",
          "The unique selling proposition the proposed Travel Compass app would have is the ability to save the trip's schedule and access all information even if the user is offline, which might be a common occurrence if the user is visiting a foreign country.",
        ],
        imgs: [],
      },
      {
        name: "Sketching",
        description: [
          "I spent some time sketching and thinking about how I could organize the basic layout of the app, I started to imagine how the information could be presented to make for an intuitive and user-oriented experience. These drawings helped me to get started on the interface design, but I knew things would likely get reshaped as I made progress.",
        ],
        imgs: [tcDesign1],
      },
      {
        name: "Wireframes",
        description: [
          "Once I had a rough idea of how I wanted the app to look, I brought my sketches to Adobe Xd. I started to build wireframes referencing my sketches and adjusting as elements were falling into place. The wireframes were built with different shades of black, to depict the hierarchy of the key information that should be highlighted. I built wireframes for the top-level navigation screens.",
          "The built screens revolve around an example of how recorded trip overviews would look like for an existing user, the ability to add a new trip, discover general information about destinations and the user account settings.",
        ],
        imgs: [tcDesign2],
      },
      {
        name: "Colour Palette",
        description: [
          "Once the wireframes took form, I transitioned to build a high-fidelity mock-up for the app. In order to start building reusable components on Adobe Xd, I wanted to find a suitable colour palette that would help me make design decisions to ensure the interface would have sufficient contrast and white space.",
          "I settled on two blue-green hues, and an orange hue to highlight calls to action across the interface. Blue is often associated with a dependable and stable experience. When looking at a blue element, people tend to feel calmer and more peaceful. These emotions are ones we want to have during a trip, where people might experience some anxiety by being in a place, they're not familiar with.",
          "By adding green into the mix, I'm also aiming to promote a balanced and soothing experience, as this colour brings out a grounding feeling. I would like the users of this app to feel they can rely on having access to their information at any point of their trip.",
          "The orange elements form a complementary colour scheme and add contrast to the interface to be eye-catching enough for call-to-action buttons and links.",
        ],
        imgs: [tcDesign3],
      },
      {
        name: "Adobe Xd Components",
        description: [
          "Since some elements of the interface are used multiple times across the app, I took advantage of the Component functionality Adobe Xd offers, to create reusable elements that could have multiple states as needed. For example, the button component has an Inactive state to show on a pristine form. I also created card components for the trip details overview and icons to use for the different sections of the interface.",
        ],
        imgs: [],
      },
      {
        name: "Mockups",
        description: [
          "Once the main components were ready, the final mockup design started to fall into place. The Add New Trip screen was the one that had important modifications compared to its wireframe. The four main categories I included for this first iteration are Transportation, Accommodations, Activities & Food.",
        ],
        imgs: [tcDesign4],
      },
      {
        name: "Prototype",
        description: [
          "The Travel Compass App prototype offers an overview of the app for an existing user and mocks the ability to add a new trip up. Views for the Discover and Account Settings screens are also available.",
        ],
        imgs: [tc],
      },
      {
        name: "Final Thoughts",
        description: [
          "As a next step, I would like to test this first iteration of the app on its target audience. Individuals between 20 to 50 years old who explicitly plan to travel at least once a year would likely find this app useful. Users' feedback would tell me which of the main functionalities of the app is more useful, and how it could be improved for a second iteration.",
        ],
        imgs: [],
      },
    ],
  },
  {
    id: "tcdev",
    title: "Travel Compass: Phase 2 Development",
    subtitle: "React Native Application for Android devices",
    images: {
      thumb: tcThumb,
      thumbAlt: "travel compass mobile interface preview",
      featuredImg: tc,
      featuredImgAlt: "travel compass mobile interface preview",
    },
    description:
      "Developed an Android application using React Native. The goal was to build the front end based on the Design from Phase 1.",
    chip: "Development",
    path: "travel-compass-phase2",
    isFeatured: true,
    links: [
      {
        href: "https://github.com/monica-zarate/travel-compass",
        title: "Travel Compass Project Repository",
        tag: "GitHub Repository",
      },
      {
        href: "https://www.monicazarate.com/projects/travel-compass-phase1",
        title: "Travel Compass Phase 1: UI Design",
        tag: "Travel Compass Phase 1: UI Design",
      },
    ],
    details: [
      {
        name: "Deliverables:",
        description: "Project's repository.",
        icon: BookmarkIcon,
      },
      {
        name: "Role:",
        description: "Front-end Developer.",
        icon: BriefcaseIcon,
      },
      {
        name: "Tools:",
        description: "The codebase was built in Next.js with React Native.",
        icon: PaintBrushIcon,
      },
    ],
    tools: ["React Native", "Expo", "Android Studio"],
    intro: [
      "After the Design Phase was completed, I wanted to expand the Travel Compass Project by taking the high-fidelity mockups into a native application. I developed an Android application using React Native, Expo and Android Studio as a mobile emulator.",
      "Travel Compass is a travel management application. Its main purpose is to serve as an information hub where users can store all the information related to a given trip, like flight information, accommodation check-in and check-out dates and times, and other activities users might want to do during a holiday. It's intended for 20- to 50-year-old individuals who explicitly plan to travel for leisure at least once a year.",
      "As a hypothetical existing user, on the Home Screen, we can see how the app would look like if we had a trip happening today and a list of any upcoming trips. By clicking on one of the Trip Overview Cards, we have access to the Trip Schedule Details.",
    ],
    steps: [
      {
        name: "Navigation Set-up and Screens",
        description: [
          'This app uses bottom tabs navigation for its four main sections: Home, Discover, Notifications and Account. The Home Screen is making use of stacked navigation for the Add New Trip and Trip Details Screens. In order to achieve the desired navigation patterns, I\'m using the "React Navigation" library, in particular the Stack and the Bottom Tabs navigators.',
          "In order to set up the navigation patterns, I started with the Bottom Tabs navigation, to define the four main sections the application has. I created a file per screen and placed the <Navigation Container> in App.js as the root element to manage the linking of the app.",
          "As an immediate child element, I'm placing an instance of the Bottom Tab Navigator that was assigned to a variable. Finally, the Screens are placed inside the <Tab.Navigator>, linking to the correct component. The same approach was taken for the Stacked Navigation, which takes place on the Home Screen.",
        ],
        imgs: [tcDev1],
      },
      {
        name: "Data File",
        description: [
          "One of the most important aspects of this project was deciding how the data should be structured. For this first iteration, I've created two data objects, one containing the information the user sees on the preview cards, and the second one containing an example of a trip's schedule, this information is accessed via the Current Trip Screen, to see which activities are happening on which days.",
          "For future iterations of this project, when a back-end integration takes place, I'd most likely re-structure the data architecture to have one single array of trips and each trip would have its own schedule. For the purposes of mocking up the app's functionality, I approached the data this way, because of time constraints.",
        ],
        imgs: [],
      },
      {
        name: "Screens Content",
        description: [
          "Once the data was in place, I started populating each Screen with the appropriate content. I'm making use of Native Components like View, Flat List and Style Sheet. I'm also integrating the \"React Native Elements\" library, in order to access more UI elements that I could further customize and implement theming.",
        ],
        imgs: [tcDev2],
      },
      {
        name: "Theme and Styles",
        description: [
          "The app's design started to come together once I started implementing the RNE Theming. In order to help style components that will be used across different Screens, I've applied the styling that was defined during Phase 1 of this project to the Button, Text and Icon Components, I'm also making use of a Theme Colour Palette to have the app's palette available as a constant.",
          "Further styling is applied using the Native Style Sheet Component on each screen according to its particular design.",
        ],
        imgs: [tcDev3],
      },
      {
        name: "Splash Screen and Icons",
        description: [
          "The application logo was implemented on a splash screen image and together with an app icon was added to the app.json file to help with branding and make for a more genuine experience when launching the app.",
        ],
        imgs: [],
      },
      {
        name: "Final Result",
        description: [
          "I had fun building this project, it was the first time I worked with React Native and I appreciate having the experience of stepping outside of my comfort zone in terms of developing a website or application for the web. For future iterations, I would like to include a back-end integration, so the app can get tested with real data.",
        ],
        imgs: [tc],
      },
    ],
  },
  {
    id: "billy",
    title: "Billy Expense Tracker: SPA Prototype",
    subtitle: "Expense Tracker Single Page Application Interface Design",
    images: {
      thumb: billyThumb,
      thumbAlt: "Billy interface preview",
      featuredImg: billy,
      featuredImgAlt: "Billy interface preview",
    },
    description:
      "Designed the interface of an expense-tracking application. An interface for a desktop environment, from sketching to a prototype.",
    chip: "UX Design",
    path: "billy",
    isFeatured: false,
    links: [
      {
        href: "https://www.figma.com/proto/IgRu2NjUyhF1jB0D9RofhD/Expenses-Tracker-App?page-id=0%3A1&node-id=33%3A317&viewport=1328%2C-705%2C0.27&scaling=min-zoom&starting-point-node-id=33%3A317",
        title: "Billy Prototype: Add New Expense",
        tag: "Figma Prototype",
      },
    ],
    details: [
      {
        name: "Deliverables:",
        description: "Design prototype.",
        icon: BookmarkIcon,
      },
      {
        name: "Role:",
        description: "UI Designer.",
        icon: BriefcaseIcon,
      },
      {
        name: "Tools:",
        description: "Figma was used to build the prototype.",
        icon: PaintBrushIcon,
      },
    ],
    tools: ["Figma"],
    intro: [
      "Billy's prototype is presented as the first iteration of an expense tracker tool that helps users manage their expenses and income, it shows an example of how an existing user would add a new expense. The application's functionality would offer users an easy-to-read overview of all the information related to their personal finances in one place. Billy is targeted at people who are new to expense tracking and budgeting.",
    ],
    steps: [
      {
        name: "App Conception",
        description: [
          "The idea came because I found the most popular expense tracker websites and apps are too complicated and have a lot of information that can be overwhelming and difficult to understand for new users. The proposed interface was conceived with a minimalistic approach, with a simple navigation pattern that offers easy-to-read information and an intuitive design.",
        ],
        imgs: [],
      },
      {
        name: "Project Scope and Research",
        description: [
          "Once I'd decided on the basic functionality for the app, I did some research on other apps that already exist with similar functionality and features.",
          "The best-rated applications were too robust since they offered a more aggressive approach to keeping their users' expenses in check with their budget, sending alerts when expenses were going over budget or making use of the envelope budgeting system. In these cases, I found their interface suffered because they fit a lot of information in one place, which reflects in a very cluttered interface with a lot of numbers associated with a single expense.",
        ],
        imgs: [],
      },
      {
        name: "Sketching",
        description: [
          "When I sketched out the first layout for Billy, I thought of people who might be new to expense tracking and budgeting, and what would be the most important and valuable information to include for them, to aid their financial decisions.",
          "The three main sections: Transactions, Accounts & Budgets were added as elements for the main navigation. For the Transactions Section, I decided to include a Graph View and a List View, so people can choose the best way for them to read the information.",
        ],
        imgs: [billy1],
      },
      {
        name: "Wireframes",
        description: [
          "Once I had a rough idea of how I wanted the app to look, I brought my sketches to Figma. I started to build wireframes referencing my sketches and adjusting as elements were falling into place. I built wireframes for the top-level navigation screens using different shades of black, to depict the hierarchy of the key information that should be highlighted, like call-to-action buttons.",
        ],
        imgs: [billy2],
      },
      {
        name: "Colour Palette",
        description: [
          "To start building the high-fidelity mock-ups for the app I needed to find a suitable colour palette that would help me make design decisions to ensure the interface would have sufficient contrast and white space.",
          "The app's colour palette consists of green and violet that create a complementary colour scheme. Hue variations help with hierarchy and offer visual variety while remaining consistent. Since Billy is an app that's closely related to the concept of money, I decided to use green as the base colour. Aside from the reference to bills and money, green is also tending to have a soothing effect, which is a feeling we want to evoke when people are dealing with their finances, so they don't experience it as a stressful situation.",
          "I chose the violet as a compliment because it offers a good contrast with the green elements, it's used mainly on buttons and call-to-action sections. Violet is often related to spirituality, and the way I intended to use it here is to awaken awareness into an important topic of life, which is personal finances.",
          "Beyond offering a way to manage and track expenses and budgets, having a healthy financial life offers the ability to make mindful decisions and can help to lead a more enjoyable life.",
        ],
        imgs: [],
      },
      {
        name: "Branding",
        description: [
          "For Billy's logo, I decided to use a piggy bank illustration, to emphasize the importance of savings and planning when it comes to personal finances. The application is making use of the font Raleway, in different weights and sizes to help with hierarchy and make the pages easy to scan. A sans-serif font was chosen to help with web readability on the user's device.",
        ],
        imgs: [billy3],
      },
      {
        name: "Mockups",
        description: [
          "Once the basic elements were in place, I started building components on Figma for the elements that are used more than once across the app's interface. The main navigation panel came together to offer a top-level hierarchy pattern.",
          "The elements on the interface were conceived under the 8 points rule to create a harmonious balance. This can be found on paddings, font sizes and line heights, widths and heights of icons, buttons, and containers.",
          "Since Billy is intended to be used as an application, (instead of a traditional website), the navigation menu is occupying a fixed space to the left-hand side of the layout, for the remaining area, where all the content is being presented, I'm using a nine-column grid to keep all elements aligned and promote consistency across pages.",
        ],
        imgs: [billy4, billy5, billy6],
      },
      {
        name: "Prototype",
        description: [
          "Billy's app prototype offers an overview of the app for an existing user and mocks the ability to add a new expense. The prototype offers the user the ability to navigate the three main sections, and to change the view for the Transactions section from Chart to List.",
        ],
        imgs: [billy],
      },
      {
        name: "Final Thoughts",
        description: [
          "As a next step, I would like to test this version of the app on its target audience. Individuals between 18 to 30 years old who might be joining the workforce or are in their first years as employees or freelancers that receive some sort of income.",
          "Users' feedback would provide valuable information and how much Billy is solving their pain points. How could the budgeting section be more useful? How important is their bank account integration to plan and make better financial decisions? These would be the kind of questions I'd ask during user testing and interviews.",
        ],
        imgs: [],
      },
    ],
  },
];
