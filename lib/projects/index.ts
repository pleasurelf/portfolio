// Re-export types
export type { Project, ProjectSection, ProjectLink, } from "./types";

// ─── Project list ────────────────────────────────────────────────────────────
// Edit this list to add, remove, or reorder projects.
// Each import is the project's own file in this folder.

// Professional
import { fitbitArcade } from "./fitbit-arcade";
import { guiltyGear } from "./guilty-gear";
import { dreamlightValley } from "./dreamlight-valley";
// Personal
import { stel } from "./project-stel";
import { doomsdayBall } from "./project-doomsday-ball";
import { herbiesHeinousHorrors } from "./project-herbies-heinous-horrors";
// Other
import { oneHitWonders } from "./project-one-hit-wonders";
import { mashina } from "./project-mashina";
import { welcomeToPripyat } from "./project-welcome-to-pripyat";
// Game Jams
import { findersKeepers } from "./game-jam-finders-keepers";

export const projects = [
  // Professional
  dreamlightValley,
  guiltyGear,
  fitbitArcade,
  // Personal
    stel,
    doomsdayBall,
    herbiesHeinousHorrors,
    oneHitWonders,
    mashina,
    welcomeToPripyat,
  // Game Jams
    findersKeepers,
];

export const featuredProjects = ["testbuddy", "lego-party", "dreamlight", "guilty-gear", "fitbit-arcade", "innchanted"];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}