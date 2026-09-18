/**
 * BANANO VR
 * Chapter 0.4 — Application initialization
 *
 * Application lifecycle and module initialization live here.
 * Feature-specific services are intentionally implemented in later stages.
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

  let initialized = false;

  return {
    modules,

    get initialized() {
      return initialized;
    },

    initialize() {
      if (initialized) {
        return false;
      }

      for (const module of modules) {
        module.initialize();
      }

      initialized = true;
      return true;
    }
  };
}
