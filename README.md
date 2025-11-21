# Portfolio Website

A minimal, clean portfolio website built with Nuxt 4, featuring dark mode, responsive design, and smooth animations.

## Features

- 🎨 Minimal and clean design
- 🌙 Dark mode with persistent storage
- 📱 Fully responsive (mobile-first)
- ⚡ Built with Nuxt 4 and TypeScript
- 🎯 Tailwind CSS for styling
- ✨ Smooth animations and transitions

## Tech Stack

- **Framework**: Nuxt 4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **About Page** (`pages/index.vue`):
   - Update name, title, and description
   - Modify the about section content

2. **Projects** (`pages/projects.vue`):
   - Replace the hardcoded projects array with your own projects
   - Update project details (title, description, technologies, links)

3. **Skills** (`pages/skills.vue`):
   - Modify the skillCategories array with your skills
   - Update skill names, icons, and levels

4. **Contact** (`pages/contact.vue`):
   - Update email address
   - Add your social media links

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `assets/css/main.css`
- Component-specific styles use Tailwind utility classes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Nuxt and configure the build
4. Your site will be deployed automatically

The `vercel.json` file is already configured for optimal Nuxt deployment.

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.output/public`
5. Deploy

The `netlify.toml` file is already configured.

### Other Platforms

For other deployment platforms, run:
```bash
npm run build
```

The output will be in `.output/public` directory.

## Project Structure

```
portfolio/
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   ├── Layout/
│   │   ├── Navbar.vue        # Navigation component
│   │   └── Footer.vue        # Footer component
│   ├── ProjectCard.vue       # Project card component
│   └── SkillCard.vue         # Skill card component
├── composables/
│   └── useDarkMode.ts        # Dark mode composable
├── pages/
│   ├── index.vue             # About/Home page
│   ├── projects.vue          # Projects page
│   ├── skills.vue            # Skills page
│   └── contact.vue           # Contact page
├── app.vue                   # Root component
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind configuration
├── vercel.json               # Vercel deployment config
└── netlify.toml              # Netlify deployment config
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## License

MIT

## Author

Your Name



