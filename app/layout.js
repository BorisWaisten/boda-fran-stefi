import "./globals.css";
import { Rufina } from 'next/font/google';

const rufina = Rufina({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Stefi & Fran - Nos Casamos',
  description: '¡Nos casamos! Sábado 11 de Octubre de 2025. Ven y celebra con nosotros este día tan especial.',
  keywords: 'boda, casamiento, Stefi, Fran, matrimonio, celebración',
  authors: [{ name: 'Stefi & Fran' }],
  creator: 'Stefi & Fran',
  publisher: 'Stefi & Fran',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Stefi & Fran - Nos Casamos',
    description: '¡Nos casamos! Sábado 11 de Octubre de 2025. Ven y celebra con nosotros este día tan especial.',
    url: 'https://boda-fran-stefi.vercel.app',
    siteName: 'Boda Stefi & Fran',
    images: [
      {
        url: 'https://boda-fran-stefi.vercel.app/bodaF&S/background.jpg',
        width: 1200,
        height: 630,
        alt: 'Stefi & Fran - Nos Casamos',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stefi & Fran - Nos Casamos',
    description: '¡Nos casamos! Sábado 11 de Octubre de 2025. Ven y celebra con nosotros este día tan especial.',
    images: ['https://boda-fran-stefi.vercel.app/bodaF&S/background.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" translate="no">
      <body className={`${rufina.className} text-black overflow-x-hidden`}>{children}</body>
    </html>
  );
}
