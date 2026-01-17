import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  Calendar,
  Globe,
  Download,
  Share2,
  MapPin,
  Briefcase,
  ExternalLink,
} from 'lucide-react';

const DigitalBusinessCard = () => {
  const [copied, setCopied] = useState(false);

  const contactInfo = {
    name: 'Mohsin Ali Aziz',
    title: 'Digital Solutions & Software Engineering',
    company: 'SetupMyBusiness (SMB Enterprises)',
    tagline: 'Digital Solutions That Drive Results',
    email: 'contact@mohsinaliaziz.com',
    phone: '+1 (631) 386-8474',
    website: 'https://mohsinaliaziz.com',
    location: 'United States',
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mohsinaliaziz',
      icon: Linkedin,
      color: 'hover:bg-[#0A66C2]',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mohsinaliaziz',
      icon: Instagram,
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mohsinaliaziz',
      icon: Twitter,
      color: 'hover:bg-[#1DA1F2]',
    },
    {
      name: 'Schedule Call',
      url: 'https://calendly.com/setupmybusinessusa/book-a-call',
      icon: Calendar,
      color: 'hover:bg-[#006BFF]',
    },
  ];

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
N:Aziz;Mohsin Ali;;;
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mohsin_Ali_Aziz.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const shareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: contactInfo.name,
          text: `${contactInfo.name} - ${contactInfo.title}`,
          url: contactInfo.website,
        });
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactInfo.website);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 dark:from-gray-950 dark:via-black dark:to-gray-900 sm:p-6">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
          {/* Decorative gradient header */}
          <div className="relative h-32 overflow-hidden bg-gradient-to-br from-[#082d25] via-[#0a3d32] to-[#082d25]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
            <div className="absolute right-4 top-4 flex gap-2">
              <button
                onClick={shareCard}
                className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Profile section */}
          <div className="px-6 pb-6">
            {/* Avatar */}
            <div className="relative -mt-16 mb-4">
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-[#b7fe1a] to-[#e5ff22] p-1 shadow-xl">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#082d25] text-4xl font-bold text-[#b7fe1a]">
                  {contactInfo.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#b7fe1a] shadow-lg">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="mb-6">
              <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                {contactInfo.name}
              </h1>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                {contactInfo.title}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                <Briefcase className="h-3 w-3" />
                <span>{contactInfo.company}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-[#b7fe1a]">
                {contactInfo.tagline}
              </p>
            </div>

            {/* Contact buttons */}
            <div className="mb-6 grid grid-cols-2 gap-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition-all hover:bg-[#082d25] hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-[#082d25]"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="group flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition-all hover:bg-[#082d25] hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-[#082d25]"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Call</span>
              </a>
            </div>

            {/* Info grid */}
            <div className="mb-6 space-y-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-700 transition-colors hover:text-[#b7fe1a] dark:text-gray-300"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-700 transition-colors hover:text-[#b7fe1a] dark:text-gray-300"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="h-4 w-4 text-gray-400" />
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 transition-colors hover:text-[#b7fe1a] dark:text-gray-300"
                >
                  mohsinaliaziz.com
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {contactInfo.location}
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mb-6 grid grid-cols-4 gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center rounded-lg bg-gray-100 p-3 text-gray-700 transition-all hover:text-white dark:bg-gray-800 dark:text-gray-300 ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Download button */}
            <button
              onClick={generateVCard}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#082d25] to-[#0a3d32] px-6 py-4 font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#082d25]/30"
            >
              <Download className="h-5 w-5" />
              Save Contact Card
            </button>

            {copied && (
              <div className="mt-3 text-center text-sm text-green-600 dark:text-green-400">
                Link copied to clipboard!
              </div>
            )}
          </div>
        </div>

        {/* Footer text */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Tap "Save Contact Card" to add to your phone
        </p>
      </div>
    </div>
  );
};

export default DigitalBusinessCard;
