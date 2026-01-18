# Srijan Das - Portfolio

Modern, responsive portfolio website for showcasing ML/Data Science projects and skills.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```
Visit `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📦 What's Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dynamic hover effects and animations
- ✅ Smooth scrolling navigation
- ✅ Contact form integration ready
- ✅ Resume download functionality
- ✅ Social media links

## 🛠️ Technologies Used

- React 18
- Tailwind CSS (via CDN in component)
- Lucide React (icons)
- CSS3 animations

## 📝 Customization

1. **Add Profile Photo**: Place `profile.jpg` in `/public` folder
2. **Add Resume**: Place `resume.pdf` in `/public` folder
3. **Update Content**: Edit `src/components/Portfolio.jsx`
4. **Update Links**: Change GitHub, LinkedIn, X URLs in component

## 🌐 Deployment Options

### Vercel (Recommended - Easiest)
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
1. Drag & drop `/build` folder to [netlify.com](https://netlify.com)
2. Or connect GitHub repo

### GitHub Pages
```bash
npm install gh-pages --save-dev
```
Add to `package.json`:
```json
"homepage": "https://srijandas007.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Deploy: `npm run deploy`

## 📧 Contact

- Email: srijandas302@gmail.com
- LinkedIn: [linkedin.com/in/srijandas007](https://linkedin.com/in/srijandas007)
- GitHub: [github.com/srijandas007](https://github.com/srijandas007)

---

Made by Srijan Das