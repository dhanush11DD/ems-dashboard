# EMS Dashboard - Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended for Next.js) ⭐

Vercel is the easiest and best option for Next.js applications.

#### Steps:
1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Accept defaults for Next.js project
   - Your app will be live in seconds!

4. **Production Deploy:**
   ```bash
   vercel --prod
   ```

**Your app will be available at:** `https://ems-dashboard-[random].vercel.app`

---

### Option 2: Netlify

#### Steps:
1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy
   ```
   - Choose "Create & configure a new site"
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Production Deploy:**
   ```bash
   netlify deploy --prod
   ```

---

### Option 3: GitHub + Vercel/Netlify (Continuous Deployment)

#### Steps:
1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - EMS Dashboard"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ems-dashboard.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Or Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings are already configured in `netlify.toml`
   - Click "Deploy"

---

### Option 4: Manual Build & Deploy

If you want to deploy to your own server:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Deploy the `.next` folder and `package.json` to your server**

4. **Run on server:**
   ```bash
   npm install --production
   npm start
   ```

---

## Environment Variables

If you need environment variables in production:

1. Create `.env.production`:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```

2. Add them in your deployment platform:
   - **Vercel:** Project Settings → Environment Variables
   - **Netlify:** Site Settings → Environment Variables

---

## Recommended: Deploy with Vercel Now

Run this command in your terminal:

```bash
npx vercel
```

This will:
- ✅ Install Vercel CLI (no global install needed)
- ✅ Deploy your app immediately
- ✅ Give you a live URL
- ✅ Set up automatic deployments

---

## Post-Deployment Checklist

After deployment, verify:
- [ ] Dashboard loads at `/`
- [ ] Login page works at `/login`
- [ ] Forgot password popup works
- [ ] Responsive design works on mobile
- [ ] All data displays correctly
- [ ] No console errors

---

## Custom Domain (Optional)

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

---

## Troubleshooting

### Build Fails:
- Check `npm run build` works locally
- Ensure all dependencies are in `package.json`
- Check Node version (use Node 18+)

### App doesn't load:
- Check build logs in deployment platform
- Verify environment variables
- Check browser console for errors

### Styles missing:
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.ts` is included
- Verify `globals.css` imports Tailwind

---

## Quick Start (Fastest Method)

Just run this one command:

```bash
npx vercel
```

That's it! Your app will be deployed in under a minute! 🚀
