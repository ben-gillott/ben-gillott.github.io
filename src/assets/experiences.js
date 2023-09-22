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
      "Deliver computer vision tools for seabird conservation enabling a multi-million dollar state contract.",
      "Optimize ML feature recognition and processing speed in Java to improve cargo ship fuel efficiency.",
      "Pioneer a cross-platform file system in Java to save TBs of server storage space and accelerate user testing.",
      "Prototype a VR simulation of a point cloud using an Octree to achieve a high frame rate on billions of points in C# and C++.",
      "Independently create a user-friendly tool in React, Spring, and MySQL to accurately calculate biomass volumes.",
    ],
    link: "https://whiteoutsolutions.com",
  },
  {
    title: "Kitware",
    date: "May '21 - Aug '21",
    img: kitware,
    role: "Computer Graphics R&D Intern",
    bullets: ["Utilized CV and NLP methods to securely interpret complex documents.", "Produced a WebApp critical for military simulation development using React."],
    link: "https://www.kitware.com/",
  },
  {
    title: "Cornell CAPRA",
    date: "Jun '19 - Dec '20",
    img: cornell,
    role: "Research Assistant",
    bullets: ["Ported novel graphics type system GATOR into the Unity shader pipeline to eliminate geometry transformation errors.", "Wrote shaders for a published paper to show subtle graphics errors in GLSL.", "Collaborated to make a game engine using the GATOR type system and C."],
    link: "https://capra.cs.cornell.edu",
    read: "https://capra.cs.cornell.edu/research/gator/",
  },

  {
    title: "Capital One",
    date: "May '20 - Aug '20",
    img: capitalone,
    role: "Software Engineering Intern",
    bullets: ["Prototyped a VR banking interface with ML signature recognition using Azure.", "Built a WebApp using Angular and Spring that reduced customer data remediation time by 90%."],
  },
  {
    title: "Cornell CS 2112",
    date: "Aug '19 - Jan '20",
    img: cornell,
    role: "Teaching Assistant",
    bullets: ["Held office hours for honors object oriented programming and helped lead a weekly 40 student lab."],
    link: "https://www.cs.cornell.edu/courses/cs2112/2018fa/",
  },
];
