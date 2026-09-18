/**
 * BANANO VR
 * Chapter 0.5 — Logging system
 */

import { createCoreModule } from "./index.js";
import { createRenderingModule } from "../rendering/index.js";
import { createVRModule } from "../vr/index.js";
import { createTrackingModule } from "../tracking/index.js";
import { createInteractionModule } from "../interaction/index.js";
import { createUIModule } from "../ui/index.js";
import { logger } from "./logger.js";

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
        logger.warn("Application initialization requested more than once.");
        return false;
      }

      logger.info("BANANO VR application initialization started.");

      for (const module of modules) {
        logger.debug(`Initializing module: ${module.name}`);
        module.initialize();
      }

      initialized = true;
      logger.info("BANANO VR application initialized successfully.");

      return true;
    }
  };
}
