import type { Project } from "./types";

export const untitledCodexGame: Project = {
    id: "project-untitled-codex-game",
    title: "Untitled Codex Game",
    year: "2020",
    team: "RMIT Games Design Prototype",
    role: "Game Developer",
    category: "personal",
    image: "/",
    description:
        "",
    tags: ["Unity", "C#", "Procreate",],
    genre: ["Mystery", "Narrative"],
    links: [
        {
            label: "Play",
            url: "https://pleasureelf.itch.io/untitled-codex-game",
            type: "external",
        },
    ],
    fullDescription: `
some description
  `,
    sections: [
        {
            title: "The Game",
            body: `
some description
      `,
            image: "/stel/stel-gameplay-image-1.png",
            imageAlt: "Stel running through town",
        },
        {
            title: "dfgdfg",
            body: `
some other description
            `,
            image: "/stel/stel-gameplay-image-2.png",
            imageAlt: "Stel sleighing through town",
        },
        {
            title: "dfgsdfg",
            body: `dfgdfgdfg`,
            image: "/stel/stel-gameplay-image-3.png",
            imageAlt: "Stel sleighing through town",
        },
    ],
};
