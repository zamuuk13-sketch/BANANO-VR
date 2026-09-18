/**
 * BANANO VR
 * Chapter 0.5 — Logging system
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

  BANANO_VR.app = createApp();
  BANANO_VR.app.initialize();
  BANANO_VR.initialized = BANANO_VR.app.initialized;

  document.documentElement.dataset.bananoReady = "true";
  logger.info("Bootstrap completed.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
} else {
  bootstrap();
}
