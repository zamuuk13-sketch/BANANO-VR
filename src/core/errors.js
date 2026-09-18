/**
 * BANANO VR
 * Chapter 0.6 — Error handling
 *
 * Centralized application errors and startup error normalization.
 */

import { logger } from "./logger.js";

export class BANANOError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = "BANANOError";
    this.code = options.code || "UNKNOWN_ERROR";
    this.cause = options.cause || null;
  }
}

export function normalizeError(error, fallbackMessage = "An unexpected error occurred.") {
  if (error instanceof BANANOError) {
    return error;
  }

  const message = error instanceof Error && error.message
    ? error.message
    : fallbackMessage;

  return new BANANOError(message, {
    code: "UNEXPECTED_ERROR",
    cause: error
  });
}

export function handleError(error, context = "Application") {
  const normalized = normalizeError(error);

  logger.error(context + ": " + normalized.message, {
    name: normalized.name,
    code: normalized.code,
    cause: normalized.cause
  });

  return normalized;
}
