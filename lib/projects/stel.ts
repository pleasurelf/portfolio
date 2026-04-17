import type { Project } from "./types";

export const stel: Project = {
    id: "stel",
    title: "Stel",
    year: "2020",
    team: "RMIT Games Design Capstone Project",
    role: "Game Generalist",
    category: "personal",
    image: "/images/stel/stel-gameplay-image-1.png",
    description:
        "It was supposed to be simple trip to the doctor...",
    tags: ["Unity", "C#", "Adventure"],
    links: [
        {
            label: "Play",
            url: "https://pleasureelf.itch.io/stel",
            type: "external",
        },
    ],
    fullDescription: `
Stel is a short mystery-narrative about a boy instructed to seek help from a witch doctor in order to save his ailing papa. He is diverted on his path when the witch informs him that she requires a favour in return, and asks the boy to retrieve a mysterious item. As the story plays out, the urgency of helping his papa might be blinding Stel from the true motive behind his journey.
  `,
    sections: [
        {
            title: "ACME Introduction",
            body: `
It was supposed to be simple trip to the doctor, but instead of medicine you received a map, and were shoved into an unfamiliar land to have your mettle tested.
      `,
            videoBelow: "/videos/stel/stel-introduction.mp4",
        },{
            title: "The Game",
            body: `
Some description
      `,
            image: "/images/stel/stel-gameplay-image-1.png",
            imageAlt: "Stel running through town",
        },
        {
            title: "dfgdfg",
            body: `dfgdfgdf`,
            image: "/images/stel/stel-gameplay-image-2.png",
            imageAlt: "Stel sleighing through town",
        },
        {
            title: "dfgsdfg",
            body: `dfgdfgdfg`,
            image: "/images/stel/stel-gameplay-image-3.png",
            imageAlt: "Stel sleighing through town",
        },
    ],
};
