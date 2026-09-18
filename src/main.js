/**
 * BANANO VR
 * Chapter 0.2 — HTML/CSS/JavaScript setup
 */

const BANANO_VR = {
  version: "0.0.1",
  initialized: false
};

function bootstrap() {
  BANANO_VR.initialized = true;
  document.documentElement.dataset.bananoReady = "true";
}

document.addEventListener("DOMContentLoaded", bootstrap);
