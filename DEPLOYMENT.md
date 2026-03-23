# Kings Law Advocates Website - Deployment Guide

## Overview
This is a professional legal services website for Kings Law Advocates LLP, built with Next.js 16, featuring:
- Premium responsive design with custom brand colors
- Comprehensive team and services pages
- Client portal with secure contact form
- SEO optimization with selective indexing
- Email integration for client inquiries

## Environment Setup

### 1. Email Configuration
The contact form uses nodemailer with Gmail for sending emails.

#### Gmail Setup:
1. Enable 2-Factor Authentication on your Gmail account
2. Visit: https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your device)
4. Generate a 16-character app password
5. Copy this password to your environment variables

#### Environment Variables:
```env
EMAIL_USER=info@kingslawadvocates.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

### 2. Vercel Deployment

#### Prerequisites:
- Vercel account
- GitHub repository connected

#### Steps:
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel Dashboard:
   - Go to Settings → Environment Variables
   - Add `EMAIL_USER` and `EMAIL_PASSWORD`
4. Deploy (automatic on push to main branch)

## SEO Implementation

### SEO Features Implemented:
1. **Metadata Optimization**
   - Dynamic page titles and descriptions
   - Open Graph tags for social sharing
   - Proper keyword targeting

2. **Structured Data**
   - Sitemap: `/app/sitemap.ts`
   - Robots.txt: `/public/robots.txt`

3. **Selective Indexing**
   - Prince Gichaga's page: FULLY indexed (priority 0.9)
   - Sheila Kiago's page: De-indexed via robots.txt
   - All other pages: Standard indexing

4. **URL Structure**
   - Clean, semantic URLs
   - Proper hierarchy: `/team/prince-gichaga`
   - Internal linking strategy

### Checking SEO Status:
- Sitemap: `https://kingslawadvocates.com/sitemap.xml`
- Robots.txt: `https://kingslawadvocates.com/robots.txt`
- Check Google Search Console for indexing status

## Contact Form Implementation

### How It Works:
1. User submits form via Client Portal
2. Form data sent to `/api/contact` endpoint
3. Email sent to: `info@kingslawadvocates.com`
4. Confirmation email sent to user
5. Both emails include firm contact details

### Testing:
1. Start development server: `npm run dev`
2. Navigate to `/client-portal`
3. Fill out contact form
4. Check both firm and user inboxes for emails

## Project Structure

```
/app
  /api/contact/route.ts         - Contact form API endpoint
  /about/page.tsx               - About page
  /team/page.tsx                - Team listing page
  /team/prince-gichaga/page.tsx - Prince's profile (SEO optimized)
  /services/page.tsx            - Services overview
  /practice-areas/page.tsx       - Detailed practice areas
  /client-portal/page.tsx        - Client portal & contact form
  /contact/page.tsx             - Contact page
  page.tsx                      - Home page
  layout.tsx                    - Root layout with metadata
  globals.css                   - Design system & brand colors

/components
  Navigation.tsx                - Header navigation
  Footer.tsx                    - Footer with contact info
  ContactForm.tsx               - Reusable contact form component

/public
  robots.txt                    - SEO robots configuration
```

## Brand Colors

- **Primary Blue**: #294188
- **Secondary Gold**: #bfa35f
- **Background Cream**: #f0ede6
- **Text Gray**: #666666

## Important Links

### Internal Navigation:
- Home: `/`
- About: `/about`
- Team: `/team`
- Prince Gichaga Profile: `/team/prince-gichaga`
- Services: `/services`
- Practice Areas: `/practice-areas`
- Client Portal: `/client-portal`
- Contact: `/contact`

### External:
- Email: info@kingslawadvocates.com
- Phone: +254 715 326 849 / +254 708 719 223
- Office: Manga House, Wing 2, Nairobi, Kenya

## Maintenance

### Regular Tasks:
1. Monitor contact form submissions
2. Check Google Search Console for indexing
3. Review analytics for user engagement
4. Update team information as needed
5. Keep practice areas current

### Adding New Content:
1. Create new page in appropriate `/app` folder
2. Update Navigation.tsx if adding to main menu
3. Update sitemap.ts if changing page structure
4. Test responsive design on mobile devices

## Troubleshooting

### Contact Form Not Sending:
1. Check EMAIL_USER and EMAIL_PASSWORD are correct
2. Verify Gmail app password is entered (not account password)
3. Check Vercel logs for errors
4. Ensure less secure apps is allowed if not using app password

### Pages Not Appearing in Google Search:
1. Check robots.txt is accessible
2. Submit sitemap to Google Search Console
3. Check for canonical issues
4. Verify page metadata is present

## Support

For technical support, contact the development team or check Next.js documentation at https://nextjs.org.

---

Last Updated: 2026-03-18
