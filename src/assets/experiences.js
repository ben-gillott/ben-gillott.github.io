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
      "Constructed computer vision tools for seabird conservation that enabled the company to land a two-million dollar state contract.",
      "Pioneered an innovative cross-platform file system using Java that saved terabytes of storage space.",
      "Prototyped an interactive VR simulation in Unity and C# to view a town model at high resolution with optimal frame rate.",
      "Created a C++ tool to generate detailed 3D models of ski resort snow cover.",
    ],
    link: "https://whiteoutsolutions.com",
    src: "",
    read: "",
  },
  {
    title: "Kitware",
    date: "May '21 - Aug '21",
    img: kitware,
    role: "Computer Graphics R&D Intern",
    bullets: [
      "Spearheaded a WebApp critical for military-grade simulation development.",
      "Collaborated on a PDF scanner that accurately imported operation details.",
    ],
    link: "https://www.kitware.com/",
    src: "",
    read: "",
  },
  {
    title: "Cornell CAPRA",
    date: "Jun '19 - Dec '20",
    img: cornell,
    role: "Research Assistant",
    bullets: [
      "Ported a novel graphics language into Unity to assess its commercial potential.",
      "Built a game engine from scratch as the first major test of the novel language.",
      "Wrote GLSL shaders that were featured in a published paper.",
    ],
    link: "https://capra.cs.cornell.edu",
    src: "",
    read: "https://capra.cs.cornell.edu/research/gator/",
  },

  {
    title: "Capital One",
    date: "May '20 - Aug '20",
    img: capitalone,
    role: "Software Engineering Intern",
    bullets: [
      "Developed an Angular tool to remediate customer data, reducing labor by 90%.",
    ],
    link: "",
    src: "",
    read: "",
  },
];
