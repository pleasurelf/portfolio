import type { Project } from "./types";

export const dreamlightValley: Project = {
  id: "dreamlight-valley",
  title: "Disney Dreamlight Valley",
  year: "2024",
  team: "Mighty Build and Test",
  role: "Automation Engineer",
  category: "professional",
  image: "/dreamlight/dreamlight-title2.png",
  imagePosition: "top",
  description: `
A proof of concept in auto navigation and quest completion that led to QA automation in the AAA RPG space.
  `,
  tags: ["Test Automation", "Unity", "C#", "Navigation"],
  links: [
    {
      label: "Steam",
      url: "https://store.steampowered.com/app/1401590/Disney_Dreamlight_Valley/",
      type: "external",
    },
    {
      label: "Website",
      url: "https://disneydreamlightvalley.com/",
      type: "external",
    },
  ],
  fullDescription: `
I was a senior automation engineer working with Mighty Build and Test to develop a proof of concept for automating navigation and quest completion in Disney Dreamlight Valley.
The technology we developed went on to service games in the AAA RPG space.

My primary role was to assist and mentor junior and mid-level automation engineers in developing robust architecture that could scale.
  `,
  sections: [
    {
      title: "Auto Navigation",
      body: `
While navigating in a 3D world is a solved problem in the 3d space, we didn't have direct access to all components needed for automatic navigation.
We needed to develop our own navigation map during runtime, which needed to identify key quest components and handle pathfinding.
      `,
      image: "/dreamlight/dreamlight-navigation.jpg",
      imageAlt: "Lego Party gameplay",
    },
    {
      title: "Quest Automation",
      body: `
Layered state machines were a great solution to tracking where in the quest we were.
I assisted the team in identifying core components in the codebase, and developed systems to track state and determine where we needed to go next.

The solution used state machines to perform actions such as going to a location, interacting with an object, and navigating through dialogue.
On the top of this was a layer that gave personality to the way we went through quests, as part of our goal in QA automation was to check edge cases and randomised gameplay.
      `,
      image: "/dreamlight/dreamlight-questing.jpg",
      imageAlt: "",
    },
  ],
};
