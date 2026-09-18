/**
 * BANANO VR
 * Chapter 0.3 — Module architecture
 *
 * Application composition root.
 * Future systems are connected here without coupling main.js to every module.
 */

import { createCoreModule } from "./index.js";
import { createRenderingModule } from "../rendering/index.js";
import { createVRModule } from "../vr/index.js";
import { createTrackingModule } from "../tracking/index.js";
import { createInteractionModule } from "../interaction/index.js";
import { createUIModule } from "../ui/index.js";

export function createApp() {
  const modules = [
    createCoreModule(),
    createRenderingModule(),
    createVRModule(),
    createTrackingModule(),
    createInteractionModule(),
    createUIModule()
  ];

  return {
    modules,

    start() {
      for (const module of this.modules) {
        module.initialize();
      }
    }
  };
}
