// Re-export types
export type { Project, ProjectSection, ProjectLink } from "./types";

// ─── Project list ────────────────────────────────────────────────────────────
// Edit this list to add, remove, or reorder projects.
// Each import is the project's own file in this folder.

import { fitbitArcade } from "./fitbit-arcade";
import { guiltyGear } from "./guilty-gear";
import { dreamlight } from "./dreamlight";
import { stel } from "./stel";
import { doomsdayBall } from "./doomsday-ball";
import { herbiesHeinousHorrors } from "./herbies-heinous-horrors";
import { findersKeepers } from "./game-jam-finders-keepers";

export const projects = [
  // Professional
  dreamlight,
  guiltyGear,
  fitbitArcade,
  // Personal
    stel,
    doomsdayBall,
    herbiesHeinousHorrors,
  // Game Jams
    findersKeepers,
];

export const featuredProjects = ["testbuddy", "lego-party", "dreamlight", "guilty-gear", "fitbit-arcade", "innchanted"];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}