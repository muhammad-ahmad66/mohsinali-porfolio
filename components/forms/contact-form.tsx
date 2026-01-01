// components/forms/contact-form.tsx
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Loader2 } from 'lucide-react';

const projectTypes = [
  { value: 'web', label: 'Web & Software Development' },
  { value: 'automation', label: 'Discord & Telegram Automation' },
  { value: 'marketing', label: 'Marketing & Ads Management' },
  { value: 'design', label: 'Branding & Design' },
  { value: 'seo', label: 'SEO & Content' },
  { value: 'video', label: 'Video Production' },
  { value: 'blockchain', label: 'Blockchain / Web3' },
  { value: 'ai', label: 'AI & Automation' },
  { value: 'other', label: 'Other' },
];

const budgetRanges = [
  { value: '1k-3k', label: '$1,000 – $3,000' },
  { value: '3k-5k', label: '$3,000 – $5,000' },
  { value: '5k-10k', label: '$5,000 – $10,000' },
  { value: '10k+', label: '$10,000+ (Custom Project)' },
  { value: 'unsure', label: 'Not Sure Yet' },
];

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the form data to your API
      console.log('Form submitted:', formData);

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Send a Message</CardTitle>
        <p className="text-muted-foreground text-sm">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" required>
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                error={errors.name}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label htmlFor="email" required>
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                error={errors.email}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <Label htmlFor="projectType" required>
              Project Type
            </Label>
            <Select
              options={projectTypes}
              value={formData.projectType}
              onChange={(value) => {
                setFormData({ ...formData, projectType: value });
                if (errors.projectType)
                  setErrors({ ...errors, projectType: undefined });
              }}
              placeholder="Select your project type"
              error={errors.projectType}
              disabled={isSubmitting}
            />
          </div>

          {/* Budget Range */}
          <div>
            <Label htmlFor="budget">Budget Range (Optional)</Label>
            <Select
              options={budgetRanges}
              value={formData.budget}
              onChange={(value) => setFormData({ ...formData, budget: value })}
              placeholder="Select your budget range"
              disabled={isSubmitting}
            />
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" required>
              Project Details
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project, goals, and requirements..."
              rows={6}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message)
                  setErrors({ ...errors, message: undefined });
              }}
              error={errors.message}
              disabled={isSubmitting}
            />
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
