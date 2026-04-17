import type { Project } from "./types";

export const findersKeepers: Project = {
    id: "finders-keepers",
    title: "Finders Keepers",
    year: "2021",
    team: "Australian Global Game Jam",
    role: "Game Generalist",
    category: "jam",
    image: "/images/finders-keepers/finders-keepers-cover.png",
    description:
        "AGGJ 2021 - 48 hours to make a game. A 2P platformer, made in a frenzy.",
    tags: ["Unity", "C#", "Game Jam"],
    links: [
        {
            label: "Play",
            url: "https://pleasureelf.itch.io/finderskeepers",
            type: "external",
        },
        {
            label: "Australian Global Game Jam",
            url: "https://globalgamejam.org/2019/games/meow-meow-crash",
            type: "external",
        },
    ],
    // TODO change this
    fullDescription: `
Built during Global Game Jam 2019 with a team assembled on the day. This was a deliberate challenge to work with people I'd never met.
In under 48 hours the team shipped a complete game with a core gameplay loop.

Post-jam, an online score system was added following requests at the Melbourne Play Party.
  `,
    sections: [
        {
            title: "The Game",
            body: `
PLAY AS "PINCHY" AND "FOOLHARDY JONZE" IN THIS EPIC TRAIN BATTLE ARENA (ANTICIPATED MOBA RELEASE SOON) SET ON A TRAIN IN SPACE. THE BROTHERS/COUSINS (UP TO YOU, THIS IS THE WILD WEST) HAVE ROBBED A TRAIN, BUT AFTER PINCHY GAVE FOOLHARDY JONZE THE 'OL SLIP, JONZE IS OUT TO TAKE BACK WHAT HE IS OWED.
PLAY THIS EPIC ADVENTURE WITH YOUR BEST FRIEND, OR MAKE THIS GAME WITH HIS GIRLFRIEND, AND COLLECT THE MOST COINS TO WIN... BUT THE REAL WIN IS THE FRIENDSHIP WE MAKE ALONG THE WAY
      `,
            image: "/images/finders-keepers/finders-keepers-gameplay-gif.gif",
            imageAlt: "Finders Keepers Crash gameplay",
        },
        {
            title: "GGJ 2019",
            body: `
Insert some description here
.
      `,
            image: "/images/finders-keepers/finders-keepers-gameplay-image-2.png",
            imageAlt: "Meow Meow Crash trashed room",
        },
    ],
};
