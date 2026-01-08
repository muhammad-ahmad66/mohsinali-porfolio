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
import { useToast } from '@/components/providers/toast-provider';

const projectTypes = [
  { value: 'custom-software', label: 'Custom Software Development' },
  { value: 'automation', label: 'Automation & Internal Tools' },
  { value: 'saas', label: 'Web Platform / SaaS' },
  { value: 'ai', label: 'AI Tools & Integrations' },
  { value: 'web', label: 'Web & Software Development' },
  { value: 'discord-telegram', label: 'Discord & Telegram Automation' },
  { value: 'marketing', label: 'Marketing & Ads Management' },
  { value: 'design', label: 'Branding & Design' },
  { value: 'seo', label: 'SEO & Content' },
  { value: 'video', label: 'Video Production' },
  { value: 'blockchain', label: 'Blockchain / Web3' },
  { value: 'consulting', label: 'Consulting / Strategy' },
  { value: 'other', label: 'Other' },
];

const budgetRanges = [
  { value: '1k-3k', label: '$1,000 – $3,000' },
  { value: '3k-5k', label: '$3,000 – $5,000' },
  { value: '5k-10k', label: '$5,000 – $10,000' },
  { value: '10k+', label: '$10,000+ (Custom Project)' },
  { value: 'unsure', label: 'Not sure yet' },
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
  const { toast } = useToast();
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
      toast({
        title: 'Please check your form',
        description: 'Some fields require your attention.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the form data to your API
      console.log('Form submitted:', formData);

      // Success toast
      toast({
        title: 'Thanks for reaching out!',
        description: "I'll review your message and follow up shortly.",
        type: 'success',
        duration: 6000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);

      // Error toast
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Send a Message</CardTitle>
        <p className="text-sm text-muted-foreground">
          Share a few details about your project and I'll get back to you within
          24–48 hours.
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
              placeholder="Briefly describe your project, goals, timeline, and any specific requirements."
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

          {/* Submit Button */}
          <div className="space-y-3">
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
                  Send Inquiry
                </>
              )}
            </Button>

            {/* Trust Line */}
            <p className="text-center text-xs text-muted-foreground">
              Working with clients across the USA, UK, Canada & Europe.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
