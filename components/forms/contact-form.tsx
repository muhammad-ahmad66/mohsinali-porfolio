// 'use client';

// import * as React from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Select } from '@/components/ui/select';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Send, Loader2 } from 'lucide-react';
// import { useToast } from '@/components/providers/toast-provider';

// const projectTypes = [
//   { value: 'custom-software', label: 'Custom Software Development' },
//   { value: 'automation', label: 'Automation & Internal Tools' },
//   { value: 'saas', label: 'Web Platform / SaaS' },
//   { value: 'ai', label: 'AI Tools & Integrations' },
//   { value: 'web', label: 'Web & Software Development' },
//   { value: 'discord-telegram', label: 'Discord & Telegram Automation' },
//   { value: 'marketing', label: 'Marketing & Ads Management' },
//   { value: 'design', label: 'Branding & Design' },
//   { value: 'seo', label: 'SEO & Content' },
//   { value: 'video', label: 'Video Production' },
//   { value: 'blockchain', label: 'Blockchain / Web3' },
//   { value: 'consulting', label: 'Consulting / Strategy' },
//   { value: 'other', label: 'Other' },
// ];

// const budgetRanges = [
//   { value: '1k-3k', label: '$1,000 – $3,000' },
//   { value: '3k-5k', label: '$3,000 – $5,000' },
//   { value: '5k-10k', label: '$5,000 – $10,000' },
//   { value: '10k+', label: '$10,000+ (Custom Project)' },
//   { value: 'unsure', label: 'Not sure yet' },
// ];

// interface FormData {
//   name: string;
//   email: string;
//   projectType: string;
//   budget: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   projectType?: string;
//   message?: string;
// }

// export function ContactForm() {
//   const { toast } = useToast();
//   const [formData, setFormData] = React.useState<FormData>({
//     name: '',
//     email: '',
//     projectType: '',
//     budget: '',
//     message: '',
//   });

//   const [errors, setErrors] = React.useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = React.useState(false);

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.projectType) {
//       newErrors.projectType = 'Please select a project type';
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = 'Message must be at least 10 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast({
//         title: 'Please check your form',
//         description: 'Some fields require your attention.',
//         type: 'error',
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       console.log('Sending form data:', formData);

//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log('API response:', data);

//       if (!response.ok) {
//         throw new Error(
//           data.error || `Failed to send message (${response.status})`
//         );
//       }

//       // Success toast
//       toast({
//         title: 'Message sent successfully! 🎉',
//         description:
//           "Thanks for reaching out! I'll review your message and get back to you within 24-48 hours.",
//         type: 'success',
//         duration: 6000,
//       });

//       // Reset form
//       setFormData({
//         name: '',
//         email: '',
//         projectType: '',
//         budget: '',
//         message: '',
//       });
//       setErrors({});
//     } catch (error) {
//       console.error('Error submitting form:', error);

//       // Error toast with more specific messages
//       let errorMessage = 'Please try again or contact me directly.';

//       if (error instanceof Error) {
//         if (error.message.includes('Failed to send email')) {
//           errorMessage = 'Email service issue. Please try again later.';
//         } else if (error.message.includes('500')) {
//           errorMessage = 'Server error. Please try again in a few moments.';
//         } else {
//           errorMessage = error.message;
//         }
//       }

//       toast({
//         title: 'Something went wrong',
//         description: errorMessage,
//         type: 'error',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Card className="shadow-xl">
//       <CardHeader>
//         <CardTitle className="text-2xl">Send a Message</CardTitle>
//         <p className="text-sm text-muted-foreground">
//           Share a few details about your project and I'll get back to you within
//           24–48 hours.
//         </p>
//       </CardHeader>

//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name and Email Row */}
//           <div className="grid gap-6 sm:grid-cols-2">
//             <div>
//               <Label htmlFor="name" required>
//                 Full Name
//               </Label>
//               <Input
//                 id="name"
//                 type="text"
//                 placeholder="John Doe"
//                 value={formData.name}
//                 onChange={(e) => {
//                   setFormData({ ...formData, name: e.target.value });
//                   if (errors.name) setErrors({ ...errors, name: undefined });
//                 }}
//                 error={errors.name}
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div>
//               <Label htmlFor="email" required>
//                 Email Address
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="john@example.com"
//                 value={formData.email}
//                 onChange={(e) => {
//                   setFormData({ ...formData, email: e.target.value });
//                   if (errors.email) setErrors({ ...errors, email: undefined });
//                 }}
//                 error={errors.email}
//                 disabled={isSubmitting}
//               />
//             </div>
//           </div>

//           {/* Project Type */}
//           <div>
//             <Label htmlFor="projectType" required>
//               Project Type
//             </Label>
//             <Select
//               options={projectTypes}
//               value={formData.projectType}
//               onChange={(value) => {
//                 setFormData({ ...formData, projectType: value });
//                 if (errors.projectType)
//                   setErrors({ ...errors, projectType: undefined });
//               }}
//               placeholder="Select your project type"
//               error={errors.projectType}
//               disabled={isSubmitting}
//             />
//           </div>

//           {/* Budget Range */}
//           <div>
//             <Label htmlFor="budget">Budget Range</Label>
//             <Select
//               options={budgetRanges}
//               value={formData.budget}
//               onChange={(value) => setFormData({ ...formData, budget: value })}
//               placeholder="Select your budget range"
//               disabled={isSubmitting}
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <Label htmlFor="message" required>
//               Project Details
//             </Label>
//             <Textarea
//               id="message"
//               placeholder="Briefly describe your project, goals, timeline, and any specific requirements."
//               rows={6}
//               value={formData.message}
//               onChange={(e) => {
//                 setFormData({ ...formData, message: e.target.value });
//                 if (errors.message)
//                   setErrors({ ...errors, message: undefined });
//               }}
//               error={errors.message}
//               disabled={isSubmitting}
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="space-y-3">
//             <Button
//               type="submit"
//               size="lg"
//               className="w-full gap-2"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   {/* <Send className="h-5 w-5" /> */}
//                   Send Inquiry
//                 </>
//               )}
//             </Button>

//             {/* Trust Line */}
//             <p className="text-center text-xs text-muted-foreground">
//               Working with clients across the USA, UK, Canada & Europe.
//             </p>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }

// components/forms/contact-form.tsx
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Loader2, Search, Check, ChevronDown } from 'lucide-react';
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

