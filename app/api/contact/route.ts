import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        success: false,
        error: 'RESEND_API_KEY not found in environment variables',
        env: Object.keys(process.env).filter((key) => key.includes('RESEND')),
      });
    }

    const resend = new Resend(apiKey);

    // Test sending a simple email
    const { data, error } = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: ['setupmybusinessusa@gmail.com'],
      subject: 'Test from API',
      html: '<p>This is a test email from your API</p>',
    });

    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        errorType: error.name,
        suggestion: 'Check your API key and domain verification',
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      emailId: data?.id,
      apiKeyExists: !!apiKey,
      apiKeyLength: apiKey.length,
      apiKeyPrefix: apiKey.substring(0, 10) + '...',
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack,
    });
  }
}
