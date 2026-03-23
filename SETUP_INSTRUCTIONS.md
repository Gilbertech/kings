# Kings Law Advocates Website - Setup Instructions

## Quick Start (5 minutes)

### Step 1: Clone or Download Project
```bash
git clone <your-repo-url>
cd kings-law-advocates
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Setup Environment Variables
1. Copy `.env.example` to `.env.local`
2. Add your Gmail credentials (see Gmail Setup below)

### Step 4: Start Development Server
```bash
npm run dev
```

### Step 5: Open in Browser
Navigate to: `http://localhost:3000`

---

## Email Configuration (Gmail)

### For Testing/Development:

1. **Create or use your Gmail account**
   - Example: `info@kingslawadvocates.com`

2. **Enable 2-Factor Authentication:**
   - Go to: https://myaccount.google.com/security
   - Click "2-Step Verification"
   - Follow the prompts

3. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Google generates 16-character password
   - Copy this password

4. **Add to `.env.local`:**
   ```env
   EMAIL_USER=info@kingslawadvocates.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

5. **Restart Dev Server:**
   ```bash
   npm run dev
   ```

6. **Test the Contact Form:**
   - Go to: http://localhost:3000/client-portal
   - Fill out the form
   - Check both:
     - Your inbox (should get submission)
     - Test email (should get confirmation)

---

## Pages Available

Visit these URLs in your browser:

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing page & overview |
| About | `/about` | Company mission & values |
| Team | `/team` | Team listing |
| Prince's Profile | `/team/prince-gichaga` | SEO-optimized managing partner |
| Services | `/services` | Service offerings |
| Practice Areas | `/practice-areas` | Detailed practice areas |
| Client Portal | `/client-portal` | Contact form & portal |
| Contact | `/contact` | Contact information |

---

## Development Tips

### File Structure Overview
- `/app` - All pages and API routes
- `/components` - Reusable React components
- `/public` - Static files (robots.txt)
- `app/globals.css` - Design tokens and brand colors
- `app/layout.tsx` - Root layout with metadata

### Editing Content
- **Brand Colors** - Edit in `app/globals.css`
- **Navigation Links** - Edit in `components/Navigation.tsx`
- **Footer Content** - Edit in `components/Footer.tsx`
- **Page Content** - Edit individual page files in `/app`

### Testing Responsiveness
1. Open DevTools (F12)
2. Click device toolbar icon
3. Test on mobile, tablet, desktop sizes

---

## Deployment to Vercel

### Prerequisites
- GitHub account with repository
- Vercel account (free)

### Steps:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to: https://vercel.com/new
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Click "Import"

3. **Add Environment Variables**
   - In Vercel Dashboard, go to Settings
   - Click "Environment Variables"
   - Add `EMAIL_USER` and `EMAIL_PASSWORD`
   - Redeploy

4. **Custom Domain (Optional)**
   - In Vercel Dashboard, go to Settings → Domains
   - Add your domain
   - Update DNS records

5. **Your Site is Live!**
   - Default URL: `https://kings-law-advocates.vercel.app`
   - Or your custom domain

---

## Testing Checklist

### Contact Form
- [ ] Fill out all required fields
- [ ] Submit the form
- [ ] Check submission email arrives
- [ ] Check confirmation email to user
- [ ] Test error handling (try invalid email)

### Navigation
- [ ] All menu links work
- [ ] Mobile menu opens/closes
- [ ] Links navigate to correct pages

### SEO
- [ ] Check `/sitemap.xml` is accessible
- [ ] Check `/robots.txt` is accessible
- [ ] Verify page titles are unique
- [ ] Test meta descriptions display in browser

### Responsiveness
- [ ] Test on mobile (320px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1920px)
- [ ] Verify all text is readable

---

## Common Issues & Solutions

### Contact Form Not Working

**Issue:** "Failed to send message"

