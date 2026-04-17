import type { Project } from "./types";

export const fitbitArcade: Project = {
  id: "fitbit-arcade",
  title: "Fitbit Arcade Games",
  year: "2023-2024",
  team: "Google / Mighty Games / Mighty Build and Test",
  role: "Automation Engineer",
  category: "professional",
  image: "/fitbit/fitbit-arcade-watch.png",
  description: `
QA automation engineering across a suite of games for the Fitbit Arcade on the Google Fitbit Ace.
Automated testing on Otal's Secret, Galaxy Rangers and Spooky Sanctuary, while mentoring two colleagues on other titles in the suite.
  `,
  tags: ["C#", "Unity", "Test Automation", "QA Tooling"],
  links: [
    {
      label: "Fitbit Arcade",
      url: "https://play.google.com/store/apps/details?id=com.google.android.apps.fitbit.p11.gamepicker&hl=en_AU",
      type: "external",
    },
  ],
  fullDescription: `
Worked as an Automation Engineer on a suite of games for the Fitbit Arcade platform for the Google Fitbit Ace.
My focus spanned three titles, building automated test coverage across each. The goal was to create test bots that could complete the game, and find
and report on any issues encountered along the way.

Alongside the technical work, I mentored two colleagues working on other games in the same suite.
  `,
  sections: [
    {
      title: "Otal's Secret",
      body: `
Otal's Secret involves a sequence of puzzle boxes, with a narrative in between each stage.
My role was to create a test bot that reliably got through all levels, with some randomised input for test coverage.

This involved simulating inputs that would be expected of a smart watch, including gestures, light, wind and temperature.
The aim was primarily to solve puzzles by emulating what users would do with input, forming a "golden path" that proves the game can be completed between builds.
We also wanted to catch outlying issues, and randomised input was also necessary to find edge cases.

We had up to 9 game instances running 24/7, each with a variant of the bot code. These bots were able to alert QA and the dev team if ever we got stuck, or encountered any errors along the way.
      `,
      image: "/fitbit/fitbit-arcade-secret.png",
    },
    {
      title: "Galaxy Rangers",
      body: `
Galaxy Rangers involves taking over planets and winning space battles.
My role was to assist completing a test bot that could navigate through dialogue, menus and missions, discovering planets in the system and conquering them, or intentionally losing.

The key challenge was to identify where in the game we were at any given time, as many screens had the same components and text, but depending on the game state, only certain actions were possible.
We always wanted to be lean with navigating through the game, so we could adapt to developer changes, and keep with pseudo-randomised inputs that would catch unsuspecting bugs.
      `,
      image: "/fitbit/fitbit-arcade-galaxy.png",
    },
    {
      title: "Spooky Sanctuary",
      body: `
Spooky Sanctuary is a haunted house ghost hunt in a maze of winding pathways. Primarily, my role was to assist junior developers in how to get the test bots to navigate the play space using
common algorithms such as A* Pathfinding and state machines as the bot discovered the map and fulfilled objectives.

Once again, the challenge was to keep things lean while also tailoring a bot that could complete the game.
      `,
      image: "/fitbit/fitbit-arcade-spooky.png",
    },
  ],
};
