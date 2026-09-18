/**
 * BANANO VR
 * Chapter 0.6 — Error handling
 */

import { createApp } from "./core/app.js";
import { logger } from "./core/logger.js";

const BANANO_VR = {
  version: "0.0.1",
  initialized: false,
  app: null
};

function bootstrap() {
  if (BANANO_VR.initialized) {
    logger.warn("Bootstrap ignored because BANANO VR is already initialized.");
    return;
  }

  logger.info("Bootstrap started.");

  try {
    BANANO_VR.app = createApp();
    const initialized = BANANO_VR.app.initialize();

    BANANO_VR.initialized = initialized;

    if (!initialized) {
      document.documentElement.dataset.bananoReady = "false";
      document.documentElement.dataset.bananoError = "startup";
      logger.error("Bootstrap stopped because application initialization failed.");
      return;
    }

    document.documentElement.dataset.bananoReady = "true";
    document.documentElement.dataset.bananoError = "false";
    logger.info("Bootstrap completed.");
  } catch (error) {
    BANANO_VR.initialized = false;
    document.documentElement.dataset.bananoReady = "false";
    document.documentElement.dataset.bananoError = "startup";
    logger.error("Unhandled bootstrap error.", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
} else {
  bootstrap();
}
