import type { Project } from "./types";

export const stel: Project = {
    id: "project-stel",
    title: "Stel",
    year: "2020",
    team: "RMIT Games Design Capstone Project",
    role: "Game Developer",
    category: "personal",
    image: "/stel/stel-cover.png",
    description:
        "Explore a rural icy township in this short mystery-narrative game about a boy trying to save his sick father. Exploring the Scandinavian-inspired wilderness filled with puzzle-lite tasks to uncover some tough lessons in growing up.",
    tags: ["Unity", "C#", "PhotoShop", "Maya", "Substance Painter", "Mixamo"],
    genre: ["Adventure"],
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
something about being nominated
      `,
            videoBelow: "/stel/stel-introduction.mp4",
        },{
            title: "The Game",
            body: `
I WORKED ON STEL IN A MULTI-DISCIPLINARY ROLE, HOWEVER PRIMARILY FOCUSED AS A GAME DESIGNER, UNITY DEVELOPER AND PRODUCER.
      `,
            image: "/stel/stel-gameplay-image-1.png",
            imageAlt: "Stel running through town",
        },
        {
            title: "dfgdfg",
            body: `
            It was supposed to be simple trip to the doctor, but instead of medicine you received a map, and were shoved into an unfamiliar land to have your mettle tested.
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
