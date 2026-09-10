# James Andrew S — Portfolio

A dark & moody, production-grade portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1: Add your photo
- Drop your profile photo into the `public/` folder
- Name it `profile.jpg` (or `profile.png`)
- In `app/page.tsx`, find the comment `{/* Profile image placeholder */}` and replace the placeholder div with:
```jsx
<Image src="/profile.jpg" alt="James Andrew" fill className="object-cover" />
```
- Add `import Image from "next/image";` at the top of the file

### Step 2: Add your Instagram QR code
- Drop the QR code image into `public/insta-qr.png`
- Add it wherever you like in the Contact section

### Step 3: Push to GitHub
```bash
# In the james-portfolio folder:
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/james-portfolio.git
git push -u origin main
```

### Step 4: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `james-portfolio` repo
4. Vercel auto-detects Next.js — just click **"Deploy"**
5. Your site goes live at `james-portfolio.vercel.app` 🎉

### Step 5: Custom domain (optional)
- In Vercel dashboard → Settings → Domains
- Add your custom domain (e.g. `jamesandrew.dev`)

---

## 🛠 Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
james-portfolio/
├── app/
│   ├── globals.css      # Global styles, fonts, animations
│   ├── layout.tsx       # Root layout + metadata/SEO
│   └── page.tsx         # Full portfolio (all sections)
├── public/              # ← Drop profile.jpg and insta-qr.png here
├── tailwind.config.ts
├── next.config.js
├── vercel.json
└── package.json
```

---

## ✏️ Customization Tips

| What to change | Where |
|---|---|
| Your LinkedIn URL | `page.tsx` → About section social links |
| Project descriptions | `page.tsx` → `projects` array |
| Add more skills | `page.tsx` → `skills` array |
| Profile photo | `public/profile.jpg` + update Image tag |
| Accent color | `globals.css` → `--orange` variable |

---

Built with 🔥 in Kodaikanal · Python · React · Next.js
