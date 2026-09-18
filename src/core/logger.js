/**
 * BANANO VR
 * Chapter 0.5 — Logging system
 *
 * Lightweight centralized logger for development and diagnostics.
 * It wraps the browser console without external dependencies.
 */

const LEVELS = {
  debug: "debug",
  info: "info",
  warn: "warn",
  error: "error"
};

const PREFIX = "[BANANO VR]";

function write(level, message, data) {
  const method = console[level] || console.log;

  if (data === undefined) {
    method.call(console, PREFIX, message);
    return;
  }

  method.call(console, PREFIX, message, data);
}

export const logger = {
  debug(message, data) {
    write(LEVELS.debug, message, data);
  },

  info(message, data) {
    write(LEVELS.info, message, data);
  },

  warn(message, data) {
    write(LEVELS.warn, message, data);
  },

  error(message, data) {
    write(LEVELS.error, message, data);
  }
};

export { LEVELS };
