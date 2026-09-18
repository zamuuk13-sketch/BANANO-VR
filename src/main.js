/**
 * BANANO VR
 * Chapter 0.3 — Module architecture
 */

import { createApp } from "./core/app.js";

const BANANO_VR = {
  version: "0.0.1",
  initialized: false,
  app: null
};

function bootstrap() {
  BANANO_VR.app = createApp();
  BANANO_VR.app.start();
  BANANO_VR.initialized = true;
  document.documentElement.dataset.bananoReady = "true";
}

document.addEventListener("DOMContentLoaded", bootstrap);
