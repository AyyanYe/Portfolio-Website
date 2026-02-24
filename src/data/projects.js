/**
 * PROJECTS DATA – No database needed
 *
 * Add or edit projects by adding objects to the array below.
 * Each project can have:
 *
 *   name            (required)  – Project title
 *   description     (required)  – Short description shown on the card
 *   image           (required)  – Card image: import from "../assets" (e.g. myImage from "./myImage.png")
 *   source_code_link (required) – GitHub (or other) repo URL
 *   tags            (required)  – Array of { name: "tagName", color: "blue-text-gradient" }
 *                                  Colors: blue-text-gradient | green-text-gradient | pink-text-gradient | white-text-gradient
 *
 *   readme_url      (optional)  – Direct URL to README (e.g. raw GitHub). If omitted, we derive it from source_code_link.
 *   demo_url        (optional)  – Link to live project / demo
 *
 * For a new image: add the file under src/assets/, import it here, and use it as image.
 */

import {
  web,
  LandingPage,
  Ballot,
  aimage,
  ResApp,
  littlelemon,
  Cryp,
} from "../assets";

export const projects = [
  {
    name: "Cryptography Algorithms in C++",
    description:
      "This repository contains C++ implementations of three fundamental cryptography algorithms: DES (Data Encryption Standard), RSA (Rivest–Shamir–Adleman), and Caesar's Cipher.",
    tags: [
      { name: "cryptography", color: "blue-text-gradient" },
      { name: "encryption", color: "green-text-gradient" },
      { name: "cybersecurity", color: "pink-text-gradient" },
      { name: "c++", color: "white-text-gradient" },
    ],
    image: Cryp,
    source_code_link: "https://github.com/AyyanYe/Encryption-Project",
  },
  {
    name: "AI SaaS",
    description:
      "The app was build using NextJS, it uses OpenAI APIs and Replicate APIs to generate content. Moreover, it uses a Clerk Authentication System, RadixUI Components plus some custom components. Lastly, the database was a Supabase PostgreSQL database and threeJS was used to render 3D components.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "Prisma", color: "white-text-gradient" },
    ],
    image: aimage,
    source_code_link: "https://github.com/AyyanYe/restaurant-app",
  },
  {
    name: "Little Lemon Booking Website",
    description:
      "A booking application integrated into the Little Lemon website, allowing users to make reservations. Implemented using React components and API calls.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "API", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
      { name: "HTML", color: "white-text-gradient" },
    ],
    image: littlelemon,
    source_code_link: "https://github.com/AyyanYe/Project-Capstone",
  },
  {
    name: "Ballot System",
    description:
      "A smart contract written in Solidity for a secure and transparent voting system. Designed for elections, surveys, and decision-making processes on the blockchain.",
    tags: [
      { name: "solidity", color: "blue-text-gradient" },
      { name: "hardhat", color: "green-text-gradient" },
      { name: "smart_contract", color: "pink-text-gradient" },
      { name: "blockchain", color: "white-text-gradient" },
    ],
    image: Ballot,
    source_code_link: "https://github.com/AyyanYe/Ballot-System--Smart-Contract-",
  },
  {
    name: "Simple Landing Page",
    description:
      "A nerfed version of a simple landing page that was designed for a client. I don't usually post things that are owned by my clients, but this client was kind enough to allow me to use this to showcase my skills :)",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "VanillaJS", color: "pink-text-gradient" },
    ],
    image: LandingPage,
    source_code_link: "https://github.com/AyyanYe/manage-landing-page",
  },
  {
    name: "Little Lemon Restaurant App",
    description:
      "This restaurant app, built using React Native and Expo, is designed to streamline the dining experience by allowing users to explore restaurants, view menus, and place orders conveniently.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "CSS3", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Expo", color: "white-text-gradient" },
    ],
    image: ResApp,
    source_code_link: "https://github.com/AyyanYe/restaurant-app",
  },
  {
    name: "Portfolio Website",
    description:
      "This portfolio site built with React, Vite, and Three.js. Features 3D canvas sections, project showcase with README viewer, and a modern dark theme with smooth animations.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
      { name: "Tailwind", color: "white-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/AyyanYe/Portfolio-Website",
  },
  {
    name: "Real-Time Dashboard",
    description:
      "A full-stack dashboard with real-time data updates, charts, and role-based access. Built with React and Node.js for monitoring and analytics.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "WebSocket", color: "pink-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/AyyanYe",
  },
  {
    name: "Industrial IoT Digital Twin",
    description:
      "Bi-directional industrial monitoring system with 3D Digital Twin. End-to-end IoT pipeline: STM32/FreeRTOS firmware, Python edge gateway, MQTT (HiveMQ), NestJS backend, and React + Three.js dashboard.",
    tags: [
      { name: "STM32", color: "blue-text-gradient" },
      { name: "NestJS", color: "green-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
      { name: "MQTT", color: "white-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/AyyanYe/industrial-digital-twin",
  },
  {
    name: "AI Auditor (AuditGenius)",
    description:
      "AI Compliance Auditing System for the EU AI Act. Hybrid evaluation engine: deterministic formulas plus LLM-based judging for bias, fairness, and transparency. FastAPI, LangChain, React, SQLite.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "EU AI Act", color: "white-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/AyyanYe/AI-Auditor",
  },
  {
    name: "Darmstadt Energy & Weather Analysis",
    description:
      "Analyzing the impact of weather on simulated energy consumption in Darmstadt, Germany. Data fetching (Open-Meteo API), EDA, hypothesis testing, and predictive modeling with cross-validation.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "scikit-learn", color: "pink-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/AyyanYe/Darmstadt-Energy-Weather-Analysis",
  },
  {
    name: "Flow Management SaaS",
    description:
      "Complete SaaS for workflow management. Next.js, Prisma, Clerk, MongoDB. Monolithic architecture with payment and subscription microservice (Stripe).",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Prisma", color: "green-text-gradient" },
      { name: "Clerk", color: "pink-text-gradient" },
      { name: "MongoDB", color: "white-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/AyyanYe/Flow-Management-SaaS",
  },
  {
    name: "Prometheus, Grafana & Loki Monitoring",
    description:
      "Server monitoring setup with Prometheus, Grafana, and Loki. Express.js server with metrics and load simulation; Docker Compose for replication on larger deployments.",
    tags: [
      { name: "Express", color: "blue-text-gradient" },
      { name: "Prometheus", color: "green-text-gradient" },
      { name: "Grafana", color: "pink-text-gradient" },
      { name: "Docker", color: "white-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/AyyanYe/Prometheus-Grafana-and-Loki-Server-Monitoring-Project",
  },
  {
    name: "Social Media MERN Backend",
    description:
      "Personal project around social media: likes, comments, subscriptions, user interactions. Complex database with files and images; backend-focused.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: web,
    source_code_link: "https://github.com/AyyanYe/Social-Media-MERN-Website",
  },
];
