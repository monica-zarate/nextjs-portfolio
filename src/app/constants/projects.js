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
  guavaPunch1,
  guavaPunch2,
  guavaPunch3,
  guavaPunch4,
  guavaPunch5,
  guavaPunch6,
  guavaPunchThumb,
  guavaPunch,
  paperLantern1,
  paperLantern2,
  paperLantern3,
  paperLantern4,
  paperLantern5,
  paperLantern6,
  paperLantern7,
  paperLantern8,
  paperLanternThumb,
  paperLantern,
  tcDesign1,
  tcDesign2,
  tcDesign3,
  tcDesign4,
  tcDev1,
  tcDev2,
  tcDev3,
  tc,
  tcThumb,
  ps,
  ai,
  dn,
  xd,
  figma,
  maze,
  useberry,
  html,
  css,
  php,
  mamp,
  js,
  postman,
  react,
  expo,
  android,
} from "../../assets";

export const projects = [
  {
    id: "1",
    title: "Guava Punch: Logo & Poster",
    subtitle: "Logo and promotional Poster",
    images: {
      thumb: guavaPunchThumb,
      thumbAlt: "guava punch poster mockup",
      featuredImg: guavaPunch,
      featuredImgAlt: "guava punch poster mockup",
    },
    description:
      "Developed a fictional beverage company profile and designed a logo and a promotional poster that would attract their target audience.",
    chip: "Graphic Design",
    discipline: "graphic-design",
    path: "guava-punch",
    isFeatured: false,
    links: {
      repo: "",
      repoTitle: "",
      figmaPrototype: "",
      figmaPrototypeTitle: "",
      xdPrototype: "",
      xdPrototypeTitle: "",
      site: "",
      siteTitle: "",
    },
    tools: [
      { name: "Adobe Illustrator", icon: ai },
      { name: "Adobe Photoshop", icon: ps },
      { name: "Adobe Dimension", icon: dn },
    ],
    featuredTools: [
      { name: "Adobe Illustrator", icon: ai },
      { name: "Adobe Photoshop", icon: ps },
      { name: "Adobe Dimension", icon: dn },
    ],
    intro: [
      "This project started by developing a logo using shapes and the pen tool in Adobe Illustrator, arranging the components in an orderly manner using layers. Text components were meant to be outlined, to make sure the logo was scalable. A black and white version was requested, to make sure the logo was colour-independent.",
      "In order to create the promotional poster, we had to include a background image and at least one 3D element that was placed on a realistic scene, blending in with the background image. Lighting and perspective were important elements of this project. As I had previously created a logo for a fictitious beverage company called Guava Punch, I decided to use that company as a foundation for this project and develop a promotional poster that included a beverage container.",
    ],
    steps: [
      {
        name: "Beverage Company Conception",
        description: [
          "I got inspired by a drink I used to enjoy in my childhood which was guava nectar and decided to add sparkling water as a twist, to make it more interesting. I wanted to create a casual beverage that could be enjoyed by everyone, as a soft drink.",
        ],
        imgs: [guavaPunch1],
      },
      {
        name: "Mind Map and Sketching",
        description: [
          "A mind map was created to start defining the brand. Having certain keywords in mind, I then moved on to a sketching phase, where ideas started to flow by hand drawing the main components I wanted to include on the logo.",
        ],
        imgs: [guavaPunch2],
      },
      {
        name: "Creative Process",
        description: [
          "The colour palette was decided based on the beverage's main ingredient: the guava fruit, which has a pink vibrant colour, as well as some green from its leaves. The logo gravitates towards round shapes, to reference the bubbles the sparkling water will add to the mix.",
        ],
        imgs: [guavaPunch3],
      },
      {
        name: "Black and White Version",
        description: [
          "The selected sketches were translated into Adobe Illustrator in a black and white version. The guava fruit was traced using the pen tool. Balance and hierarchy were applied to create harmony and emphasize the more important information.",
        ],
        imgs: [guavaPunch4],
      },
      {
        name: "Poster Brainstorming",
        description: [
          "Since this is a casual soft drink that is targeted at the general public and is a carbonated beverage, a can would be the most likely container to be used for it. The beverage is meant to be fun, refreshing and energizing, and we tend to associate these adjectives with the summertime when people are spending more time outdoors and the weather is hotter.",
        ],
        imgs: [],
      },
      {
        name: "Adobe Dimension",
        description: [
          "The park photo was placed as a background image, then the container was brought in using a fill colour and the label as a decal, to wrap around the can for a realistic effect. The 3D model perspective was matched to the background image. The most challenging part of the project was the lighting. This was my first time using Adobe Dimension, so it took some time to figure out the lighting options and settings.",
          "The final result was built with two light sources, one considered as “natural lighting” recreating the outdoor lighting the background image has, and because the natural light is hitting the can from behind/ to one side, an ambient light was added to help with the illumination of the front of the container, where the label is placed.",
        ],
        imgs: [guavaPunch5, guavaPunch6],
      },
      {
        name: "Adobe Photoshop",
        description: [
          "Once the poster was rendered, it was then exported to Adobe Photoshop, where the slogan text and certification logos were added. Typography and text colours were chosen to complement the container and provide enough contrast to be readable.",
        ],
        imgs: [guavaPunch],
      },
    ],
  },
  {
    id: "2",
    title: "Paper Lantern: Web & App Prototype",
    subtitle: "Website and mobile app prototype and testing",
    images: {
      thumb: paperLanternThumb,
      thumbAlt: "paper lantern mobile interface preview",
      featuredImg: paperLantern,
      featuredImgAlt: "paper lantern interface preview",
    },
    description:
      "Designed and tested a prototype for a fictitious bookstore. The project includes a website and a mobile interface.",
    chip: "UX Design",
    discipline: "design",
    path: "paper-lantern",
    isFeatured: false,
    links: {
      repo: "",
      repoTitle: "",
      figmaPrototype:
        "https://www.figma.com/proto/31WcXdZsapuWQgdD1O0C1k/Paper-Lantern-Phase-2?page-id=2%3A3&node-id=21%3A498&viewport=77%2C424%2C0.25&scaling=scale-down&starting-point-node-id=21%3A498",
      figmaPrototypeTitle:
        "Paper Lantern Prototype: Add Payment Method Process",
      xdPrototype:
        "https://xd.adobe.com/view/25880ba9-718b-436e-b3b4-04ce7bf95b87-70db/?fullscreen",
      xdPrototypeTitle: "Paper Lantern Prototype: Search and Checkout Process",
      site: "",
      siteTitle: "",
    },
    tools: [
      { name: "Adobe Xd", icon: xd },
      { name: "Figma", icon: figma },
      { name: "Useberry", icon: useberry },
      { name: "Maze", icon: maze },
    ],
    featuredTools: [
      { name: "Adobe Xd", icon: xd },
      { name: "Figma", icon: figma },
    ],
    intro: [
      "To achieve the prototypes, I based my design decisions on User Personas, User Scenarios and User Flows. The interfaces started with low-fidelity wireframes, which evolved into high-fidelity mockups. The project's final stage consisted of testing our prototypes and applying revisions after users' feedback and data analysis.",
    ],
    steps: [
      {
        name: "Company Conception",
        description: [
          "With e-commerce websites' functionalities in mind, I created a website and mobile application for a bookstore that I called Paper Lantern.",
        ],
        imgs: [],
      },
      {
        name: "Website",
        description: [
          "User Persona: Benjamin is a pet owner who likes to explore new hobbies. Scenario: He's looking for a reference book that can introduce him to indoor gardening while keeping his cat safe. User Flow: Ben browses the Paper Lantern website looking for a specific book and successfully goes through the checkout process.",
        ],
        imgs: [paperLantern1, paperLantern2],
      },
      {
        name: "Mobile App",
        description: [
          "User Persona: Taylor's a young professional that works at a creative agency. Scenario: They're looking to update their credit card information on the Paper Lantern app, so they can check out faster whenever they need to place an order. User Flow: Taylor launches the Paper Lantern App and successfully adds a new payment method.",
        ],
        imgs: [paperLantern3, paperLantern4],
      },
      {
        name: "Wireframes",
        description: [
          "I did some research on e-commerce websites and apps from Paper Lantern's main competitors and I sketched out the lo-fi wireframes keeping the personas' main goal and usability in mind.",
        ],
        imgs: [],
      },
      {
        name: "Mockups and Prototypes",
        description: [
          "When translating the Website and App Interfaces to their high-fidelity version, I kept in mind principles of design like balance, patterns and unity to create a useful and aesthetically pleasing experience for the users.",
        ],
        imgs: [paperLantern5, paperLantern6],
      },
      {
        name: "Website User Testing",
        description: [
          "The website prototype was tested using Useberry. All six participants completed the three tasks they were presented with, however, thanks to their feedback and Useberry heat maps I found the users had some difficulties completing one of the tasks given. The search functionality could be improved, as well as the wording of the task. A second iteration of the prototype was completed, with updated labels and navigation options.",
        ],
        imgs: [paperLantern7],
      },
      {
        name: "App User Testing",
        description: [
          "The app prototype was tested using Maze. All nine participants completed the three tasks they were presented with. The test has a Usability Score of 76, placing it on a Medium level of usability, which is a sign that there's room for improvement. Similar to the website prototype, users had difficulties with the search functionality. A revised version includes adding placeholder text on the search bar and increased contrast of the interface icons.",
        ],
        imgs: [paperLantern8],
      },
      {
        name: "Final Thoughts",
        description: [
          "For future iterations, it would be interesting to test the search functionality again and add a questionnaire or another opinion scale to enquire how the users would improve this experience, what was the specific part they struggled with, etc.",
        ],
        imgs: [],
      },
    ],
  },
  {
    id: "3",
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
    discipline: "development",
    path: "acnh",
    isFeatured: false,
    links: {
      repo: "https://github.com/monica-zarate/acnh_residents",
      repoTitle: "ACNH PHP Project Repository",
      figmaPrototype: "",
      figmaPrototypeTitle: "",
      xdPrototype: "",
      xdPrototypeTitle: "",
      site: "",
      siteTitle: "",
    },
    tools: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "PHP", icon: php },
      { name: "MAMP", icon: mamp },
    ],
    featuredTools: [{ name: "PHP", icon: php }],
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
    id: "4",
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
    discipline: "development",
    path: "apod",
    isFeatured: false,
    links: {
      repo: "https://github.com/monica-zarate/nasa-apod",
      repoTitle: "APOD Project Repository",
      figmaPrototype: "",
      figmaPrototypeTitle: "",
      xdPrototype: "",
      xdPrototypeTitle: "",
      site: "http://apod.monicazarate.com",
      siteTitle: "Monica's APOD Website",
    },
    tools: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Javascript", icon: js },
      { name: "Postman", icon: postman },
    ],
    featuredTools: [{ name: "Javascript", icon: js }],
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
    id: "5",
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
    discipline: "design",
    path: "travel-compass-phase1",
    isFeatured: false,
    links: {
      repo: "",
      repoTitle: "",
      figmaPrototype: "",
      figmaPrototypeTitle: "",
      xdPrototype:
        "https://xd.adobe.com/view/70b5d4ab-3e64-42bc-a21c-636217837e02-25e6/?fullscreen",
      xdPrototypeTitle: "Travel Compass Prototype: Add New Trip",
      site: "",
      siteTitle: "",
    },
    tools: [{ name: "Adobe Xd", icon: xd }],
    featuredTools: [{ name: "Adobe Xd", icon: xd }],
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
    id: "6",
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
    discipline: "design",
    path: "billy",
    isFeatured: true,
    links: {
      repo: "",
      repoTitle: "",
      figmaPrototype:
        "https://www.figma.com/proto/IgRu2NjUyhF1jB0D9RofhD/Expenses-Tracker-App?page-id=0%3A1&node-id=33%3A317&viewport=1328%2C-705%2C0.27&scaling=min-zoom&starting-point-node-id=33%3A317",
      figmaPrototypeTitle: "Billy Prototype: Add New Expense",
      xdPrototype: "",
      xdPrototypeTitle: "",
      site: "",
      siteTitle: "",
    },
    tools: [{ name: "Figma", icon: figma }],
    featuredTools: [{ name: "Figma", icon: figma }],
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
  {
    id: "7",
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
    discipline: "development",
    path: "travel-compass-phase2",
    isFeatured: true,
    links: {
      repo: "https://github.com/monica-zarate/travel-compass",
      repoTitle: "Travel Compass Project Repository",
      figmaPrototype: "",
      figmaPrototypeTitle: "",
      xdPrototype: "",
      xdPrototypeTitle: "",
      site: "",
      siteTitle: "",
    },
    tools: [
      { name: "React Native", icon: react },
      { name: "Expo", icon: expo },
      { name: "Android Studio", icon: android },
    ],
    featuredTools: [{ name: "React Native", icon: react }],
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
];
