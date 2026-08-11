# Olumide Faleke — Creative Portfolio

A responsive portfolio for Olumide Faleke, a Lagos-based graphic designer, social media manager and photographer. It includes animated page reveals and dedicated galleries for brand identity, social media design, analytics, photography and motion graphics.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` (or the port shown in the terminal).

## Production check

```bash
npm run build
```

## Push to GitHub

1. Create a new empty repository on GitHub.
2. Extract this project ZIP.
3. Open a terminal inside the extracted folder.
4. Run:

```bash
git init
git add .
git commit -m "Add Olumide Faleke portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository.
3. Keep the detected build settings.
4. Select **Deploy**.

No environment variables or database are required for this portfolio.

## Main content locations

- Homepage: `app/portfolio.tsx`
- Styling and animation: `app/globals.css`
- Project pages: `app/work/`
- Images and videos: `public/projects/`
- Profile image: `public/profile/olumide-faleke.jpg`
