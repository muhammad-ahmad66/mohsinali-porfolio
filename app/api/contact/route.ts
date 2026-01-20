// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';

// Initialize Resend - make sure API key exists
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, budget, message } = body;

    console.log('Received form data:', {
      name,
      email,
      phone,
      projectType,
      budget,
      message,
    });

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('Attempting to send email...');

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Mohsin Ali Aziz <onboarding@resend.dev>',
      to: ['setupmybusinessusa@gmail.com'], // Your email
      replyTo: email, // User's email for easy reply
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({
        name,
        email,
        phone,
        projectType,
        budget,
        message,
      }),
      // Plain text fallback
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Project Type: ${projectType}
Budget: ${budget || 'Not specified'}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      // Handle specific Resend errors
      if (error.message?.includes('validation_error')) {
        return NextResponse.json(
          {
            error:
              'Email validation failed. Please verify your domain at resend.com/domains',
            details: error.message,
          },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Provide more specific error messages
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
