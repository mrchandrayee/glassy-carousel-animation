# Glassy Carousel Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/glassy-carousel-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A standalone recreation of the uploaded 14.57-second screen recording.

## What appears in the recording

- Heading: **Glassy Carousel Animation**
- Large purple / magenta / red gradient carousel stage.
- Several image cards arranged in a horizontal 3D fan.
- A prominent front card and smaller, dimmed cards behind it.
- Circular previous / next arrow controls.
- Caption chip below the carousel: `Comment "Carousel" for code`.
- Dark source-code panel with orange border.

## CSS transcribed from the visible video

The recording clearly shows these declarations:

```css
.glass-card {
  position: absolute;
  top: 0; left: 0; padding: 12px;
  width: 100%; height: 100%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2),
              inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
              opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1),
              filter 0.6s ease;
  cursor: pointer;
  user-select: none;
}

.glass-card img {
  width: 100%; height: 100%; object-fit: cover;
  border-radius: 14px; pointer-events: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
```

The full original HTML, JavaScript, and remaining CSS are not shown in the recording. The project therefore reconstructs the carousel's 3D positioning, active card state, arrows, dots, swipe and keyboard navigation.

## Features

- Seven local SVG landscape illustrations; no network access needed.
- 3D card stack with glassmorphism blur and translucent borders.
- Smooth card transitions and depth / scale / opacity changes.
- Previous and next buttons.
- Click a visible card or dot to select a slide.
- Keyboard navigation with Left / Right arrow keys.
- Swipe navigation on touch devices.
- Responsive layout for mobile and desktop.

## Run

1. Extract the ZIP.
2. Keep the `assets` folder beside `index.html`.
3. Open `index.html` in a modern browser.

No npm install, framework, build step, or external image service is required.

## Files

- `index.html` — carousel markup and visible CSS source excerpt
- `style.css` — glass cards, 3D stage, controls and code panel
- `script.js` — carousel state and navigation
- `assets/` — seven self-contained SVG scenic illustrations
- `README.md` — transcription notes and run instructions

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
