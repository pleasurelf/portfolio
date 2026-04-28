// Re-export types
// import {untitledCodexGame} from "@/lib/projects/project-untitled-codex-game";

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
import { untitledCodexGame } from "./project-untitled-codex-game";
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
    untitledCodexGame,
  // Game Jams
    findersKeepers,
];

export const featuredProjects = ["dreamlight-valley", "guilty-gear", "fitbit-arcade", "project-doomsday-ball"];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}