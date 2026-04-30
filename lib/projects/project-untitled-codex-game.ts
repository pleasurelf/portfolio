import type { Project } from "./types";

export const untitledCodexGame: Project =
    {
        id: "project-untitled-codex-game",
        title: "Untitled Codex Game",
        year: "2020",
        team: "SamJenny, RMIT Prototype",
        role: "Game Developer",
        category: "personal",
        image: "/untitled-codex-game/untitled-codex-game-still1.png",
        description:
            "A UI alien discovery slice that follows a big pharma contractor's short expedition on an unexplored asteroid.",
        tags: ["Unity", "C#", "Procreate", "Notion"],
        links: [
            {
                label: "Play on Itch.io",
                url: "https://pleasureelf.itch.io/untitled-codex-game",
                type: "external",
            },
        ],

        fullDescription: `
        A contract expeditioneer for the massive pharmaceutical company Nostrom, is sent to the asteroid APRI-0519 to extract company property. On her mission, Nova becomes lost and discovers strange creatures that are most definitely unnaturally deformed.
        
        Doomsday Ball was a four-week long prototype that I worked on as a designer, programmer, producer and writer, and it one of my favourite, albeit unfinished, stories.
    `,

        sections: [
            {
                title: "Story",
                image: "/untitled-codex-game/untitled-codex-game-still3.png",
                imageAlt: "Billboarding sign-in couple",
                body: `
                ... descrition of intent
                
                Uncover the Nostrom secrets which lead to Nova's disappearance by reading her last entries in her company-issued tablet. Last seen on anomoly asteroid APRI-0519.
            `,
            },

            {
                title: "Roles & Responsibilities",
                body: `
                Game Design

                - Concept themes, mechanics and entries.

                Production

                - Creation and management of checkpoint data sheet, hosting stand-ups, and presentations for progress updates.

                Programming

                - Creating tablet UI and navigation. 

                Art

                - 2D asset for the tablet, stickers and map.

                Narrative

                - Writing character dialogue, journal and creature entries.
            `,
            },
        ],
    };
