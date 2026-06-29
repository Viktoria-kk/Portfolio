# Viktoria Portfolio

This is my personal React portfolio website for a university project. I built it to introduce myself as Viktoria, an IT student at Business and Technology University (BTU), and to show my current learning journey, interests, and GitHub projects.

## What I Wanted To Build

I wanted the website to feel modern, feminine, clean, and a little creative without exaggerating my experience. It presents me as a motivated student who is learning, building projects, and improving step by step.

## Features

- Home, About, Projects, and Contact pages
- Responsive sticky navigation with a hamburger menu
- Light and dark mode saved in `localStorage`
- English and Georgian language switcher saved in `sessionStorage`
- Animated typing text and floating programming elements
- Scroll reveal, hover, modal, loading, and form submit animations
- GitHub API integration for my public repositories
- Programming quote API with a local fallback quote
- Repository search, language filter, and sorting
- Project details modal
- Favorite repositories saved in `localStorage`
- Contact form with frontend validation
- GitHub Pages-ready routing with `HashRouter`

## Skills And Tools Included

- HTML, CSS, JavaScript, jQuery
- Responsive Web Design
- Git and GitHub
- Python
- Node.js, Express, EJS, Axios
- SQL
- Figma for UI/UX Design

## Tech Stack

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

Then open the local URL printed in the terminal.

## Build

```bash
npm run build
```

## Deploying To GitHub Pages

This project uses `HashRouter`, so refreshing pages works safely on GitHub Pages.

1. Create a GitHub repository named `Portfolio`.
2. Check the `homepage` field in `package.json`.
3. Run:

```bash
npm run deploy
```

## Folder Structure

```text
src/
  assets/
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

I can add screenshots here after the website is deployed:

- Home page
- About page
- Projects page
- Dark mode
- Mobile navigation

## Future Improvements

- Add more detailed descriptions to my GitHub repositories
- Add screenshots after deployment
- Connect the contact form to a real backend or form service
- Continue improving the Georgian translation and accessibility details
