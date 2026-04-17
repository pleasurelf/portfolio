// Re-export types
export type { Project, ProjectSection, ProjectLink } from "./types";

// ─── Project list ────────────────────────────────────────────────────────────
// Edit this list to add, remove, or reorder projects.
// Each import is the project's own file in this folder.

import { testbuddy } from "./testbuddy";
import { legoParty } from "./lego-party";
import { fitbitArcade } from "./fitbit-arcade";
import { guiltyGear } from "./guilty-gear";
import { dreamlight } from "./dreamlight";
import { innchanted } from "./innchanted";
import { forestDemo } from "./forest-demo";
import { factoryDemo } from "./factory-demo";
import { stel } from "./stel";
import { doomsdayBall } from "./doomsday-ball";
import { herbiesHeinousHorrors } from "./herbies-heinous-horrors";
import { findersKeepers } from "./game-jam-finders-keepers";
import { goap } from "./goap";
import { playerController } from "./player-controller";
import { procgen } from "./procgen";

export const projects = [
  // Professional
  testbuddy,
  legoParty,
  dreamlight,
  guiltyGear,
  fitbitArcade,
  innchanted,
  // Personal
    stel,
    doomsdayBall,
    herbiesHeinousHorrors,
  forestDemo,
  factoryDemo,
  procgen,
  goap,
  playerController,
  // Game Jams
    findersKeepers,
];

export const featuredProjects = ["testbuddy", "lego-party", "dreamlight", "guilty-gear", "fitbit-arcade", "innchanted"];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}