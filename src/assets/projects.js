import conway_3D from "./projects/conway_3D.png";
import conway_snail from "./projects/conway_snail.png";
import edna from "./projects/edna.png";
// import greedy_cube from "./projects/greedy_cube.png";
// import medtracker from "./projects/medtracker.png";
import otetris from "./projects/otetris.png";
import terrain_world from "./projects/terrain_world.png";

import hyperloop from "./projects/hyperloop_sc.png";
import panic from "./projects/PP_2-transformed.png";
import skitters from "./projects/skitters_sc.png";
import terrible_tiles from "./projects/tt_sc2.png";
import plan_bee from "./projects/pb_2.png";

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

export const projects = [
  {
    title: "Panic Painter",
    highlight: true,
    img: panic,
    bullets: [
      "Casual mobile game made in Walker White’s CS 4152 advanced game development class.",
      "I implemented basic game code, and added the signature paint splatter shader by modifying the custom C# game engine’s shading pipeline.",
    ],
    src: "https://github.com/foxhatleo/panic-painter",
  },
  {
    title: "Hyper Loop",
    highlight: true,
    img: hyperloop,
    link: "https://cloudlight-games.itch.io/hyper-loop",
    src:"https://github.com/ben-gillott/HyperLoop",
    bullets: [
      "Synthwave-inspired racing game I made as a solo participant in the Ludum Dare 47 game jam. The focus of this project was on the lighting and environment, which I implemented using the Unity shader graph.",
    ],
  },
  {
    title: "Skitters",
    img: skitters,
    link: "https://cloudlight-games.itch.io/skitters",
    bullets: [
      "Audio horror game I made for a monthly game jam. For this project, I used moody and minimal visuals to create a horror aesthetic. I created the main mechanic of distance-based audio using spatial blending.",
    ],
  },
  {
    title: "Terrible Tiles",
    highlight: true,
    img: terrible_tiles,
    src:"https://github.com/ben-gillott/terrible-tiles",
    link: "https://cloudlight-games.itch.io/terrible-tiles",
    bullets: [
      "Arcade-style game about gathering tiles and avoiding enemies, made in Lua and the LOVE2D engine. The key element of this game was managing difficulty balance.",
    ],
  },
  {
    title: "Plan Bee",
    img: plan_bee,
    link: "https://itch.io/jam/artcenter-game-jam/rate/974884",
    bullets: [
      "Group entry for the ArtCenter game jam, made in Unity in 48 hours. I assisted artists with the asset pipeline and managed animation code. We won second place for visuals, and fifth overall.",
    ],
  },
  {
    title: "Conway's Snail",
    img: conway_snail,
    src:"https://github.com/ben-gillott/Conway-and-the-Snail",
    link:"https://docs.google.com/document/d/1Zf0RNVMPXcPdfn1xu35ptdfnep2i-76AZljMqFJ_EYY",

    bullets: [
      "Researched linguistic change theory and simulated Japanese historical linguistics with cellular automata.",
    ],
  },
  {
    title: "Terrain World",
    img: terrain_world,
    src:"https://github.com/ben-gillott/terrain-world",
    bullets: [
      "A shader pipeline and procedural terrain simulation made in OpenGL.",
    ],
  },
  {
    title: "E.D.N.A. Authorization System",
    img: edna,
    src:"https://github.com/ben-gillott/SES_EASy",
    bullets: [
      "Prototyped a VR banking interface in Unity in 48 hours, with ML signature recognition via Microsoft Azure.",
    ],
  },
  {
    title: "OTetris",
    img: otetris,
    bullets: [
      "Developed a Tetris clone with a genetic programming AI using OCaml and JS.",
    ],
  },
  // {
  //   title: "Medtracker",
  //   img: medtracker,
  //   bullets: [
  //     "Collaborated to build a crossplatform gamified prescription tracking app in 72 hours with Bootstrap and JS.",
  //   ],
  // },
  // {
  //   title: "Greedy Cube",
  //   img: greedy_cube,
  //   bullets: [
  //     "Designed a platformer game with parallax camera and physics-based movement in Unity and C#.",
  //   ],
  // },
  {
    title: "Conway's Game of Life 3D",
    img: conway_3D,
    bullets: [
      "Modified a cellular automata algorithm to function in 3 dimensions via Processing3D and Java.",
    ],
  },
];
