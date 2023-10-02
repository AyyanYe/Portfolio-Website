import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  solidity,
  react_native,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  ke,
  nixor,
  pip,
  upwork,
  // tesla,
  // shopify,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Solidity",
    icon: solidity,
  },
  // {
  //   name: "React Native",
  //   icon: react_native,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Teacher's Assistant",
    company_name: "Nixor College",
    icon: nixor,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - June 2019",
    points: [
      "Appointed as Teacher's Assistant due to outstanding academic performance in O Levels.",
      "Instructed students individually and in groups, using various teaching methods such as lectures, discussions and demonstrations.",
      "Dedicated 250+ hours, resulting in 25% improvement in students' grades.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "K-Electric",
    icon: ke,
    iconBg: "white",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Significantly enhanced UI/UX design of the app using creative component designs and made the app more SEO-friendly, driving organic traffic growth and 30% improvement in search engine rankings.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Successfully implemented an AI model to predict transformer health index with a remarkable accuracy of 94%, contributing to enhanced equipment maintenance and operational efficiency",
    ],
  },
  {
    title: "Front-End Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Mar 2023",
    points: [
      "Worked on various web development projects for clients across different industries.",
      "Utilized HTML, CSS, JavaScript, and modern frameworks (e.g., React.js) to build interactive and responsive user interfaces.",
      "Collaborated closely with clients to gather project requirements and ensure clear communication throughout the development process.",
      "Implemented custom designs and ensured pixel-perfect accuracy from design mockups to the final product.",
      "Optimized website performance, including page load times and mobile responsiveness, to enhance user experience.",
      "Ensured cross-browser compatibility and addressed any compatibility issues promptly.",
      "Integrated third-party APIs and services to enhance website functionality.",
      "Managed version control using Git and collaborated with other developers using platforms like GitHub.",
      "Participated in code reviews, providing feedback and recommendations to improve code quality and maintainability.",
      "Delivered projects on time and within budget, meeting or exceeding client expectations.",
      "Maintained and updated existing websites, fixing bugs and implementing feature enhancements.",
      "Managed project timelines, milestones, and client communication to ensure project success.",
      "Continuously improved skills and stayed up-to-date with the latest web development trends and technologies.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company_name: "Property Investment Point",
    icon: pip,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Revamped real estate platforms’ front-end with cross-browser compatible HTML, CSS, JavaScript and React, resulting in 20% boost in user engagement and browsing experience.",
      "Optimized the property listing search functionality using memoization, resulting in a 20% increase in user efficiency and a 15% reduction in page load time.",
      "Improved the method for handling property images using custom JavaScript solutions, leading to 10% decrease in page load time and increase in the efficiency of adding new listings.",
    ],
  },
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
    name: "Cryptography Algorithms in C++",
    description:
      "This repository contains C++ implementations of three fundamental cryptography algorithms: DES (Data Encryption Standard), RSA (Rivest–Shamir–Adleman), and Caesar's Cipher. These algorithms are widely used in information security and encryption, and this repository provides simple yet functional implementations for educational and reference purposes.",
    tags: [
      {
        name: "cryptography",
        color: "blue-text-gradient",
      },
      {
        name: "encryption",
        color: "green-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "pink-text-gradient",
      },
      {
        name: "c++",
        color: "white-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AyyanYe/Encryption-Project",
  },
  {
    name: "Little Lemon Booking Website",
    description:
      "A booking application integrated into the Little Lemon website, allowing users to make reservations. Implemented using React components and API calls.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "white-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AyyanYe/Project-Capstone",
  },
  {
    name: "Ballot System",
    description:
      "A smart contract written in Solidity for a secure and transparent voting system. Designed for elections, surveys, and decision-making processes on the blockchain.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "smart_contract",
        color: "pink-text-gradient",
      },
      {
        name: "blockchain",
        color: "white-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/AyyanYe/Ballot-System--Smart-Contract-",
  },
  {
    name: "Radio/Music App in React Native",
    description:
      "A React Native mobile app that lets users listen to music and stream radio broadcasts. The process involved designing a stunning music player, implementing music streaming, radio streaming, and various music app functionalities.",
    tags: [
      {
        name: "upcoming",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "white-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/AyyanYe",
  },
];

export { services, technologies, experiences, testimonials, projects };
