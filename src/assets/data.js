import momo from "./profile/momo.png";
import conway_3D from "./projects/conway_3D.png";
import conway_snail from "./projects/conway_snail.png";
import edna from "./projects/edna.png";
import greedy_cube from "./projects/greedy_cube.png";
import medtracker from "./projects/medtracker.png";
import otetris from "./projects/otetris.png";

import terrain_world from "./projects/terrain_world.png";

import hyperloop from "./projects/hyperloop_sc.png";
import panic from "./projects/PP_2.png";
import skitters from "./projects/skitters_sc.png";
import terrible_tiles from "./projects/tt_sc2.png";
import plan_bee from "./projects/pb_2.png";

// import blank from "./projects/.png";
// {
//   title: "",
//   img: ,
//   description:
//     "",
// },

export const projects = [
  {
    title: "Hyper Loop",
    img: hyperloop,
    description: "Synthwave racing game made for the Ludum Dare 47 game jam.",
  },
  {
    title: "Panic Painter",
    img: panic,
    description:
      "Group mobile game made for the CS 4152 game development class. ",
  },
  {
    title: "Skitters at Night",
    img: skitters,
    description:
      "Audio horror game where you must escape an unseen horror using sound alone. Made in Unity.",
  },

  {
    title: "Terrible Tiles",
    img: terrible_tiles,
    description:
      "Arcade game about gathering golden tiles before they fall. Made with Lua.",
  },
  {
    title: "Plan Bee",
    img: plan_bee,
    description:
      "Group game jam entry about a bear seekng to rescue the queen bee. Won second place for visuals.",
  },
];

export const otherProjects = [
  {
    title: "Conway and the Snail",
    img: conway_snail,
    description:
      "Researched linguistic change theory and simulated Japanese historical linguistics with cellular automata.",
  },
  {
    title: "Terrain World",
    img: terrain_world,
    description:
      "A shader pipeline and procedural terrain simulation made in OpenGL.",
  },

  {
    title: "E.D.N.A. Authorization System",
    img: edna,
    description:
      "Prototyped a VR banking interface in Unity in 48 hours, with ML signature recognition via Microsoft Azure",
  },
  {
    title: "OTetris",
    img: otetris,
    description:
      "Developed a Tetris clone with a genetic programming AI using OCaml and JS",
  },
  {
    title: "Medtracker",
    img: medtracker,
    description:
      "Collaborated to build a crossplatform gamified prescription tracking app in 72 hours with Bootstrap and JS",
  },
  {
    title: "Greedy Cube",
    img: greedy_cube,
    description:
      "Designed a platformer game with parallax camera and physics based movement in Unity and C#",
  },
  {
    title: "Conway's Game of Life 3D",
    img: conway_3D,
    description:
      "Modified a cellular automata algorithm to function in 3 dimensions via Processing3D and Java",
  },
];
