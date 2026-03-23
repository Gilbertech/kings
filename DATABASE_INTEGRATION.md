# Database Integration - Kings Law Advocates Client Portal

## System Architecture

```
Contact Form (ContactForm.tsx)
    ↓
API Route (/api/contact/route.ts)
    ↓
Prisma Client (lib/prisma.ts)
    ↓
SQLite Database (prisma/dev.db)
    ↓
Email Service (Nodemailer)
```

## Database Features

### 1. Client Message Storage
Every contact form submission is automatically saved to the database with:
- Client information (name, email, phone)
- Case details (practice area, message)
- Metadata (urgency, status, timestamp)
- Full audit trail (created/updated dates)

### 2. Message Status Tracking
Messages can have different statuses:
- `new` - Just received
- `in_progress` - Being worked on
- `resolved` - Issue resolved
- `closed` - Case closed

### 3. Urgency Levels
- `normal` - Standard response (24-48 hours)
- `urgent` - Quick response (same day)
- `very_urgent` - Immediate response required

## How It Works

### Step 1: Form Submission
```typescript
// User fills out form and submits
const formData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+254715123456',
  subject: 'Commercial Law',
  message: 'I need help with a contract',
  urgency: 'urgent'
}
```

### Step 2: API Processing
```typescript
// POST /api/contact receives the data
1. Validates input
2. Saves to database using Prisma
3. Sends confirmation email to client
4. Sends notification to firm
```

### Step 3: Database Record
```sql
-- Record created in ClientMessage table
INSERT INTO ClientMessage (
  id,
  name,
  email,
  phone,
  subject,
  message,
  urgency,
  status,
  createdAt,
  updatedAt
) VALUES (...)
```

### Step 4: Notifications
- Client receives confirmation email
- Firm receives notification at info@kingslawadvocates.com
- Message stored for internal tracking

## API Endpoint Details

### POST /api/contact

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+254715123456",
  "subject": "Commercial Law",
  "message": "Message content here",
  "caseType": "Contract Review",
  "urgency": "normal"
}
```

**Response (Success):**
```json
{
  "message": "Message sent successfully",
  "status": 200
}
```

**Response (Error):**
```json
{
  "message": "Error description",
  "status": 400 or 500
}
```

## Accessing Stored Data

### Via Prisma Studio (GUI)
```bash
npm run prisma:studio
```
Opens interactive database explorer at `http://localhost:5555`

### Via Code
```typescript
import { prisma } from '@/lib/prisma'

// Get all messages
const allMessages = await prisma.clientMessage.findMany()

// Get recent messages
const recent = await prisma.clientMessage.findMany({
  orderBy: { createdAt: 'desc' },
  take: 10
})

// Get urgent messages
const urgent = await prisma.clientMessage.findMany({
  where: { urgency: 'urgent' },
  orderBy: { createdAt: 'desc' }
})

// Get message by ID
const message = await prisma.clientMessage.findUnique({
  where: { id: 'message-id' }
})

// Update message status
await prisma.clientMessage.update({
  where: { id: 'message-id' },
  data: { status: 'in_progress' }
})
```

## Database Tables

### ClientMessage
```
Field        | Type     | Default      | Notes
-------------|----------|--------------|----------------------------------
id           | String   | cuid()       | Primary key, auto-generated
name         | String   | -            | Client full name (required)
email        | String   | -            | Client email (required, indexed)
phone        | String   | null         | Client phone (optional)
subject      | String   | -            | Practice area (required)
message      | String   | -            | Full message text (required)
caseType     | String   | null         | Type of case (optional)
budget       | String   | null         | Budget info (optional)
urgency      | String   | 'normal'     | Indexed: normal, urgent, very_urgent
status       | String   | 'new'        | Indexed: new, in_progress, resolved, closed
notes        | String   | null         | Internal notes
createdAt    | DateTime | now()        | Indexed, auto-set
updatedAt    | DateTime | now()        | Auto-updated
```

### FAQ
```
Field        | Type     | Default  | Notes
-------------|----------|----------|-------------------------------------
id           | String   | cuid()   | Primary key
question     | String   | -        | FAQ question
answer       | String   | -        | FAQ answer/content
category     | String   | -        | Indexed category
order        | Integer  | 0        | Display order
createdAt    | DateTime | now()    | Auto-set
updatedAt    | DateTime | now()    | Auto-updated
```

## Performance Features

### Indexes
Database has indexes on frequently queried fields:
- `ClientMessage.email` - Quick client lookup
- `ClientMessage.status` - Filter by status
- `ClientMessage.createdAt` - Sort by date
- `FAQ.category` - Filter by category

### Query Examples
```typescript
// Fast - uses index
const messages = await prisma.clientMessage.findMany({
  where: { email: 'john@example.com' }
})

// Fast - uses index
const urgent = await prisma.clientMessage.findMany({
  where: { status: 'urgent' }
})

// Fast - uses index, efficient sorting
const recent = await prisma.clientMessage.findMany({
  orderBy: { createdAt: 'desc' },
  take: 20
})
```

## Error Handling

The contact API has robust error handling:

```typescript
try {
  // Validates all required fields
  // Validates email format
  // Saves to database
  // Sends emails
} catch (error) {
  // Database errors don't prevent email sending
  // User still gets confirmation
  // Errors logged for debugging
}
```

## Migration from SQLite to Production DB

When moving to production (Neon, Supabase, etc.):

1. **Update .env**:
   ```env
   DATABASE_URL="postgresql://user:pass@host:5432/db"
   ```

2. **Run migration**:
   ```bash
   npm run prisma:migrate
   ```

3. **Data preservation**:
   - All existing schemas work with PostgreSQL
   - No schema changes needed
   - Existing data can be migrated using Prisma's migration tools

## Security Considerations

1. **Environment Variables**: Database URL in `.env.local`, never committed
2. **Input Validation**: All form fields validated before database insert
3. **Email Sanitization**: Email addresses escaped to prevent injection
4. **SQL Injection Prevention**: Prisma uses parameterized queries
5. **Access Control**: Database credentials never exposed in client code

## Monitoring & Maintenance

```bash
# Check database status
npm run prisma:studio

# Create backup (SQLite)
cp prisma/dev.db prisma/dev.db.backup

# Reset database (WARNING: deletes all data)
rm prisma/dev.db
npm run prisma:migrate
```

## Support

For issues or questions about the database setup, see:
- `DATABASE_SETUP.md` - Quick start guide
- `prisma/schema.prisma` - Database schema
- `app/api/contact/route.ts` - API implementation
