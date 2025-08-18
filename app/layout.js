import "./globals.css";
import { Rufina } from 'next/font/google';

const rufina = Rufina({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const layourMetadata = {
  title: 'S&F - 29/10/2025',
  description: '¡Nos casamos! Ven y celebra con nosotros este día tan especial.',
  icons: {
    icon:'/logo.ico',
  },
  openGraph: {
    images: [
      {
        url: 'https://boda-fran-stefi.vercel.app/bodaF&S/foto2.jpeg', 
        width: 1200,
        height: 630,
        alt: 'Imagen representativa de la boda de S&F',
      },
    ],
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" translate="no">
      <body className={`${rufina.className} text-black overflow-x-hidden`}>{children}</body>
    </html>
  );
}
