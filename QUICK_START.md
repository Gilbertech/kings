# Kings Law Advocates Website - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Git for version control
- Vercel account for deployment

---

## 📦 Installation

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Setup Environment Variables
Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

Then update with your credentials:
```
EMAIL_USER=info@kingslawadvocates.com
EMAIL_PASSWORD=your-16-char-app-password
```

**How to Get Gmail App Password:**
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Generate password (16 characters)
4. Copy the password (without spaces) to EMAIL_PASSWORD

### 3. Run Development Server
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Key Files

### Important Directories
```
app/
├── page.tsx              # Home page
├── about/page.tsx        # About page
├── team/page.tsx         # Team listing
├── team/prince-gichaga/  # Individual profile (SEO optimized)
├── services/page.tsx     # Services page
├── practice-areas/page.tsx # Practice areas
├── insights/page.tsx     # Blog/insights page
├── client-portal/page.tsx # Client portal & contact
├── contact/page.tsx      # Direct contact page
├── api/contact/route.ts  # Email API endpoint
├── globals.css           # Brand colors & fonts
└── layout.tsx            # Main layout

components/
├── Navigation.tsx        # Main navigation with WhatsApp
├── Footer.tsx           # Footer section
├── BlogInsights.tsx     # Blog teaser component
└── ContactForm.tsx      # Reusable contact form
```

### Configuration Files
- `app/globals.css` - Brand colors, fonts, design tokens
- `.env.example` - Environment variable template
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration

---

## 🎨 Brand Assets

### Colors
- **Primary Blue**: #294188 (Deep professional)
- **Secondary Gold**: #bfa35f (Premium accent)
- **Background**: #f0ede6 (Warm cream)
- **Text**: #294188 (Primary foreground)

### Fonts
- **Headings**: Cinzel (all weights: 400-900)
- **Body**: Helvetica Neue fallback to system fonts

### Logo
- SVG logo embedded in Navigation component
- Located at: `components/Navigation.tsx`

---

## 📞 Contact Information

### Phone Numbers
- Primary: +254 715 326 849
- Secondary: +254 708 719 223
- WhatsApp: +254 715 550 550

### Email
- info@kingslawadvocates.com

### Office Address
- Manga House, Wing 2
- Vunoh Business Center
- Nairobi, Kenya

---

## 🔐 SEO Configuration

### Sheila Kiago (De-indexed)
- Page: `/team` (listed but not linked directly)
- Meta tags: noindex, nofollow
- Robots.txt: Disallowed
- Purpose: Low search visibility for corporate role

### Prince Gichaga (Fully Indexed)
- Page: `/team/prince-gichaga` (featured and linked)
- Meta tags: Full indexing enabled
- Robots.txt: Allowed
- Internal links from multiple pages
- Purpose: Maximum SEO visibility for managing partner

### Sitemap
- Location: `/sitemap.xml`
- Automatically generated from routes
- Includes all public pages

---

## ✉️ Email Integration

### Testing Contact Form
1. Go to `http://localhost:3000/client-portal`
2. Fill out the contact form
3. Submit the form
4. Check console for logs or Gmail inbox for sent email

### Email Flow
```
User fills form → Validation → API call → Email sent → Confirmation message
```

### Troubleshooting Email
1. **Password issues**: Verify 16-character app password
2. **Gmail settings**: Ensure "Less secure apps" access is enabled
3. **Env variables**: Check `.env.local` file exists
4. **Console logs**: Check browser console for error messages

---

## 📱 Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components are mobile-first responsive using Tailwind's responsive prefixes:
- `sm:` - Small screens
- `md:` - Medium screens
- `lg:` - Large screens

---

## 🧪 Testing Checklist

- [ ] Home page loads and displays all sections
- [ ] Navigation works on desktop and mobile
- [ ] Contact form submits successfully
- [ ] Email received at info@kingslawadvocates.com
- [ ] WhatsApp links open correctly
- [ ] All internal links work
- [ ] All external links open in new tabs
- [ ] Mobile menu opens/closes
- [ ] Images load and display properly
- [ ] Forms have proper validation
- [ ] No console errors

---

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Deploy Kings Law Advocates website"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to: https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"

### Step 3: Add Environment Variables
In Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add:
   - `EMAIL_USER`: info@kingslawadvocates.com
   - `EMAIL_PASSWORD`: your-16-char-password
3. Click "Deploy"

### Step 4: Custom Domain (Optional)
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records according to Vercel instructions

---

## 📊 SEO Best Practices

### On-Page SEO
- All pages have unique titles and descriptions
- Proper heading hierarchy (H1, H2, H3)
- Internal links to related content
- Keyword optimization
- Mobile responsive

### Technical SEO
- Sitemap submitted to Google Search Console
- Robots.txt properly configured
- Fast page load times (Next.js optimization)
- Proper meta tags on all pages
- Schema markup for rich snippets

### Content SEO
- Blog articles for authority building
- Fresh content regularly updated
- User-focused content strategy
- Internal linking structure
- Related content suggestions

---

## 🔄 Regular Maintenance

### Monthly Tasks
- [ ] Update blog with new article
- [ ] Check Google Analytics for traffic
- [ ] Monitor contact form submissions
- [ ] Review testimonials for accuracy

### Quarterly Tasks
- [ ] Update team information
- [ ] Review and update statistics
- [ ] Audit internal links
- [ ] Check Google Search Console alerts

### Annually Tasks
- [ ] Full website audit
- [ ] Update company information
- [ ] Review and refresh content
- [ ] Check SEO rankings

---

## 📚 Documentation Files

- **QUICK_START.md** (this file) - Quick reference
- **SETUP_INSTRUCTIONS.md** - Detailed setup guide
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT_SUMMARY.md** - Project overview
- **WEBSITE_UPDATES.md** - Enhancement details
- **FEATURES_CHECKLIST.md** - Complete features list

---

## 🆘 Support & Troubleshooting

### Common Issues

**Issue**: "Module not found" error
- **Solution**: Run `npm install` to ensure all dependencies are installed

**Issue**: Port 3000 already in use
- **Solution**: Use `npm run dev -- -p 3001` for different port

**Issue**: CSS not loading
- **Solution**: Delete `.next` folder and run `npm run dev` again

**Issue**: Email not sending
- **Solution**: Check environment variables in `.env.local`

**Issue**: Images not loading
- **Solution**: Ensure images are in `/public` folder

---

## 💡 Tips & Tricks

### Quick Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
```

### File Structure Navigation
```
/vercel/share/v0-project/
├── app/              # Pages and routes
├── components/       # Reusable components
├── public/          # Static assets
├── styles/          # CSS files
└── lib/             # Utilities
```

### Adding New Pages
1. Create folder in `/app`
2. Add `page.tsx` file
3. Add to Navigation component
4. Add to Sitemap if public

### Adding New Blog Posts
1. Sample articles in `/app/insights/page.tsx`
2. Update articles array with new content
3. Follow existing structure for consistency
4. Articles automatically appear in blog page

---

## 📞 Contact for Help

For issues or questions:
- Email: info@kingslawadvocates.com
- Phone: +254 715 326 849
- WhatsApp: +254 715 550 550

---

## ✅ Ready to Go!

Your Kings Law Advocates website is now ready for:
- ✅ Local development
- ✅ Testing and QA
- ✅ Deployment to Vercel
- ✅ Client use and engagement
- ✅ SEO optimization

Start by running `npm install && npm run dev` and visit http://localhost:3000

Happy developing! 🎉
