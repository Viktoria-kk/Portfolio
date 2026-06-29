# Viktoria Portfolio

A polished React portfolio website for Viktoria, a Computer Science student at Business and Technology University (BTU). The site presents a realistic student profile, current learning goals, GitHub projects, and a modern contact experience.

## Features

- Home, About, Projects, and Contact pages
- Responsive sticky navigation with hamburger menu
- Light and dark mode saved in `localStorage`
- English and Georgian language switcher saved in `sessionStorage`
- Animated typing hero text and floating programming elements
- Scroll reveal, hover, modal, loading, and form submit animations
- GitHub API integration for public repositories
- Programming quote API integration with loading and fallback state
- Search, filter, and sort controls for repositories
- Animated project details modal
- Favorite repositories saved in `localStorage`
- Contact form with frontend validation
- GitHub Pages deployment configuration

## Technologies

- React with functional components
- React Hooks
- React Router
- Axios
- SCSS
- Vite
- Local Storage and Session Storage

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Open the local URL printed in the terminal.

## Build

```bash
npm run build
```

## Deploying to GitHub Pages

This project uses `HashRouter`, which keeps page refreshes safe on GitHub Pages.

1. Create a GitHub repository named `Portfolio`.
2. Update the `homepage` field in `package.json` if your repository name changes.
3. Run:

```bash
npm run deploy
```

## Folder Structure

```text
src/
  components/
  context/
  hooks/
  layouts/
  pages/
  services/
  styles/
  translations/
  utils/
```

## Screenshots

Add screenshots here after deployment:

- Home page
- Projects page
- Dark mode
- Mobile navigation

## Future Improvements

- Replace placeholder email and LinkedIn with final personal links
- Add screenshots after the project is hosted
- Add more project descriptions directly on GitHub repositories
- Connect the contact form to a real backend or form service
