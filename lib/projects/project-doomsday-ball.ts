import type { Project } from "./types";

export const doomsdayBall: Project = 
{
    id: "project-doomsday-ball",
    title: "Doomsday Ball",
    year: "2020",
    team: "GDS1, RMIT Prototype",
    role: "Game Developer",
    category: "personal",
    image: "/doomsday-ball/doomsday-ball-cover.png",
    description:
        "A silly mystery narrative about Frankie, a sweet lizard boy who rocked up late to prom.",
    tags: ["Unity", "C#", "Procreate", "Notion"],
    links: [
        {
            label: "Play on Itch.io",
            url: "https://pleasureelf.itch.io/doomsday-game",
            type: "external",
        },
    ],
    
    fullDescription: `
        Have a blast from the past at a 1950's prom that seems to have too few attendees... Interact with the remnants left behind to discover where the others went, and why you've arrived just a little too late.
        
        Doomsday Ball was a four-week long prototype that I worked on as a designer, programmer, producer and writer, and it one of my favourite, albeit unfinished, stories.
    `,
    
    sections: [
        {
            title: "Story",
            image: "/doomsday-ball/doomsday-ball-hidinggirl1.png",
            imageAlt: "Billboarding sign-in couple",
            body: `
                Doomsday Ball was an idea to explore illusion, devastation and naivety. Inspired by the illusionary level design in Luigi's Mansion 3, we wanted to infuse a playful environment with a serious theme; the doomsday, and experiment with what would probably be an unlikely event...
            `,
        },

        {
            title: "Frankie",
            image: "/doomsday-ball/doomsday-ball-FrankieGetsHisPictureTaken.gif",
            imageAlt: "Billboarding sign-in couple",
            body: `
                ...
            `,
        },

        {
            title: "Bullying",
            image: "/doomsday-ball/doomsday-ball-FrankieOverthrowsEnemies.gif",
            imageAlt: "Billboarding sign-in couple",
            body: `
                ...
            `,
        },

        {
            title: "Level Design",
            image: "/doomsday-ball/doomsday-ball-stagesofgameplay_planning.PNG",
            imageAlt: "Floor plan concept",
            body: `
            A basic floor plan was created to simplify the outline the main 'acts' of the game that we would focus on in this story. The story being based within an enclosed space was to help heighten the feeling of isolation and loneliness in what should have been a bussin environment.
            `,
        },

        {
            title: "",
            image: "/doomsday-ball/doomsday-ball-floorplan.jpeg",
            imageAlt: "Floor plan concept",
            body: `
            TODO
            
            some more info on the level design, maybe lighting, sounds...
            `,
        },

        {
            title: "Billboarding",
            image: "/doomsday-ball/doomsday-ball-basketballmovement.gif",
            imageAlt: "Floor plan concept",
            body: `
            TODO
            
            some more info on the level design, maybe lighting, sounds...
            `,
        },

        {
            title: "  ",
            image: "/doomsday-ball/doomsday-ball-signInCutouts.gif",
            imageAlt: "Floor plan concept",
            body: `
            TODO
            
            some more info on the level design, maybe lighting, sounds...
            `,
        },

        {
            title: "Moments",
            image: "/doomsday-ball/doomsday-ball-FrankieAndTheUFO.gif",
            imageAlt: "Floor plan concept",
            body: `
            TODO
            
            some more info on the level design, maybe lighting, sounds...
            `,
        },
        
        {
            title: "   ",
            image: "/doomsday-ball/doomsday-ball-spaceshipsdontdothat_narrative.gif",
            imageAlt: "Floor plan concept",
            body: `
            TODO
            
            some more info on the level design, maybe lighting, sounds...
            `,
        },

        {
            title: "Roles & Responsibilities",
            body: `
                Game Design

                - Concept themes, events, mechanics and characters.

                Level Design

                - Grey-boxing the gymnasium and implementing assets.

                Production

                - Creation and management of checkpoint data sheet, hosting stand-ups, and presentations for progress updates.

                Programming

                - Creating first-person character and camera movement, billboarding prop behaviour, event triggers and dialogue UI. 

                Animation

                - Creating animations using Mixamo and Unity Animator for the protagonist and environment FX.

                Narrative

                - Writing character dialogue for events and interactions.
            `,
        },
    ],
};
