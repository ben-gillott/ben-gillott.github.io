import whiteout from "./experience/whiteout.png";
import kitware from "./experience/kitware.png";
import cornell from "./experience/cornell.gif";
import capitalone from "./experience/capitalone.png";

// {
//   title: "",
//   date: "",
//   img: "",
//   role: "",
//   bullets:
//    [
// "",
//  ""
// ],
//   link: "",
//   src: "",
//   read: "",
// },

export const experiences = [
  {
    title: "Whiteout Solutions",
    date: "Oct '21 - Present",
    img: whiteout,
    role: "Software Developer",
    bullets: [
      "Constructed computer vision tools and processing pipeline for wetland conservation analysis using Java and Spring.",
      "Developed a distributed file management system using Java that saved terabytes of storage space and accelerated testing.",
      "Built interactive VR simulations of LIDAR scans using C# and Unity.",
      "Prototyped a mesh volume calculator using React, three.js, Spring and MySQL.",
    ],
    link: "https://whiteoutsolutions.com",
  },
  {
    title: "Kitware",
    date: "May '21 - Aug '21",
    img: kitware,
    role: "Computer Graphics R&D Intern",
    bullets: [
      "Spearheaded a WebApp for military-grade simulations using React.",
      "Collaborated on a scanner to import complex operation details from PDFs.",
    ],
    link: "https://www.kitware.com/",
  },
  {
    title: "Cornell CAPRA",
    date: "Jun '19 - Dec '20",
    img: cornell,
    role: "Research Assistant",
    bullets: [
      "Wrote GLSL shaders that were featured in a published paper.",
      "Ported a novel graphics language into Unity to assess its commercial potential.",
      "Created a game engine from scratch as the first major test of the novel language.",
    ],
    link: "https://capra.cs.cornell.edu",
    read: "https://capra.cs.cornell.edu/research/gator/",
  },

  {
    title: "Capital One",
    date: "May '20 - Aug '20",
    img: capitalone,
    role: "Software Engineering Intern",
    bullets: [
      "Developed an Angular tool to remediate faulty customer data, reducing labor by 90%.",
    ],
  },
  {
    title: "Cornell CS 2112",
    date: "Aug '19 - Jan '20",
    img: cornell,
    role: "Teaching Assistant",
    bullets: [
      "Held office hours for honors object oriented programming and helped lead a weekly 40 student lab.",
    ],
    link: "https://www.cs.cornell.edu/courses/cs2112/2018fa/",
  },
];
