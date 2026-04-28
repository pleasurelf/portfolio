import {Download} from "lucide-react";

export type ProjectSection = {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  youtube?: string;      // YouTube video ID — replaces image in the side-by-side layout
  youtubeBelow?: string; // YouTube video ID — full-width embed below the image+text row
  videoBelow?: string;   // Video file path — full-width player below the image+text row
};

export type ProjectLink = {
  label: string;
  url: string;
  type: "external" | "github";
};

export type Project = {
  id: string;
  title: string;
  year: string;
  team?: string;
  role?: string;
  category: "professional" | "personal" | "personalOther" | "jam";
  description: string;
  tags: string[];
  genre?: string[]; // TODO set this up
  image?: string;
  imagePosition?: "top" | "center";
  video?: string;
  links?: ProjectLink[];
  fullDescription?: string;
  sections?: ProjectSection[];
};
