# Portfolio Website

This is a portfolio website made in Next.js with Tailwind CSS. It's my personal portfolio for game development, focusing on providing an easy way to add projects as time goes on.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (included with Node.js)

### Installation

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
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
   Opens at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run the app in development mode |
| `npm run build` | Build a production bundle to `out/` |

## Modifying Content

### Projects

Projects are contained in `lib/projects`. Text has multi-line and list support, and media can be added in the form of images, videos and youtube embeds.

### Personal Content

The About and Contact sections are contained in the following areas:

- `lib/about.ts` - the tagline and skills
- `components/hero.tsx` - name, title, profile image and high level stats
- `components/home-contact.tsx` - contact details at the bottom of the page. This is doubled up in `hero.tsx` for user convenience.