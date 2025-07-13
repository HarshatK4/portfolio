import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Harsha Teja Kandala",
  initials: "HK",
  url: "https://harshatejak.io",
  location: "India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: 
   "Frontend Engineer passionate about crafting elegant UI experiences. Advocates clean code, loves building modular components, and thrives on solving real-world problems with scalable web apps.",
   summary:
        "With over 4 years of experience as a Frontend Developer, I specialize in building performant and accessible web apps using React.js, Next.js, and TypeScript. I’ve delivered production-grade platforms across healthcare and project management domains, collaborating in Agile teams and leading UI architecture. My journey also includes technical hiring and public event anchoring, showcasing strong communication and people skills.",
  avatarUrl: "",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "Styled Components",
    "Jest",
    "React Testing Library",
    "Git",
    "GitHub",
    "Vercel",
    "REST APIs",
    "Redux",
    "Axios",
    "SQLite",
    "Agile/Scrum",
    "Python(basic)",
    "Leadership",
    "Public Speaking",
    "Public Relations",
    "Event Organiser",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "harshatk974@gmail.com",
    tel: "+919989611350",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HarshatK4",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshatejak/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "In Technet - Frontend Engineer",
      href: "https://intechled.com/",
      badges: [],
      location: "Remote",
      title: "SliceFlo",
      logoUrl: "/Intechnet.jpeg",
      start: "Oct 2022",
      end: "present",
      description:
        "Led the development of a robust project management platform using React.js, Next.js, and TypeScript. Created custom login and signup pages as part of the complete authentication and onboarding flow. Architected profile/account settings and responsive UI using Tailwind CSS and Material UI. Built dynamic project dashboards, team management interfaces, and task workflows with Redux Toolkit for state handling and integrated secure APIs via Axios and Fetch. Designed a comprehensive Teams module featuring team lists, member assignments, discussions, goals, portfolios, and calendar-based targets. Ensured accessibility and performance through modular components, iterative improvements, and Agile collaboration across design and QA teams."},
    {
      company: "In Technet - Frontend Engineer",
      badges: [],
      href: "https://intechled.com/",
      location: "Remote",
      title: "Dental Care",
      logoUrl: "/Intechnet.jpeg",
      start: "Feb 2021",
      end: "Sep 2022",
      description:
        "Developed key frontend screens including Patients Page, Doctors List, Appointment Booking, and Payment Page using React.js and TypeScript. Integrated features such as doctor ratings, promotional banners, and mobile-responsive layouts to enhance user experience and UI aesthetics. Resolved critical UI issues, maintained clean and modular code, and participated in regular code reviews. Worked closely with QA, design, and backend teams in Agile sprints to support development, manual testing, and bug resolution.",
    },
    {
  company: "Munificent Resource - HR Recruiter",
  badges: [],
  href: "https://munificentresource.in/",
  location: "Remote",
  title: "Freelancer",
  logoUrl: "/Munificient.webp", // Make sure you add this logo to your /public folder
  start: "Feb 2024",
  end: "Present",
  description:
    "Managed full-cycle recruitment including sourcing, screening, and onboarding candidates across tech and non-tech domains. Coordinated with clients to understand requirements, streamlined interview processes, and maintained candidate pipelines. Contributed to employer branding, job postings, and communication strategies to enhance hiring efficiency and team growth.",
}
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Jawaharlal Nehru Technological University",
      href: "https://www.jntuk.edu.in/",
      degree: "Master of Technology (M.Tech) in Information Technology",
      logoUrl: "/Jntuk-logo.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Mohan Babu University",
      href: "https://www.mbu.asia/",
      degree: "Bachelor of Technology (B.Tech) in Information Technology",
      logoUrl: "/Mohanbabuuniversity.png",
      start: "2014",
      end: "2018",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
  title: "Sliceflo",
  href: "https://slice-flo-asdh.vercel.app/",
  dates: "Oct 2022 - Present",
  active: true,
  description:
  "Sliceflo is a team productivity and collaboration platform designed to streamline project workflows. The application features secure user authentication, project and task dashboards, role-based team management, discussions, goals tracking, and integrated calendars. It offers a clean, responsive UI and supports modern frontend technologies to ensure a seamless user experience across devices.",
  technologies: [
    "React.js",
    "Next.js",
    "Typescript",
    "JavaScript",
    "REST APIs",
    "Redux Toolkit",
    "HTML5",
    "TailwindCSS",
    "Material UI",
    "Fetch",
    "Styled Components",
    "Git",
    "GitHub",
    "Vercel",
  ],
  links: [
    {
      type: "Website",
      href: "https://slice-flo-asdh.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
  ],
  image: "/SliceFlo.png", // You can upload and reference an image file here later
  video: "",  // Optional: You can add a demo video link if available
  type: "Software Application",
},
    {
  title: "Dental Care",
  href: "https://dental-care-wine.vercel.app/",
  dates: "Feb 2021 - Sep 2022",
  active: false,
  description:
    "The DentalCare web application is a responsive healthcare platform designed to streamline patient-doctor interactions. It includes essential features such as a Patients Page for managing user profiles and appointment history, a Doctors List with searchable and filterable profiles including ratings and specialties, and an intuitive Appointment Booking system with real-time availability. The app also integrates a Payment Page to handle transactions, apply promotional banners, and enhance the overall user experience.",
  technologies: [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Material UI",
    "Axios",
    "React Router",
    "Redux Toolkit",
  ],
  links: [
    {
      type: "Website",
      href: "https://dental-care-wine.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
  ],
  image: "/DentalCare.png",
  video: "", // Add if you have a demo video
},
{
  title: "Food Recipes",
  href: "https://food-recipes-green.vercel.app/",
  dates: "",
  active: true,
  description:
    "A modern recipe browsing application where users can explore a wide variety of food recipes with detailed ingredients, cooking instructions, and images. It includes search functionality, category filters, and a responsive UI optimized for both desktop and mobile users.",
  technologies: [
    "React.js",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "MUI",
    "Framer Motion",
  ],
  links: [
    {
      type: "Blog",
      href: "https://food-recipes-green.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/HarshatK4/food-recipes",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/Food.png", // replace with your image path if needed
  video: "", // add video link if you have a demo
},
{
  title: "News Blog",
  href: "https://news-blog-navy.vercel.app/",
  dates: "",
  active: true,
  description:
    "A clean and responsive blog-style news reader application that fetches and displays real-time headlines across categories like business, entertainment, health, and technology. Users can browse trending news, view full article content, and navigate via category filters.",
  technologies: [
    "React.js",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "MUI",
    "REST API",
  ],
  links: [
    {
      type: "Blog",
      href: "https://news-blog-navy.vercel.app/",
      icon: <Icons.globe className="size-3" />,
   },
    {
      type: "Source",
      href: "https://github.com/HarshatK4/news-blog",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/News.png", // Update this path with your image location
  video: "", // Optional: Add a link if you have a screen recording
},
{
  title: "Tic Tac Toe",
  href: "https://tic-tac-toe-mu-umber-17.vercel.app/",
  dates: "Mar 2024",
  active: true,
  description:
    "A classic two-player Tic Tac Toe game built using React. Features a clean, responsive UI with real-time move tracking, winner detection logic, and game reset functionality. Designed for quick, interactive play on both desktop and mobile devices.",
  technologies: [
    "React.js",
    "JavaScript",
    "CSS3",
    "Vercel",
  ],
  links: [
    {
      type: "Website",
      href: "https://tic-tac-toe-mu-umber-17.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/HarshatK4/tic-tac-toe",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/tictoctoe.png", // Replace with actual path if needed
  video: "", // Optional
},
{
  title: "Shopping Cart",
  href: "https://shopping-cart-smoky-eta.vercel.app/",
  dates: "Apr 2024",
  active: true,
  description:
    "A dynamic e-commerce shopping cart application allowing users to browse, add, update, and remove products from their cart. Built with React and React Router, it features quantity control, cart item persistence, and a clean, responsive UI.",
  technologies: [
    "React.js",
    "JavaScript",
    "CSS3",
    "React Router",
    "Vercel",
  ],
  links: [
    {
      type: "Website",
      href: "https://shopping-cart-smoky-eta.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/HarshatK4/shopping-cart",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/shoppingcart.png", // Optional placeholder
  video: "", // Optional demo
},
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
