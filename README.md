# My Portfolio

A modern, future-proof portfolio built with Next.js, TypeScript, and Tailwind CSS, optimized for Vercel deployment.

## 🚀 Features

- **Hero Section**: Clear professional statement
- **Featured Projects**: Showcasing three key projects that demonstrate growth
  - What I Know
  - What I Learned
  - What I'm Aspiring To
- **Currently Learning**: Growth mindset section highlighting ongoing education
- **Responsive Design**: Beautiful on all devices
- **Dark Mode Support**: Automatic theme switching

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: Git

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🎨 Customization

Edit the portfolio content in `src/app/page.tsx`:

1. **Hero Statement**: Update your name and professional tagline
2. **Projects**: Modify the `projects` array with your actual projects
3. **Learning Topics**: Update the `learningTopics` array with what you're currently learning

## 📝 Git Workflow

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup"

# Connect to GitHub
git remote add origin https://github.com/yourusername/my-portfolio.git

# Push to GitHub
git push -u origin main
```

## 🌐 Deploy on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "Add New" > "Project"
5. Import your portfolio repository
6. Click "Deploy"

**That's it!** Every time you push to GitHub, Vercel automatically rebuilds and deploys your site.

## 🔄 CI/CD Workflow

This portfolio uses continuous deployment:
- **Push to GitHub** → Vercel automatically detects changes
- **Automatic Build** → Vercel builds your Next.js app
- **Live Update** → Your site updates at your Vercel URL

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

Built with ❤️ using Next.js • Deployed on Vercel
