// import type { Project } from "./types";
//
// export const clumsyBat: Project = {
//   id: "clumsy-bat",
//   title: "Clumsy Bat",
//   year: "2016",
//   team: "Brave Llama",
//   role: "Programmer",
//   category: "personal",
//   image: "/images/clumsy-bat/clumsy-splash.png",
//   description: `
// My first shipped mobile game - a 2D side-scrolling avoidance game with abilities, obstacles, and bosses.
// I built a node-based AI editor from scratch using the Unity Editor API, inspired by Unreal's Blueprint system.
//   `,
//   tags: ["Unity", "C#", "Mobile", "Google Play"],
//   links: [
//     {
//       label: "GitHub",
//       url: "https://github.com/Aspekt1024/ClumsyBat",
//       type: "github",
//     },
//   ],
//   fullDescription:`
// Clumsy Bat is a 2D side-scrolling avoidance game and my first shipped mobile title.
// Players navigate a bat through perilous caves filled with spikes, vision-impairing mushrooms, and swinging spiders - collecting moth essence and solving puzzles that unlock new abilities.
//
// This project was my first complete end-to-end development experience, covering everything from concept through to play-testing and deployment on Google Play.
// Unfortunately, as Google requires the full home address of developers to be publicly visible, this has since been removed from the Google Play store.
//   `,
//   sections: [
//     {
//       title: "Node-based AI Editor",
//       body: `
// Clumsy Bat involves periodic boss encounters with pseudo-scripted behaviour. Inspired by the Unreal Engine 4 Blueprint system, the node-based AI editor was built from scratch using the Unity Editor API.
//
// The editor uses three block types: Green (sub-processes containing grouped logic), Blue (functional blocks that perform a specific action), and Purple (event blocks that trigger or react to an event). Active blocks are highlighted during play, making debugging significantly easier.
//       `.trim(),
//       image: "/images/clumsy-bat/cbNodeEditor.png",
//       imageAlt: "Node-based AI editor showing boss-fight block types",
//       youtubeBelow: "Ll9lIoFRKs8",
//     },
//     {
//       title: "2D Level Editor",
//       body: `
// Clumsy Bat required a way to easily produce and test levels. The level editor is a customised Scene View that listens for key input, making it straightforward to add to the cave at any point, modify cave pieces to predefined shapes, place collectibles and obstacles with adjustable attributes, show telegraphs (e.g. where a spike will land), and add triggerable events.
//
// This tooling allowed rapid level iteration without requiring a programmer for every change.
//       `.trim(),
//       youtubeBelow: "o3DdNMrAQzc",
//     },
//   ],
// };
