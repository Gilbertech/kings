# Quick Reference - Kings Law Advocates Database Setup

## TL;DR - Get Started in 3 Steps

### Step 1: Install & Setup
```bash
npm install
cp .env.example .env.local
```

### Step 2: Initialize Database
```bash
npm run prisma:migrate
```

### Step 3: Run & Test
```bash
npm run dev
# Visit http://localhost:3000/contact and submit test form
```

---

## Common Commands

```bash
# View database in browser
npm run prisma:studio

# Generate Prisma client
npm run prisma:generate

# Create/run migrations
npm run prisma:migrate

# Reset database (deletes all data!)
rm prisma/dev.db && npm run prisma:migrate
```

---

## What Got Fixed

### 1. SVG Style Error
**Problem**: React complained about style attributes in Navigation.tsx logo
**Solution**: Changed `style="stop-color:..."` to `stopColor="..."`
**Status**: ✅ Fixed

### 2. Database Added
**What**: SQLite database for contact form submissions
**Where**: `prisma/dev.db` (auto-created)
**Access**: Use `npm run prisma:studio`
**Status**: ✅ Ready

---

## Database Quick Info

### Tables
1. **ClientMessage** - Stores contact form submissions
2. **FAQ** - Stores FAQ entries (optional)

### New Contact Form Fields
- Urgency level (normal, urgent, very_urgent)
- Case type
- Internal notes
- Message status tracking

### What Happens Now
1. User submits contact form
2. Email sent to firm ✉️
3. Email sent to client (confirmation) ✉️
4. Message saved to database 📊
5. Can view in Prisma Studio 👀

---

## Accessing Stored Messages

### Option 1: Prisma Studio (Easiest)
```bash
npm run prisma:studio
```
Opens browser UI - no coding needed

### Option 2: Via Code
```typescript
import { prisma } from '@/lib/prisma'

const messages = await prisma.clientMessage.findMany({
  orderBy: { createdAt: 'desc' }
})
```

---

## Configuration

### .env.local Required
```env
DATABASE_URL="file:./prisma/dev.db"
EMAIL_USER=info@kingslawadvocates.com
EMAIL_PASSWORD=your-app-password
```

### For Production
Use PostgreSQL instead:
```env
DATABASE_URL="postgresql://user:pass@host:5432/db"
```

---

## Files Changed/Added

### Fixed
- `components/Navigation.tsx` - SVG attributes corrected

### Enhanced
- `components/ContactForm.tsx` - Added urgency field
- `app/api/contact/route.ts` - Database save added
- `package.json` - Prisma dependencies + scripts
- `.env.example` - DATABASE_URL added
- `.gitignore` - Database files excluded

### New
- `prisma/schema.prisma` - Database schema
- `prisma/migrations/` - Migration files
- `lib/prisma.ts` - Prisma client
- `DATABASE_SETUP.md` - Setup guide
- `DATABASE_INTEGRATION.md` - Technical docs
- `CORRECTIONS_AND_UPDATES.md` - Full change log

---

## Troubleshooting

### Issue: "Cannot find module @prisma/client"
```bash
npm install
npm run prisma:generate
```

### Issue: "Database file not created"
```bash
npm run prisma:migrate
```

### Issue: "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### Issue: "Email not working"
Check `.env.local` has correct EMAIL_USER and EMAIL_PASSWORD

---

## Next Phase Features

Ready to build:
- Admin dashboard to view messages
- Automated reply system
- Case status updates
- Client portal login
- Message search/filtering

---

## Support Files

1. **DATABASE_SETUP.md** - Full setup instructions
2. **DATABASE_INTEGRATION.md** - Technical implementation
3. **CORRECTIONS_AND_UPDATES.md** - All changes made
4. **QUICK_START.md** - Beginner guide
5. This file - Quick reference

---

## Important Links

- **Prisma Docs**: https://www.prisma.io/docs/
- **SQLite**: https://www.sqlite.org/
- **Next.js API Routes**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

---

## Status Check

- ✅ SVG error fixed
- ✅ Database schema created
- ✅ API route updated
- ✅ Contact form enhanced
- ✅ Email integration working
- ✅ Documentation complete
- ✅ Ready for development

---

**You're all set!** Start with `npm run dev` and begin testing.
