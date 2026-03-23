import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `;

    // Send email using Resend (recommended for Next.js)
    // You'll need to install: npm install resend
    // And set up your RESEND_API_KEY in environment variables
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@velouraexhibitions.com',
          to: 'info@velouraexhibition.com',
          subject: `New Contact Form Submission from ${name}`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Contact Form Submission</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 0;"><strong>Message:</strong></p>
                <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="color: #666; font-size: 14px;">
                This message was sent from the Veloura Exhibitions contact form.
              </p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Fallback: Log the submission for manual processing
      console.log('Contact Form Submission:', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { 
          success: true, 
          message: 'Message received. We will get back to you soon.',
          note: 'Email service temporarily unavailable, but your message has been logged.'
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}
