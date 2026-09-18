# 🍌 BANANO VR

**BANANO VR** is an open-source web VR project focused on bringing a lightweight VR experience to the browser, with special attention to mobile devices.

The long-term goal is to combine:

- 🥽 Head tracking
- 🌀 Gyroscope and device orientation
- 🖐️ Hand tracking
- 🦾 Arm tracking based on hand movement
- 🌐 WebXR support
- 🎮 VR interaction
- ⚙️ Calibration and accessibility settings
- 🚀 Performance optimizations for mobile hardware

> **Project status:** Early development — Chapter 0: Foundation.

---

## 📖 What is BANANO VR?

BANANO VR is being designed as a browser-based VR platform rather than a traditional native application.

The project is intentionally being developed in small, documented chapters. Each chapter is divided into numbered stages so that every system can be tested before the next one is built.

The tracking model is intentionally focused on the parts that matter most for the experience:

**Head + Arms + Hands**

Full-body tracking is not part of the initial scope.

---

## 🧭 Development Roadmap

### Chapter 0 — Foundation
- [ ] 0.1 Project structure
- [ ] 0.2 HTML/CSS/JavaScript setup
- [x] 0.3 Modular architecture
- [x] 0.4 Application initialization
- [ ] 0.5 Logging system
- [ ] 0.6 Error handling
- [ ] 0.7 Browser capability detection
- [ ] 0.8 Version system
- [ ] 0.9 Initial interface
- [ ] 0.10 Foundation test

### Chapter 1 — 3D Engine
WebGL/3D scene, camera, renderer, lighting, models and performance monitoring.

### Chapter 2 — Head Tracking
Device sensors, orientation, calibration, recentering and smoothing.

### Chapter 3 — Mobile VR
Stereoscopic rendering, IPD, FOV, lens correction, fullscreen and headset settings.

### Chapter 4 — WebXR
WebXR sessions, reference spaces, headset pose and controller support.

### Chapter 5 — Hand Tracking
Camera-based hand detection, left/right hands, landmarks, finger tracking, gestures and 3D hand representation.

### Chapter 6 — Arm Tracking
Shoulder/wrist relationships, arm estimation, IK, smoothing and synchronization with hand tracking.

### Chapter 7 — VR Representation
A lightweight representation of the user's head, arms and hands, synchronized with the tracking systems.

### Chapter 8 — VR Interaction
Grabbing, releasing, pointing, pinching, buttons, physics and two-hand interactions.

### Chapter 9 — VR Environment
3D environments, objects, lighting, spatial audio and collisions.

### Chapter 10 — Settings
Tracking sensitivity, smoothing, IPD, FOV, quality, resolution and calibration.

### Chapter 11 — Performance
Profiling, draw-call reduction, LOD, dynamic resolution, latency and low-end device optimization.

### Chapter 12 — Testing
Sensor, camera, tracking, IK, WebXR, compatibility and stress testing.

### Chapter 13 — Web Platform
Navigation, modes, persistent settings, PWA support, offline caching and diagnostics.

### Chapter 14 — Polish
Final UI, loading screens, feedback, recovery, documentation and cleanup.

### Chapter 15 — BANANO VR 1.0
Release candidate, final testing, bug fixing, optimization and first stable release.

For the complete stage-by-stage roadmap, see [ROADMAP.md](ROADMAP.md).

---

## 🧠 Tracking concept

BANANO VR does not need full-body tracking for its initial experience.

The hand is the main reference for the arm:

```
🖐️ Hand tracking
       ↓
Position + rotation
       ↓
Arm solver / IK
       ↓
🦾 Virtual arm
```

If the hand moves to the right, the virtual arm follows it. If the hand rotates upward, the forearm representation follows the corresponding orientation.

The implementation will use a tracking abstraction so the rest of the application does not depend directly on one tracking technology.

Possible sources include:

- Camera-based tracking
- WebXR hand input when supported
- Device orientation sensors

---

## 🏗️ Planned architecture

```
BANANO VR
│
├── Core
│   ├── App
│   ├── Logger
│   ├── Errors
│   └── Capabilities
│
├── Rendering
│   ├── Scene
│   ├── Camera
│   └── Renderer
│
├── VR
│   ├── MobileVR
│   └── WebXR
│
├── Tracking
│   ├── Head
│   ├── Hands
│   ├── Arms
│   └── IK
│
├── Interaction
│   ├── Gestures
│   ├── Objects
│   └── Physics
│
└── UI
    ├── Home
    ├── Settings
    └── Diagnostics
```

---

## 📱 Target

The project is designed with mobile performance in mind.

The goal is not to require a high-end PC just to open the experience. Performance, latency and graceful fallback will be considered throughout development.

---

## 🧪 Development philosophy

1. Build one stage at a time.
2. Test each stage before depending on it.
3. Keep modules independent.
4. Avoid giant monolithic files.
5. Prefer graceful fallbacks when a browser/device feature is unavailable.
6. Document important systems.
7. Keep performance in mind from the beginning.

---

## 🚧 Current state

The repository is currently implementing **Chapter 0 — Foundation**. Stages **0.1 — Project structure**, **0.2 — HTML/CSS/JavaScript setup**, **0.3 — Modular architecture** and **0.4 — Application initialization** are complete.

No tracking system is considered complete until it has been implemented, tested and documented.

---

## 📄 License

License will be defined before the first public stable release.
