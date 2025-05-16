// components/Footer.jsx
import Link from 'next/link';
import { SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {
  // Año actual para el copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A365D] text-white py-8">
      <div className="mx-auto max-w-screen-xl px-6 pb-4 pt-6 sm:pt-10 lg:pt-8">
        <a href={'/'} className={`flex flex-col items-start mb-4`}>
          INSERTAR LOGO
        </a>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
          <div>
            <p className={'capitalize text-md font-interBold leading-5'}>Horarios</p>
            <div className="flex gap-4 mt-4 lg:mt-2 justify-start space-x-1">
              <p className={'text-md font-medium leading-5 mt-2'}>
                Lunes a Viernes de 09:00 a 18:00 hs
              </p>
            </div>
          </div>
          <div>
            {/* CAMBIAR DATOS */}
            <p className={'capitalize text-md font-interBold leading-5'}>Contacto</p>
            <div className="flex flex-col gap/1 mt-4 lg:mt-2 justify-start space-x-1">
              <a href="tel:+5491136466680" className="link-footer whitespace-nowrap">
                +54 9 11 4444-4444
              </a>
              <a href="mailto:info@simplicar.com" target={'_blank'} className="link-footer">
                a@test.com
              </a>
            </div>
          </div>
          <div>
            <h1 className="flex justify-start text-md font-interBold leading-5">Redes</h1>
            <div className="flex gap-4 mt-4 lg:mt-2 justify-start space-x-1 -ml-2">
              <Link
                href="/"
                target="_blank"
                className="p-1 transition-transform duration-300 transform hover:scale-125"
              >
                <SiFacebook className="w-10 h-7" />
              </Link>
              <Link
                href="/"
                target="_blank"
                className="p-1 transition-transform duration-300 transform hover:scale-125"
              >
                <SiInstagram className="w-10 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
