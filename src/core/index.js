/**
 * BANANO VR
 * Core module.
 */

import { logger } from "./logger.js";
import { getBrowserCapabilities } from "./capabilities.js";

export function createCoreModule() {
  return {
    name: "core",

    initialize() {
      const capabilities = getBrowserCapabilities();

      logger.info("Core module initialized.");
      logger.debug("Browser capabilities detected.", capabilities);
    }
  };
}
