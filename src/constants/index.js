import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  // solidity,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
 
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video editor",
    icon: creator,
  },

  {
    title: "UI/UX",
    icon: figma,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  


 
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "cyberpeace",
    icon:tesla,
    iconBg: "#383E56",
    date: "Aug 2024 - Nov 2024",
    points: [
     " Optimized backend APIs, reducing response times by 18% and integrating with frontends/third-party APIs.",
     " Ensured 99% uptime of mission-critical backend systems during tenure",
     " Automated API documentation with Swagger, improving collaboration and reducing manual efforts"
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  //
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RoadMate",
    description:
    "RideDekho is a comprehensive vehicle booking and rental platform that allows users to book cars, bikes, and auto-rickshaws for their travel needs. Whether you need a ride for a short trip, a long journey, or wish to rent a vehicle for personal use, RideDekho provides a seamless experience.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/Ankit3200/RoadMate",
  },
  {
    name: "BookNest",
    description:
    "SkillSphere isn’t just an online bookstore—it’s a gateway to knowledge, creativity, and personal growth! Whether you're a student, a professional, or an avid reader, SkillSphere helps you discover, buy, and explore books effortlessly. With a seamless user experience, curated recommendations, and secure payments, your next great read is just a click away!",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/Ankit3200/BookNest",
  },
  {
    name: "Solution",
    description:
    "Presento is a powerful yet easy-to-use attendance calculator designed for students and professionals to effortlessly track their attendance percentage. Whether you need to maintain minimum attendance for exams or keep a log of workdays, Presento makes attendance tracking simple, smart, and stress-free!",
    tags: [
      {
        name: "Handelbars",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ankit3200/Presento",
  },
  {
    name: "FlixFlow",
    description:
    "FlixFlow is a next-gen video streaming platform that brings you an immersive entertainment experience. Whether you love binge-watching TV shows, discovering indie films, or exploring educational content, FlixFlow delivers high-quality streaming, personalized recommendations, and a seamless viewing experience—all in one place!",
    tags: [
      {
        name: "Handelbars",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "deuno",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ankit3200/FlixFlow",
  },
  {
    name: "LinkSlice",
    description:
    "LinkSlice is a fast, secure, and reliable URL shortener that helps you shorten long URLs into sleek, shareable links. Whether you're managing marketing campaigns, tracking click analytics, or simply making links more accessible, LinkSlice provides a seamless experience with real-time insights and custom branding.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ankit3200/LinkSlice",
  },
 

  
  
  
  
  
];

export { services, technologies, experiences, testimonials, projects };
