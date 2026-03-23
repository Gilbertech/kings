# Database Setup Guide for Kings Law Advocates

## Overview

Your Kings Law Advocates website uses **Prisma ORM** with **SQLite** for local development. The database stores client messages from the contact form and FAQ entries.

## Quick Start

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Create Environment File
Copy the example environment file:
```bash
cp .env.example .env.local
```

Then edit `.env.local` and ensure you have:
```env
DATABASE_URL="file:./prisma/dev.db"
```

### 3. Initialize Database

Run the Prisma setup command:
```bash
npm run prisma:generate
npm run prisma:migrate
```

This will:
- Create the SQLite database file at `prisma/dev.db`
- Run migrations to create tables
- Generate Prisma client

### 4. Verify Setup

Start your development server:
```bash
npm run dev
```

Visit the contact form at `http://localhost:3000/contact` and submit a test message. The message should be saved to the database.

## Database Schema

### ClientMessage Table
Stores all client inquiries from the contact form:
- `id` - Unique identifier (auto-generated)
- `name` - Client full name
- `email` - Client email address
- `phone` - Client phone (optional)
- `subject` - Practice area/subject
- `message` - Full message content
- `caseType` - Type of case (optional)
- `budget` - Budget information (optional)
- `urgency` - Urgency level (normal, urgent, very_urgent)
- `status` - Message status (new, in_progress, resolved, closed)
- `notes` - Internal notes
- `createdAt` - Timestamp when created
- `updatedAt` - Timestamp when last updated

### FAQ Table
Stores FAQ entries for display on website:
- `id` - Unique identifier
- `question` - FAQ question
- `answer` - FAQ answer
- `category` - FAQ category
- `order` - Display order
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

## Useful Commands

```bash
# View database in browser UI
npm run prisma:studio

# Create new migration
npm run prisma:migrate

# Generate Prisma client (run after schema changes)
npm run prisma:generate
```

## Production Deployment

For production on Vercel, you'll need to:

1. **Upgrade Database**: SQLite is for local development. For production, use:
   - **Neon** (serverless PostgreSQL) - Recommended
   - **Supabase** (PostgreSQL with auth)
   - **PlanetScale** (MySQL)
   - **AWS RDS**

2. **Update Database URL**:
   ```env
   DATABASE_URL="postgresql://user:password@host:port/database"
   ```

3. **Run Migrations on Vercel**:
   Add to `package.json` scripts:
   ```json
   "postinstall": "prisma generate && prisma migrate deploy"
   ```

4. **Environment Variables**:
   Add `DATABASE_URL` to Vercel project settings

## File Locations

- **Schema**: `prisma/schema.prisma`
- **Database**: `prisma/dev.db` (local only)
- **Client**: `lib/prisma.ts`
- **API Route**: `app/api/contact/route.ts`
- **Migrations**: `prisma/migrations/` (auto-created)

## Troubleshooting

### Database file not created
- Ensure `DATABASE_URL` in `.env.local` is correct
- Run `npm run prisma:migrate` again
- Check file permissions on `prisma/` directory

### "PrismaClientInitializationError"
- Delete `node_modules` and `.next` folder
- Run `npm install` and `npm run prisma:generate`

### Prisma Studio won't open
- Ensure database is initialized first
- Run `npm run prisma:migrate` before `npm run prisma:studio`

## Data Viewing

To view stored client messages:

1. **Via Prisma Studio** (recommended):
   ```bash
   npm run prisma:studio
   ```
   Opens browser UI at `http://localhost:5555`

2. **Via API** (create custom admin endpoint):
   You can build an admin dashboard to view messages

3. **Programmatically**:
   ```typescript
   import { prisma } from '@/lib/prisma'
   
   const messages = await prisma.clientMessage.findMany({
     orderBy: { createdAt: 'desc' }
   })
   ```

## Next Steps

1. Set up an admin dashboard to view client messages
2. Migrate to PostgreSQL/Neon for production
3. Add email notifications when new messages arrive
4. Create automated message status updates
5. Add client authentication to view their case status
