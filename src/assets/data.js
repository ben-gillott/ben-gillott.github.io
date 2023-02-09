import momo from "./profile/momo.png";
import conway_3D from "./projects/conway_3D.png";
import conway_snail from "./projects/conway_snail.png";
import edna from "./projects/edna.png";
import greedy_cube from "./projects/greedy_cube.png";
import medtracker from "./projects/medtracker.png";
import otetris from "./projects/otetris.png";
import terrible_tiles from "./projects/terrible_tiles.png";
import terrain_world from "./projects/terrain_world.png";

export const projects = [
  {
    id: 2,
    title: "Terrible Tiles",
    img: terrible_tiles,
    description:
      "Created an indie game using Lua, and published to Itch.io with 40 downloads",
  },
  {
    id: 3,
    title: "Greedy Cube",
    img: greedy_cube,
    description:
      "Designed a platformer game with parallax camera and physics based movement in Unity and C#",
  },
  {
    id: 4,
    title: "Terrain World",
    img: terrain_world,
    description:
      "Communicated with a small team to develop a procedural terrain simulation, with a game engine and shader pipeline built in OpenGL and GLSL (~3000 LOC)",
  },
  {
    id: 5,
    title: "Conway and the Snail",
    img: conway_snail,
    description:
      "Researched linguistic change theory and simulated Japanese historical linguistics with cellular automata",
  },
  {
    id: 6,
    title: "E.D.N.A. Authorization System",
    img: edna,
    description:
      "Prototyped a VR banking interface in Unity in 48 hours, with ML signature recognition via Microsoft Azure",
  },
  {
    id: 7,
    title: "OTetris",
    img: otetris,
    description:
      "Developed a Tetris clone with a genetic programming AI using OCaml and JS",
  },
  {
    id: 8,
    title: "Medtracker",
    img: medtracker,
    description:
      "Collaborated to build a crossplatform gamified prescription tracking app in 72 hours with Bootstrap and JS",
  },
  {
    id: 9,
    title: "Conway's Game of Life 3D",
    img: conway_3D,
    description:
      "Modified a cellular automata algorithm to function in 3 dimensions via Processing3D and Java",
  },
];
