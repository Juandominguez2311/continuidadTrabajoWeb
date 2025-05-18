'use client';
import React from 'react';
import Image from 'next/image';
import { ContactUsForm } from '@/components/ContactUsForm';
import HeroBanner from '@/components/HeroBanner';

export default function Contact() {
  return (
    <>
      <head>
        <title>Perinetti e Hijos || Contacto</title>
      </head>
      <main>
        <HeroBanner
          textOverImg={true}
          title={'Contacto'}
          titleColor={'white'}
          positionText={'left'}
          alignText={'left'}
          titleClass="px-6 font-interRegular text-xl md:text-3xl lg:text-43 leading-custom-58"
          urlImage="/assets/img/contact/contact.jpg"
          imgClass={'z-10 h-56 md:h-64 lg:h-88 object-cover object-right'}
        />
        <div className="mx-auto max-w-screen-xl font-interRegular place-items-center px-6 py-10 text-center">
          <div className="max-w-[730px] bg-white p-8 rounded-lg shadow-md mx-auto lg:relative lg:top-[-80px]">
            <h1 className="text-regalBlue font-semibold text-25 mb-2">ENVIANOS TU MENSAJE</h1>
            <p className="mb-8 text-nobel-600 font-normal text-xl">
              Un asesor te estará contactando en menos de 24 hs.
            </p>
            <ContactUsForm />
          </div>
        </div>
      </main>
    </>
  );
}
