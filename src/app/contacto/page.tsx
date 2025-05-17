'use client';
import React from 'react';
import Image from 'next/image';
import { ContactUsForm } from '@/components/ContactUsForm';

export default function Contact() {
  return (
    <>
      <head>
        <title>Perinetti e Hijos || Contacto</title>
      </head>
      <main>
        Posible Banner
        <div className="mx-auto max-w-screen-xl font-interRegular place-items-center px-6 py-10 text-center">
          <div className="max-w-[730px] bg-white p-8 rounded-lg shadow-md mx-auto lg:relative lg:top-[-100px]">
            <h1 className="text-regalBlue font-semibold text-25 mb-2">ENVIANOS TU MENSAJE</h1>
            <p className="mb-8 text-nobel-600 font-normal text-xl">
              Un asesor te estará contactando en menos de 24 hs.
            </p>
            <ContactUsForm />
          </div>
        </div>
        <div className={'items-center text-center bg-nobelGray py-4'}>
          <div className={'mx-auto max-w-screen-xl flex mt-6 flex-col md:flex-row justify-center '}>
            <a
              className={'w-full md:w-1/3 flex flex-col items-center'}
              href="mailto:info@simplicar.com"
              target={'_blank'}
            >
              <Image
                src={'/assets/icons/emailContact.svg'}
                alt="Icon"
                sizes="100vw"
                width={48}
                height={48}
                className={'w-[48px] h-[48px] object-contain mb-4'}
                loading="lazy"
                blurDataURL={'/assets/icons/emailContact.svg'}
                placeholder="blur"
              />
              <p
                className={'font-interRegular text-25 leading-custom-30 font-normal text-regalBlue'}
              >
                MAIL TEST
              </p>
            </a>
            <div className={'w-full md:w-1/3 md:mx-10 my-6 md:my-0  flex flex-col items-center'}>
              <Image
                src={'/assets/icons/ubicationContact.svg'}
                alt="Icon"
                sizes="100vw"
                width={48}
                height={48}
                className={'w-[48px] h-[48px] object-contain mb-4'}
                loading="lazy"
                blurDataURL={'/assets/icons/ubicationContact.svg'}
                placeholder="blur"
              />
              <p
                className={
                  'font-interRegular text-25 leading-custom-30 font-normal capitalize text-regalBlue'
                }
              >
                Posible direccion
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
