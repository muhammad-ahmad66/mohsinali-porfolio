import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  console.log('=== CONTACT API CALLED ===');

  try {
    // Get request body
    const body = await request.json();
    console.log('Body received:', body);

    const { name, email, projectType, message } = body;

    // Basic validation
    if (!name || !email || !projectType || !message) {
      console.log('Missing fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get API key
    const apiKey = process.env.RESEND_API_KEY;
    console.log('API Key exists:', !!apiKey);

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    console.log('Attempting to send email...');

    // Send email with onboarding email (guaranteed to work)
    const { data, error } = await resend.emails.send({
      from: 'Mohsin Ali Aziz <onboarding@resend.dev>',
      to: ['setupmybusinessusa@gmail.com'],
      replyTo: email,
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
Name: ${name}
Email: ${email}
Project: ${projectType}
Message: ${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      );
    }

    console.log('Email sent successfully! ID:', data?.id);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully!',
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
