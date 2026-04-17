import type { Project } from "./types";
import {ButtonHTMLAttributes} from "react";
import { Button } from "@/components/ui/button";

export const welcomeToPripyat: Project = {
    id: "project-welcome-to-pripyat",
    title: "Welcome To Pripyat",
    year: "2020",
    team: "RMIT Games Design World Building",
    role: "Writer, Artist",
    category: "personalOther",
    image: "",
    description:
        "Play as a mad rancher in his isolated, ransacked homestead and git whackin' those danged Chicktubs! DO NOT underestimate them, however, as they're both sentient and mad as heck, and those short, jank-ass chicky legs pick up some hot diggin' speed.",
    tags: ["DreamsPS4",],
    links: [
        {
            label: "View Dreams Store Page",
            url: "https://indreams.me/scene/dLKBWdpkRqX",
            type: "external",
        },
    ],
    fullDescription: `
Herbie is a bootleggin', crystal-minin', tub-tweakin', rum-swiggin' chicken rancher who has apparated in the middle of a nightmare- but it is NOT a dream- to find his homestead rummaged and ransacked. The culprits? Chicktubs!
  `,
    sections: [
        {
            title: "Protodype",
            body: `
DOOMSDAY BALL IS A PROTOTYPE GAME I WORKED ON AS A GAME DESIGNER, PROGRAMMER, PRODUCER, AND WRITER. I WORKED ON THIS GAME OVER FOUR WEEKS, AND WHILE LARGELY UNFINISHED, IT REMAINS ONE OF MY FAVOURITE CONCEPTS.
      `,
            image: "",
            imageAlt: "dfgdfgdfg",
        },
        {
            title: "dfgdfg",
            body: `
            It was supposed to be simple trip to the doctor, but instead of medicine you received a map, and were shoved into an unfamiliar land to have your mettle tested.
            `,
            image: "",
            imageAlt: "gfhdfghd",
        },
        {
            title: "dfgsdfg",
            body: `dfgdfgdfg`,
            image: "",
            imageAlt: "dfgdfg",
        },
    ],
};
