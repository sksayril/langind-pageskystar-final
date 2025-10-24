# Asset Requirements for Skystar Solution

This document outlines all image and asset requirements for the website.

## 📁 Directory Structure

```
public/
├── team/              # Team member photos
├── testimonials/      # Client testimonial photos
├── case-studies/      # Case study featured images
├── blog/              # Blog post featured images
├── about/             # About page images
├── og-image.jpg       # Default OpenGraph image
├── logo.png           # Company logo
└── grid.svg           # Background grid (✓ included)
```

## 🖼️ Image Specifications

### Team Photos (`/public/team/`)

All team photos should be:
- **Format**: JPG or WebP
- **Dimensions**: 500×500px (square, 1:1 ratio)
- **File size**: <100KB each
- **Style**: Professional headshots with consistent lighting and background

Required files:
- ✅ `alex.jpg` - Alex Rivera (Founder & CEO)
- ✅ `sarah.jpg` - Sarah Kim (Head of Strategy)
- ✅ `marcus.jpg` - Marcus Johnson (Creative Director)
- ✅ `priya.jpg` - Priya Patel (Head of Analytics)
- ✅ `jake.jpg` - Jake Wilson (Lead Developer)
- ✅ `lisa.jpg` - Lisa Chen (Content Strategist)

### Testimonial Photos (`/public/testimonials/`)

- **Format**: JPG or WebP
- **Dimensions**: 200×200px (square, 1:1 ratio)
- **File size**: <50KB each
- **Style**: Professional headshots

Required files:
- ✅ `sarah.jpg` - Sarah Johnson (TechGear Pro CEO)
- ✅ `michael.jpg` - Michael Chen (CloudSync Marketing Director)
- ✅ `emily.jpg` - Emily Rodriguez (HomeStyle Pros Founder)
- ✅ `david.jpg` - David Park (FitLife App VP)

### Case Study Images (`/public/case-studies/`)

- **Format**: JPG or WebP
- **Dimensions**: 1200×630px (OG ratio, ~1.91:1)
- **File size**: <200KB each
- **Style**: Professional, showcasing product/service or abstract visuals

Required files:
- ✅ `techgear.jpg` - E-commerce product showcase
- ✅ `cloudsync.jpg` - SaaS dashboard or cloud concept
- ✅ `homestyle.jpg` - Home services or local business

### Blog Post Images (`/public/blog/`)

- **Format**: JPG or WebP
- **Dimensions**: 1200×630px (OG ratio, ~1.91:1)
- **File size**: <200KB each
- **Style**: Related to article topic, professional

Required files:
- ✅ `what-is-aio.jpg` - AI/technology theme
- ✅ `what-is-lmo.jpg` - Language model/AI theme
- ✅ `seo-checklist-2025.jpg` - SEO/search theme
- ✅ `content-strategy.jpg` - Content/writing theme

### About Page Images (`/public/about/`)

- **Format**: JPG or WebP
- **Dimensions**: 1200×800px (landscape, 3:2 ratio)
- **File size**: <250KB
- **Style**: Professional, founder portrait or team environment

Required files:
- ✅ `founder.jpg` - Alex Rivera founder story image

### Brand Assets

**Logo** (`/public/logo.png`)
- **Format**: PNG with transparency
- **Dimensions**: 512×512px (square)
- **File size**: <100KB
- **Usage**: Header, footer, OpenGraph, structured data

**OpenGraph Default** (`/public/og-image.jpg`)
- **Format**: JPG or WebP
- **Dimensions**: 1200×630px
- **File size**: <200KB
- **Usage**: Default social media share image
- **Content**: Brand logo + tagline on branded background

## 🎨 Image Guidelines

### Photography Style
- **Lighting**: Bright, natural-looking
- **Background**: Clean, minimal, or branded
- **Composition**: Rule of thirds, good headroom
- **Color grading**: Slightly warm, professional

### Technical Requirements
- **Color space**: sRGB
- **Compression**: 80% quality for JPG, maximum for WebP
- **Optimization**: Run through image optimizer (ImageOptim, TinyPNG, etc.)
- **Naming**: Lowercase, hyphen-separated (e.g., `alex-rivera.jpg`)

### Accessibility
- All images must have descriptive alt text (handled in code)
- Ensure faces are clearly visible for team photos
- Avoid text in images when possible

## 📦 Temporary Placeholders

Until real assets are provided, you can use:

### Option 1: Generate via AI
- DALL-E, Midjourney, or Stable Diffusion
- Use professional headshot prompts
- Ensure commercial usage rights

### Option 2: Stock Photos
- Unsplash, Pexels (free, high-quality)
- Search terms: "professional headshot", "business portrait", "tech office"
- Ensure license allows commercial use

### Option 3: Placeholder Services
- `https://via.placeholder.com/500x500.png?text=Alex+Rivera`
- `https://ui-avatars.com/api/?name=Alex+Rivera&size=500`

## 🔄 Asset Updates

When updating assets:
1. Maintain exact file names and dimensions
2. Run through optimization tools
3. Test on multiple devices
4. Verify alt text is appropriate
5. Clear CDN cache if applicable

## ✅ Pre-Launch Checklist

Before launch, ensure:
- [ ] All team photos are professional and consistent
- [ ] All testimonial photos are provided
- [ ] Case study images are high-quality and relevant
- [ ] Blog images are created for all articles
- [ ] Logo works on dark backgrounds
- [ ] OG image displays correctly on social platforms
- [ ] All images are optimized (<100KB for photos)
- [ ] Images load fast on mobile (test on 3G)
- [ ] No placeholder images remain

## 📞 Questions?

Contact the design team for:
- Custom image creation
- Photo editing
- Brand guideline questions
- Asset optimization help

---

**Last Updated**: October 24, 2025  
**Maintained By**: Skystar Solution Team

