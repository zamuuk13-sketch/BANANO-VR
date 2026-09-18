/**
 * BANANO VR
 * Chapter 0.7 — Browser capability detection
 *
 * Detects stable browser APIs without requesting permissions or starting sensors.
 */

function hasAPI(name) {
  return typeof globalThis[name] !== "undefined";
}

function detectCapabilities() {
  const navigatorObject = globalThis.navigator;
  const documentObject = globalThis.document;

  return Object.freeze({
    webgl: (() => {
      if (!documentObject) return false;
      const canvas = documentObject.createElement("canvas");
      return Boolean(
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")
      );
    })(),
    webxr: Boolean(navigatorObject && navigatorObject.xr),
    deviceOrientation: hasAPI("DeviceOrientationEvent"),
    deviceMotion: hasAPI("DeviceMotionEvent"),
    mediaDevices: Boolean(navigatorObject && navigatorObject.mediaDevices),
    getUserMedia: Boolean(
      navigatorObject &&
      navigatorObject.mediaDevices &&
      navigatorObject.mediaDevices.getUserMedia
    ),
    fullscreen: Boolean(
      documentObject &&
      documentObject.documentElement &&
      documentObject.documentElement.requestFullscreen
    ),
    localStorage: (() => {
      try {
        if (!globalThis.localStorage) return false;
        const key = "__banano_capability_test__";
        globalThis.localStorage.setItem(key, "1");
        globalThis.localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    })()
  });
}

let cachedCapabilities = null;

export function getBrowserCapabilities() {
  if (!cachedCapabilities) {
    cachedCapabilities = detectCapabilities();
  }

  return cachedCapabilities;
}

export function refreshBrowserCapabilities() {
  cachedCapabilities = detectCapabilities();
  return cachedCapabilities;
}
