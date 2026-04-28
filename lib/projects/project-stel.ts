import type { Project } from "./types";

export const stel: Project = {
    id: "project-stel",
    title: "Stel",
    year: "2020",
    team: "Cool Beans, RMIT Capstone Project",
    role: "Game Developer",
    category: "personal",
    image: "/stel/stel-websiteCoverImage.png",
// project page mini-description
    description:
        "An icy, puzzle-lite, mystery narrative about a boy learning a tough lesson in growing up.",
    tags: ["Unity", "C#", "Adobe PhotoShop", "Maya", "Substance Painter", "Mixamo"],
    genre: ["Adventure"],
    links: [
        {
            label: "Play on Itch.io",
            url: "https://pleasureelf.itch.io/stel",
            type: "external",
        },
    ],
    
// overview on-page description
    fullDescription: 
`
Stel seeks help from a local witch in order to cure his ailing papa, and in return for the help he is tasked to retrieve an item for her. The urgency of helping his papa might be blinding the boy from the witch's true motive for his journey.

I worked on Stel in a multi-disciplinary role alongside designer and artist Keira, with additional support from graphics programmers Harry and Ben.
  `,
    
    sections: [
        {
            title: "ACME Audience Lab",
            body: 
    `
    Stel was selected to preview at the ACME Audience Lab 20-21, and we asked to create some introduction videos to exhibit on the ACME site.
      `,
            videoBelow: "/stel/stel-introduction.mp4",
        },
        {
            title: "Setting",
            body: 
`
The environment was inspired by snowy rural towns across Scandinavia, with a strong focus on old Nordic design. We were interested in creating an almost otherworldly backdrop by using natural, non-synthetic materials, traditional construction and props, blended with subtle elements of magic and folk-fantasy.
      `,
            image: "/stel/stel-icelandStill.png",
            imageAlt: "Stel running through Iseland.",
        },
        {
            title: "",
            body:
                `
Stel was initially planned as a mild-horror narrative, with the environment being unforgiving and spooky, as a visual representation of the boy's fear of the unknown. I believe we pivoted because we ultimately wanted a happy ending for Stel, and that it would've detracted from the message of his story if left bleak.
      `,
            image: "/stel/stel-deerCutsceneStill.png",
            imageAlt: "Stel has skinned the deer",
        },
        {
            title: "Design",
            body: 
`
Movement is intended to be fun, taking advantage of an unsteady, yet speedy sleigh to encourage exploration, and optimising the opportunity to run into objectives in the environment. It perhaps felt like a "safe" decision to make when I realised that I was struggling with this aspect of design.
`,
            image: "/stel/stel-sleighingThroughTownsStill.png",
            imageAlt: "Stel sleighing through the town.",
        },
        {
            title: " ",
            body:
                `
The visual and audio cues of the witch's circle were implemented to be more stimulating than other effects in the environment, to reinforce the importance of the location to the story before Stel travelled onward to retrieve the witch's mysterious item.
`,
            image: "/stel/stel-meetingTheWitchStill2.png",
            imageAlt: "Stel approaching the witch.",
        },
        {
            title: "  ",
            body:
                `
A lack of confidence in the clarity of progression led to designing a circular "track" which could organically lead the boy, further enforced by blocking the paths already visited. So while we sought after an enjoyable traversal experience, the track removed alleviated concern of dwelling too long, or becoming bored and confused.

Other cues were used to guide Stel through the winterscape, such as animations for key events, placement of the leaves subtly pointing toward the intended progression direction, items highlighting when within proximity to the player, as well as the story-points being marked on the witch's map- which, in hindsight, felt a very untrusting and "babying", and is a key aspect I would've liked to have revisited.
`,
            image: "/stel/stel-witchMap.png",
            imageAlt: "Witch's map.",
        },
        {
            title: "   ",
            body:
                `
Notification of progression using short cutscenes were used to validate the completion of an objective, and would focus on the illumination of the runes within the stones, adding to the mysticism of the world we were trying to portray.
`,
            image: "/stel/stel-firepitAnimation.gif",
            imageAlt: "Run being revealed through the ice.",
        },
        {
            title: "The Boy",
            body:
                `
Stel was aptly after the fantastic Swedish actor Stellan Skarsgaard, for not really any good reason... It did, however, sound bold, yet playful, which we believed might help to imply courage and naivety. The design of the character was however did not draw from Skarsgaard, and was done much later in development, and may have been moulded more after the story, than it of him.

Fleshing-out the character design was a goal that unfortunately got away, however the personality of, and attachment to, Stel, felt less critical than the message we wanted to share. If I were to build upon the character meaningfully, I would've loved to explore the culture Stel belonged to through colour and textiles. 
`,
            image: "/stel/stel-characterSideProfile.png",
            imageAlt: "Stel character side profile 3D model.",
        },
        {
            title: "    ",
            body:
                `
The boy's intended design drew heavily from historical Sami and Inuit attire, keeping in mind to avoid misappropriating any culture. The mask was designed to be a prominent part of Stel's silhouette that implied more obviously that the world was folk and magic-adjacent, and metaphorically, how a child perceives the world through a lens (mask).

Admittedly, the final character design may have drawn more from Cal Kestis, especially as I was concurrently playing Fallen Order, and I was struggling with the task. This neutral, "safe" silhouette placeholder remained in-game as a result, and despite having a story-telling purpose for the mask, funnily enough, the mask isn't actually visible from the player's perspective.
`,
            image: "/stel/stel-characterMockup.png",
            imageAlt: "Stel concepts.",
        },
        {
            title: "Moments",
            body:
                `
Creating small moments in the environment was a result of being a little burned out on this project, while wanting to maintain a presence in development. While spending tens of hours every week, literally moving mountains (the assets), I probably pretty accidentally found some fun creating little areas that might tell more of the story than we had the bandwidth to explore.
`,
            image: "/stel/stel-meetingTheOrcaStill.png",
            imageAlt: "Stel meeting the orca.",
        },
        {
            title: "     ",
            body:
                `
                // TODO more
One of my favourite moments is the miniature elf town that lives just outside of the witch's cove.
`,
            image: "/stel/stel-littleVillageInALittleVillage.png",
            imageAlt: "Stel looking at the tiny elf village.",
        },
        
        // roles descriptions
        {
            title: "Roles & Responsibilities",
            body:
                `
Game Design

- Concept themes, events, mechanics and characters. Researching nomadic cultures and customs.

Level Design

- Grey-boxing and building levels, implementing assets, shaders, PPFX and sound design.

Art

- Designing and modelling the protagonist, traversal instruments, orca, and various environment assets.

Production

- Creation and management of checkpoint data sheet, hosting stand-ups, presentations for progress updates, and regular playtesting.

Programming

- Creating basic third-person character movement, camera manipulation (+ Cinemachine), event triggers and dialogue UI. 

Animation

- Creating animations using Mixamo and Unity Animator for the protagonist and environment FX.

Narrative

- World building and assisting Keira with dialogue writing.
`,
            // image: "/stel/stel-sleighingThroughTownsStill.png",
            // imageAlt: "Stel sleighing through the town.",
        },
    ],
};