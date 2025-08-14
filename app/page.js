import Header from '@/components/Header';
import Gallery from '@/components/Gallery/Gallery';
import Invitation from '@/components/Invitation/Invitation';
import Footer from '@/components/Footer';
import '../components/components.css';
import '../components/religious-styles.css';
import ConfirmarAsistencia from '@/components/Asistency/ConfirmAsistency';
import { layourMetadata } from './layout';
import "./globals.css"

export const metadata = {
  ...layourMetadata,
  openGraph: {
    images: [
      {
        url: 'https://boda-fran-stefi.vercel.app/_next/image?url=%2FbodaF%26S%2Ffoto2.jpeg&w=1080&q=100', 
        width: 1200,
        height: 630,
        alt: 'Imagen representativa de la boda de S&F',
      },
    ],
    }
  }

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-[rgb(245,245,220)] justify-center overflow-x-hidden">
      <main className='w-full m-0 p-0'>
        <Header />
        {/* Spacer para el header fixed - ajustado para mobile */}
        <div className="h-screen w-full"></div>
        
        <section id="invitation" className="relative z-10">
          <Invitation />
        </section>
        <section id="gallery" className='relative z-10'>
          <Gallery />
        </section>
        <section id="asistency" className="relative z-10">
          <ConfirmarAsistencia />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