const countries = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮' },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
];

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    countryCode: 'US',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = React.useState(false);
  const [countrySearch, setCountrySearch] = React.useState('');

  const selectedCountry =
    countries.find((c) => c.code === formData.countryCode) || countries[0];

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.dialCode.includes(countrySearch)
  );

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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{6,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
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
      const fullPhone = `${selectedCountry.dialCode}${formData.phone}`;
      const submitData = { ...formData, phone: fullPhone };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || `Failed to send message (${response.status})`
        );
      }

      toast({
        title: 'Message sent successfully! 🎉',
        description:
          "Thanks for reaching out! I'll review your message and get back to you within 24-48 hours.",
        type: 'success',
        duration: 6000,
      });

      setFormData({
        name: '',
        email: '',
        countryCode: 'US',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);

      let errorMessage = 'Please try again or contact me directly.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: 'Something went wrong',
        description: errorMessage,
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-border/50 bg-gradient-to-br from-card via-card to-muted/20 shadow-2xl">
      <CardHeader className="border-b border-border/50 pb-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600">
            <Send className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-2xl">Let's Start Your Project</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your project details and I'll get back to you within 24–48
              hours.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="group">
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
              className="transition-all focus:ring-2 focus:ring-primary-600/20"
            />
          </div>

          {/* Email Field */}
          <div className="group">
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
              className="transition-all focus:ring-2 focus:ring-primary-600/20"
            />
          </div>

          {/* Phone Number with Country Selector */}
          <div className="group">
            <Label htmlFor="phone" required>
              Phone Number
            </Label>
            <div className="flex gap-2">
              {/* Country Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                  className="flex h-11 items-center gap-2 rounded-lg border border-input bg-background px-3 transition-all hover:border-primary-600/50 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                  disabled={isSubmitting}
                >
                  <span className="text-xl">{selectedCountry.flag}</span>
                  <span className="text-sm font-medium">
                    {selectedCountry.dialCode}
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>

                {/* Dropdown Menu */}
                {countryDropdownOpen && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-lg border border-border bg-card shadow-xl">
                    {/* Search */}
                    <div className="border-b border-border p-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Search countries..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-3 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                        />
                      </div>
                    </div>
                    {/* Country List */}
                    <div className="max-h-60 overflow-y-auto">
                      {filteredCountries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              countryCode: country.code,
                            });
                            setCountryDropdownOpen(false);
                            setCountrySearch('');
                          }}
                          className="flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-muted"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="flex-1 text-sm">{country.name}</span>
                          <span className="text-sm font-medium text-muted-foreground">
                            {country.dialCode}
                          </span>
                          {country.code === formData.countryCode && (
                            <Check className="h-4 w-4 text-primary-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Phone Input */}
              <div className="flex-1">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="1234567890"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setFormData({ ...formData, phone: value });
                    if (errors.phone)
                      setErrors({ ...errors, phone: undefined });
                  }}
                  error={errors.phone}
                  disabled={isSubmitting}
                  className="transition-all focus:ring-2 focus:ring-primary-600/20"
                />
              </div>
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Project Type & Budget in Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group">
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
                placeholder="Select project type"
                error={errors.projectType}
                disabled={isSubmitting}
              />
            </div>

            <div className="group">
              <Label htmlFor="budget">Budget Range</Label>
              <Select
                options={budgetRanges}
                value={formData.budget}
                onChange={(value) =>
                  setFormData({ ...formData, budget: value })
                }
                placeholder="Select budget"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Message */}
          <div className="group">
            <Label htmlFor="message" required>
              Project Details
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project goals, timeline, and any specific requirements..."
              rows={6}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message)
                  setErrors({ ...errors, message: undefined });
              }}
              error={errors.message}
              disabled={isSubmitting}
              className="resize-none transition-all focus:ring-2 focus:ring-primary-600/20"
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              {formData.message.length} / 500 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className="space-y-4 pt-2">
            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 shadow-lg shadow-primary-600/25 transition-all hover:shadow-xl hover:shadow-primary-600/30"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>Send Inquiry</>
              )}
            </Button>

            {/* Trust Indicators */}
            <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
              <p className="text-center text-xs text-muted-foreground">
                🌍 Working with clients across the USA, UK, Canada & Europe
              </p>
              <p className="mt-1 text-center text-xs text-muted-foreground">
                ⚡ Average response time: 24-48 hours
              </p>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
