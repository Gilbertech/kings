import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { prisma } from '@/lib/prisma'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: string
  message: string
  caseType?: string
  urgency?: string
}

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validation
    if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 })
    }

    const clientName = `${body.firstName} ${body.lastName}`

    // Save message to database
    try {
      await prisma.clientMessage.create({
        data: {
          name: clientName,
          email: body.email,
          phone: body.phone || null,
          subject: body.subject,
          message: body.message,
          caseType: body.caseType || null,
          urgency: body.urgency || 'normal',
          status: 'new',
        },
      })
    } catch (dbError) {
      console.error('Database error:', dbError)
      // Continue with email even if database save fails
    }

    // Email to firm
    const firmEmailContent = `
      <h2>New Client Inquiry</h2>
      <p><strong>From:</strong> ${clientName}</p>
      <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
      ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
      <p><strong>Subject:</strong> ${body.subject}</p>
      <hr />
      <h3>Message:</h3>
      <p>${body.message.replace(/\n/g, '<br>')}</p>
    `

    // Send email to Kings Law Advocates
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@kingslawadvocates.com',
      subject: `New Inquiry: ${body.subject}`,
      html: firmEmailContent,
      replyTo: body.email,
    })

    // Confirmation email to client
    const clientEmailContent = `
      <h2>Thank You for Contacting Kings Law Advocates</h2>
      <p>Dear ${body.firstName},</p>
      <p>Thank you for reaching out to us. We have received your inquiry regarding <strong>${body.subject}</strong>.</p>
      <p>Our team will review your message and get back to you as soon as possible, typically within 24 business hours.</p>
      <hr />
      <h3>Your Inquiry Details:</h3>
      <p><strong>Subject:</strong> ${body.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message.replace(/\n/g, '<br>')}</p>
      <hr />
      <p>Best regards,<br />Kings Law Advocates LLP Team</p>
      <p style="margin-top: 20px; font-size: 12px; color: #666;">
        <strong>Kings Law Advocates LLP</strong><br />
        Manga House, Wing 2<br />
        Vunoh Business Center<br />
        Nairobi, Kenya<br />
        Phone: +254 715 326 849 | +254 708 719 223<br />
        Email: info@kingslawadvocates.com<br />
        KRA PIN: P052494595U
      </p>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: 'Re: Your Inquiry to Kings Law Advocates',
      html: clientEmailContent,
    })

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 })
  }
}
