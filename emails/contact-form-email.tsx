// emails/contact-form-email.tsx
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  projectType,
  budget,
  message,
}: ContactFormEmailProps) => {
  const previewText = `New contact form submission from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo Section */}
          <Section style={logoSection}>
            <Img
              src="https://placehold.co/200x60/3B7FCC/ffffff/png?text=Mohsin+Ali+Aziz"
              width="200"
              height="60"
              alt="Mohsin Ali Aziz"
              style={logo}
            />
          </Section>

          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>New Contact Form Submission</Heading>
            <Text style={subtitle}>
              You have received a new inquiry from your website
            </Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            {/* Contact Details Card */}
            <Section style={card}>
              <Heading as="h2" style={h2}>
                Contact Information
              </Heading>
              <Hr style={divider} />

              <table style={infoTable}>
                <tr>
                  <td style={infoLabel}>Name:</td>
                  <td style={infoValue}>{name}</td>
                </tr>
                <tr>
                  <td style={infoLabel}>Email:</td>
                  <td style={infoValue}>
                    <Link href={`mailto:${email}`} style={link}>
                      {email}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={infoLabel}>Project Type:</td>
                  <td style={infoValue}>{projectType}</td>
                </tr>
                {budget && (
                  <tr>
                    <td style={infoLabel}>Budget:</td>
                    <td style={infoValue}>{budget}</td>
                  </tr>
                )}
              </table>
            </Section>

            {/* Message Card */}
            <Section style={card}>
              <Heading as="h2" style={h2}>
                Project Details
              </Heading>
              <Hr style={divider} />
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* CTA Button */}
            <Section style={buttonSection}>
              <Button style={button} href={`mailto:${email}`}>
                Reply to {name}
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={footerDivider} />
            <Text style={footerText}>
              This email was sent from your contact form at{' '}
              <Link href="https://mohsinaliaziz.com" style={footerLink}>
                mohsinaliaziz.com
              </Link>
            </Text>
            <Text style={footerText}>
              © {new Date().getFullYear()} Mohsin Ali Aziz. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0',
  marginBottom: '64px',
  maxWidth: '600px',
};

const logoSection = {
  padding: '40px 40px 20px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
};

const header = {
  padding: '0 40px 40px',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 12px',
  lineHeight: '1.3',
};

const subtitle = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
};

const content = {
  padding: '0 40px 40px',
};

const card = {
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
  padding: '24px',
  marginBottom: '24px',
  border: '1px solid #e5e7eb',
};

const h2 = {
  color: '#1a1a1a',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '0 0 20px',
};

const infoTable = {
  width: '100%',
  borderCollapse: 'collapse' as const,
};

const infoLabel = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  padding: '8px 16px 8px 0',
  verticalAlign: 'top' as const,
  width: '140px',
};

const infoValue = {
  color: '#1a1a1a',
  fontSize: '14px',
  padding: '8px 0',
  verticalAlign: 'top' as const,
};

const link = {
  color: '#3b7fcc',
  textDecoration: 'none',
};

const messageText = {
  color: '#1a1a1a',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const buttonSection = {
  padding: '24px 0',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#3b7fcc',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
  lineHeight: '1.5',
};

const footer = {
  padding: '0 40px 40px',
};

const footerDivider = {
  borderColor: '#e5e7eb',
  margin: '0 0 24px',
};

const footerText = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '20px',
  margin: '0 0 8px',
  textAlign: 'center' as const,
};

const footerLink = {
  color: '#3b7fcc',
  textDecoration: 'none',
};

export default ContactFormEmail;
