# Portfolio - Sachin Kumar Verma

A modern, responsive developer portfolio built with React, Tailwind CSS, and Framer Motion.

## Features

- **Dark / Light Mode** - Theme toggle with system preference detection and localStorage persistence
- **Smooth Animations** - Scroll-reveal animations, floating particles, and rotating rings powered by Framer Motion
- **Project Carousel** - Auto-sliding preview images with blurred backgrounds, carousel dots, and dual links (source code + live site)
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop
- **Profile Picture** - Circular photo displayed inside animated orbital rings
- **One-File Configuration** - All personal data (name, bio, projects, skills, experience) managed from a single file

## Tech Stack

- **React 19** - UI framework
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/sachinkumarverma/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## Customization

All content is centralized in `src/data/portfolio.js`. Edit this single file to update:

- **Personal Info** - Name, title, bio, email, social links
- **Experience** - Job history with roles, companies, and responsibilities
- **Projects** - Title, description, tags, GitHub URL, live URL, and preview screenshots
- **Skills** - Categorized technical skills (Frontend, Backend, Cloud, Databases)

### Adding Project Previews

1. Place screenshot images in `public/projects/` (e.g., `my-project-1.png`)
2. Update the `previews` array in the project entry in `src/data/portfolio.js`
3. Set `liveUrl` to your deployed site URL

### Adding Profile Picture

1. Place your photo in `src/assets/` (e.g., `sachin.png`)
2. It's imported in `src/components/Hero.jsx` and displayed inside the animated ring

## Project Structure

```
src/
├── assets/            # Static assets (profile pic)
├── components/        # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionHeader.jsx
│   ├── ThemeProvider.jsx
│   └── icons.jsx
├── data/
│   └── portfolio.js   # All portfolio content
├── App.jsx
├── main.jsx
└── index.css          # Theme variables and custom styles
```

## Deployment

Build and deploy to any static hosting:

```bash
npm run build
```

The output in `dist/` can be deployed to Vercel, Netlify, GitHub Pages, or any static host.

## License

MIT
