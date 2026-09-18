/**
 * BANANO VR
 * Core module.
 */

import { logger } from "./logger.js";

export function createCoreModule() {
  return {
    name: "core",

    initialize() {
      logger.info("Core module initialized.");
    }
  };
}
