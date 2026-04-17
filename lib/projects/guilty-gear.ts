import type { Project } from "./types";

export const guiltyGear: Project = {
  id: "guilty-gear",
  title: "Guilty Gear Strive - Switch Edition",
  year: "2023-2024",
  team: "Mighty Build and Test",
  role: "Automation Engineer",
  category: "professional",
  image: "/guilty-gear/guilty-gear-title.png",
  imagePosition: "top",
  description: `
Created a performance capture and reporting tool and automated test cases for QA .
  `,
  tags: ["Test Automation", "Unreal", "C++", "C#", "QA Tooling", "Performance Tooling"],
  links: [
    {
      label: "Website",
      url: "https://www.guiltygear.com/ggst/sw/en/",
      type: "external",
    },
  ],
  fullDescription: `
Guilty Gear Strive Switch Edition required significant enhancement to peformance to bring the game to 60 fps.
I worked as an Automation Engineer at Mighty Build and Test to develop a performance capture tool, along with automated test cases for QA.
  `,
  sections: [
    {
      title: "Performance Capture",
      body: `
Performance capture was a new feature I was delighted to help bring to Mighty's TestBot framework. I worked with one other developer to create an efficient and low overhead performance capture toolset.
The features I worked on were:

- Efficient framerate capture and data management
- FPS statistics for use in client reports, including 1% and 0.1% low over sessions and segments
- Markers for sessions and segments, with intuitive (and documented) methods for other engineers to interface with

This tied into features other engineers developed to automatically test performance for each character and stage combination, along with character abilities.
With well placed performance markers, we were able to flag any performance shortfalls to the developers.
      `,
      image: "/guilty-gear/guilty-gear-explosions.jpg",
      imageAlt: "Lego Party gameplay",
    },
    {
      title: "Test Automation",
      body: `
Automating menu navigation was a challenge that involved knowing where we were at any time.
This arose by the way UI elements were presented on screen, so we needed clever ways to identify what was visible and what was selected, and it needed to be robust so our test cases could be deterministic.
My role was to find unique UI elements and use them to automate main menu navigation through options, galleries, and character and stage selection.
      `,
      image: "/guilty-gear/guilty-gear-gallery.jpg",
      imageAlt: "",
    },
  ],
};
