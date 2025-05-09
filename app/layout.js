import "./globals.css";
import { montserrat } from "@/public/fonts";

export const layourMetadata = {
  title: 'S&D - 15/11/2025',
  description: '¡Nos casamos! Ven y celebra con nosotros este día tan especial.',
  icons: {
    icon:'/logo.ico',
  },
  metadataBase: new URL('https://martuygino.vercel.app'), // Agrega esta línea
  openGraph: {
    title: 'S&D - Nuestra Boda',
    description: '¡Nos casamos! Ven y celebra con nosotros este día tan especial.',
    url: 'https://martuygino.vercel.app/',
    type: 'website',
    images: [{},],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" translate="no">
      <body className= {`text-primary ${montserrat.className}`} >{children}</body>
    </html>
  );
}
