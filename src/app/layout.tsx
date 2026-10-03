import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import ScrollProgress from '@/components/layout/ScrollProgress';

export const metadata: Metadata = {
  title: 'Tulas International School | Best Boarding School in Dehradun | CBSE Co-Ed',
  description: 'Tulas International School (TIS) is a premier CBSE-affiliated co-educational boarding school in Dehradun, Uttarakhand offering holistic residential education, 16+ Olympic sports, and the Modern Gurukul philosophy for Classes IV to XII.',
  keywords: [
    'Tulas International School',
    'Best boarding school in Dehradun',
    'CBSE co-ed residential school Uttarakhand',
    'Boarding school Class 4 to 12',
    'Modern Gurukul Dehradun',
    'Olympic sports boarding school India'
  ],
  metadataBase: new URL('https://tis.edu.in'),
  alternates: {
    canonical: 'https://tis.edu.in',
  },
  openGraph: {
    title: 'Tulas International School | Best Boarding School in Dehradun',
    description: 'Premier CBSE co-educational residential boarding school in Dehradun, Uttarakhand. 22-acre campus, 16+ Olympic sports, 6:1 ratio.',
    url: 'https://tis.edu.in',
    siteName: 'Tulas International School',
    images: [
      {
        url: '/images/tis/schoolLogo.95f6e121.png',
        width: 1200,
        height: 630,
        alt: 'Tulas International School Dehradun',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/tis/schoolLogo.95f6e121.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/tis/schoolLogo.95f6e121.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Tulas International School',
    'alternateName': 'TIS Dehradun',
    'url': 'https://tis.edu.in',
    'logo': 'https://tis.edu.in/images/tis/schoolLogo.95f6e121.png',
    'description': 'CBSE-affiliated co-educational boarding school in Dehradun, Uttarakhand for boys and girls from Class IV to XII.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Dhoolkot, P.O. Selaqui, Chakrata Road',
      'addressLocality': 'Dehradun',
      'addressRegion': 'Uttarakhand',
      'postalCode': '248011',
      'addressCountry': 'IN',
    },
    'telephone': '+91-9837983791',
    'email': 'info@tis.edu.in',
    'founder': {
      '@type': 'Organization',
      'name': 'Rishabh Educational Trust',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-[#940a24] selection:text-white">
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
