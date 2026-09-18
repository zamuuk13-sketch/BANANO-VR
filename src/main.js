/**
 * BANANO VR
 * Chapter 0.4 — Application initialization
 */

import { createApp } from "./core/app.js";

const BANANO_VR = {
  version: "0.0.1",
  initialized: false,
  app: null
};

function bootstrap() {
  if (BANANO_VR.initialized) {
    return;
  }

  BANANO_VR.app = createApp();
  BANANO_VR.app.initialize();
  BANANO_VR.initialized = BANANO_VR.app.initialized;

  document.documentElement.dataset.bananoReady = "true";
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
} else {
  bootstrap();
}
