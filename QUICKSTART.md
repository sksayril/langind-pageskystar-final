# Quickstart Guide

Get the Skystar Solution website up and running in minutes!

## 🚀 Fast Setup (5 minutes)

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 3. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

**Done!** The website is now running locally. ✅

---

## 📝 Before Production Deployment

### Required Steps

#### 1. Add Images (CRITICAL)

The site currently uses placeholder image paths. You MUST add actual images before deploying:

**Create these directories:**
```bash
mkdir -p public/team
mkdir -p public/testimonials
mkdir -p public/case-studies
mkdir -p public/blog
mkdir -p public/about
```

**Add these images** (see `ASSET_REQUIREMENTS.md` for specs):
- `public/logo.png` - Your logo
- `public/og-image.jpg` - Social share image
- `public/team/*.jpg` - Team photos (6 members)
- `public/testimonials/*.jpg` - Client photos (4 testimonials)
- `public/case-studies/*.jpg` - Case study images (3 cases)
- `public/blog/*.jpg` - Blog post images (3+ articles)
- `public/about/founder.jpg` - Founder photo

#### 2. Update Contact Information

**File**: `components/Footer.tsx` and `app/contact/page.tsx`

Replace placeholder contact details:
```typescript
// Update these:
- Email: hello@skystarsolution.com
- Phone: +1 (234) 567-890
- Address: 123 Innovation Street, San Francisco, CA 94102
```

#### 3. Connect Contact Form

**File**: `components/ContactForm.tsx` (line ~35)

Replace the simulation with actual API call:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  // Replace this simulation:
  // await new Promise(resolve => setTimeout(resolve, 2000))
  
  // With actual API call:
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  if (response.ok) {
    setIsSubmitting(false)
    setSubmitted(true)
    // ... rest of logic
  }
}
```

#### 4. Add Calendar Integration

**File**: `app/contact/page.tsx` (line ~140)

Replace placeholder with Calendly or Cal.com embed:

```tsx
{/* Replace the placeholder div with: */}
<div className="calendly-inline-widget" data-url="https://calendly.com/your-link" style={{ minWidth: '320px', height: '630px' }} />

{/* And add the script to layout.tsx: */}
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
```

#### 5. Update Site URL

**File**: `app/layout.tsx`

Update the metadata base URL:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), // Change this
  // ...
}
```

**Files to update**:
- `lib/structuredData.ts` - Update all URLs
- `public/robots.txt` - Update sitemap URL

#### 6. Add Analytics (Recommended)

Add Google Analytics or your preferred analytics:

```typescript
// In app/layout.tsx, add to <head>:
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🚀 Deploy to Vercel (Recommended)

### Method 1: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Configure:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables (if any)
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**That's it!** Your site will be live at `your-project.vercel.app`

---

## 🔧 Deploy to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### AWS Amplify

1. Connect your Git repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy

### Traditional Hosting (VPS, Shared Hosting)

```bash
# Build
npm run build

# Run on server
npm start

# Or use PM2 for process management
pm2 start npm --name "skystar" -- start
```

---

## ⚡ Common Issues

### Issue: Images not loading
**Solution**: Make sure all image paths in the code match actual files in `/public/`

### Issue: TypeScript errors
**Solution**: Run `npm run build` to see detailed errors

### Issue: Slow development server
**Solution**: Clear `.next` folder and restart: `rm -rf .next && npm run dev`

### Issue: Contact form not working
**Solution**: Check browser console for errors, ensure API endpoint is configured

---

## 📚 Next Steps

1. ✅ Site running locally
2. ⬜ Add images (see ASSET_REQUIREMENTS.md)
3. ⬜ Update contact info
4. ⬜ Connect contact form backend
5. ⬜ Add calendar integration
6. ⬜ Update URLs and metadata
7. ⬜ Test on mobile devices
8. ⬜ Deploy to production
9. ⬜ Add analytics
10. ⬜ Monitor performance

---

## 🆘 Need Help?

- **Setup issues**: Check README.md for detailed instructions
- **Customization**: See DEVELOPER_HANDOFF.md
- **Images**: See ASSET_REQUIREMENTS.md
- **All errors**: Check the browser console and terminal

---

**Ready to customize?** See `README.md` for full documentation.

**Ready to deploy?** Follow the deployment steps above.

**Questions?** Check `DEVELOPER_HANDOFF.md` for technical details.

---

**Time to production**: ~2 hours (with images ready)  
**Difficulty**: Easy ⭐⭐☆☆☆

