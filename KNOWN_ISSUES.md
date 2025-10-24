# Known Issues & Expected Warnings

## ✅ Image 404 Errors (EXPECTED)

You'll see these errors in development - **this is normal**:

```
GET /team/sarah.jpg 404
GET /case-studies/techgear.jpg 404
GET /blog/what-is-aio.jpg 404
```

**Why?** The project uses placeholder image paths. Real images need to be added.

**Solution:** Add actual images to the `/public/` directory. See `ASSET_REQUIREMENTS.md` for specifications.

### Quick Fix: Placeholder Images

You can temporarily use placeholder services:

**Option 1: Update Next.js Image to allow external placeholder**

Add to `next.config.js`:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'via.placeholder.com',
    },
  ],
}
```

**Option 2: Create Simple Placeholders**

Create placeholder images in `/public/` directories:
- Use any image editor
- Use online tools like placeholder.com
- Use AI image generators

**Option 3: Use Unsplash (Temporary)**

Replace image paths with Unsplash URLs in components temporarily.

---

## ✅ All Other Errors Fixed!

### ✅ Fixed: Event Handler Errors

**Was seeing:**
```
Error: Event handlers cannot be passed to Client Component props.
<button onClick={function onClick}...
```

**Status:** ✅ FIXED
- Marked interactive pages as Client Components with `'use client'`
- Removed `Metadata` type exports from client components
- Added proper onClick handlers

**Files updated:**
- `app/blog/page.tsx` - Newsletter form
- `app/blog/[slug]/page.tsx` - Share button
- Pagination buttons

---

## 🔧 Development Tips

### Ignore Image Warnings During Development

The image 404s won't affect functionality. The site will work perfectly once you add real images.

### Suppress Image Warnings (Optional)

If the warnings bother you, you can temporarily:

1. Comment out Image components during development
2. Replace with `<div>` placeholders
3. Or just ignore them - they don't break anything!

### Before Production

Make sure to:
1. ✅ Add all required images (see ASSET_REQUIREMENTS.md)
2. ✅ Test all pages load correctly
3. ✅ Verify no console errors in production build
4. ✅ Run `npm run build` to check for any issues

---

## 🚀 Status

**Current Status:** ✅ All functional errors fixed!

- ✅ No TypeScript errors
- ✅ No linter errors
- ✅ No React/Next.js errors
- ⚠️ Image 404s (expected, not an error)

**Ready to:**
- ✅ Develop and customize
- ✅ Add real images
- ✅ Deploy to production (after adding images)

---

## 📞 Need Help?

- Check `README.md` for full documentation
- See `QUICKSTART.md` for setup steps
- Read `ASSET_REQUIREMENTS.md` for image specs