**Solutions:**
1. Check `.env.local` has correct credentials
2. Verify EMAIL_USER and EMAIL_PASSWORD are not empty
3. Ensure 2-Factor Authentication is enabled on Gmail
4. Check Gmail app password is used (not account password)
5. Check console for specific error messages

### Email Not Sending

**Issue:** Form submits but no email received

**Solutions:**
1. Check Gmail "Allow less secure apps" setting
2. Verify email address is in EMAIL_USER
3. Check Gmail spam folder
4. Try different email addresses
5. Check Vercel logs: `vercel logs`

### Pages Look Wrong

**Issue:** Styling is broken or colors are off

**Solutions:**
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check `app/globals.css` is imported in `layout.tsx`
4. Verify Tailwind CSS is working: check DevTools styles

### Mobile Menu Not Working

**Issue:** Hamburger menu doesn't open on mobile

**Solutions:**
1. Check viewport meta tag in layout.tsx
2. Test in different mobile browser
3. Clear browser cache
4. Verify ContactForm component is client-side ('use client')

---

## Important Security Notes

1. **Never commit `.env.local`**
   - It's in `.gitignore` - keep it that way
   - Only share `.env.example`

2. **Gmail App Password Security**
   - Use app-specific password, not account password
   - Rotate passwords periodically
   - Don't share credentials

3. **For Production**
   - Consider using email service (SendGrid, Resend)
   - Add rate limiting to contact form
   - Implement CAPTCHA if getting spam
   - Add authentication for admin areas

---

## Next Steps After Deployment

1. **Test Everything Again**
   - Test all forms
   - Verify all links
   - Check on mobile devices

2. **Submit to Search Engines**
   - Google Search Console: Submit sitemap
   - Bing Webmaster Tools: Submit sitemap
   - Monitor indexing status

3. **Setup Analytics**
   - Add Google Analytics
   - Monitor user behavior
   - Track contact form submissions

4. **Regular Maintenance**
   - Review contact form submissions
   - Update team information
   - Keep content current
   - Monitor for broken links

---

## Support Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev
- Nodemailer: https://nodemailer.com/smtp

### Project Files
- `PROJECT_SUMMARY.md` - Comprehensive project overview
- `DEPLOYMENT.md` - Detailed deployment guide
- `README.md` - (if exists) Additional information

### Contact
- Firm Email: info@kingslawadvocates.com
- Firm Phone: +254 715 326 849

---

## Troubleshooting Deployment

### Vercel Build Fails

**Check:**
1. Log into Vercel Dashboard
2. Go to project → Deployments
3. Click latest build
4. Check "Build Logs" for errors
5. Common issues:
   - Missing environment variables
   - Node version incompatibility
   - Dependency installation failure

### Site Works Locally but Not on Vercel

**Solutions:**
1. Add all environment variables to Vercel
2. Push latest code to GitHub
3. Trigger manual redeploy in Vercel
4. Clear Vercel cache: Redeploy option

---

## Performance Optimization

### Already Optimized:
- ✅ Image lazy loading
- ✅ CSS code splitting
- ✅ Next.js automatic optimization
- ✅ Responsive images
- ✅ Caching headers

### Optional Enhancements:
- Add Google Analytics
- Setup CDN for static assets
- Enable compression
- Minimize JavaScript

---

## Questions or Issues?

1. **Check the documentation files:**
   - `PROJECT_SUMMARY.md` - Full project overview
   - `DEPLOYMENT.md` - Deployment details
   - This file - Setup and troubleshooting

2. **Test locally first:**
   - Most issues occur in local setup
   - Verify environment variables are correct
   - Check console for error messages

3. **Contact the development team:**
   - Email: info@kingslawadvocates.com
   - Include error messages and steps to reproduce

---

**Setup Complete!** 🎉

Your Kings Law Advocates website is ready to go. Start the development server and enjoy!

```bash
npm run dev
```

Good luck! 🚀
