# Portfolio Website

A 3D interactive portfolio website built with modern web technologies.

## Technologies Used

- **Framework**: React.js + Vite
- **Styling**: TailwindCSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **3D Graphics**: Three.js / React Three Fiber / Drei
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

Ensure you have Node.js installed.

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will launch at `http://localhost:5173` (or the next available port).

## Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## Optimization Notes

- The project uses 3D models which are optimized for web but may be heavy on low-end devices.
- Suspense is used for loading states.
