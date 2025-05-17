'use client';
import React, { useState } from 'react';

type ContactUsFormProps = {};

export const ContactUsForm: React.FC<ContactUsFormProps> = () => {
  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={() => {}} className="mx-auto max-w-xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={'flex flex-col gap-y-4'}>
            <div>
              <label className="block text-left text-nobel-600 text-md font-interSemiBold mb-2">
                Nombre:
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="ej. Juan"
                className="w-full border border-gray-300 focus:ring-gold-butter focus:border-gold-butter p-2 rounded h-[49px]"
                autoComplete="given-name"
              />
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="lastName"
                className="block text-base text-start font-bold font-interSemiBold leading-6 text-nobel-600"
              >
                Apellido:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="lastName"
                  className="w-full border border-gray-300 focus:ring-gold-butter focus:border-gold-butter p-2 rounded h-[49px]"
                  placeholder="ej. Perez"
                />
              </div>
            </div>
            <div>
              <label className="block text-left text-nobel-600 text-md font-interSemiBold mb-2">
                Mail:
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="ej. email@gmail.com"
                className="w-full border border-gray-300 focus:ring-gold-butter focus:border-gold-butter p-2 rounded h-[49px]"
              />
            </div>
            <div>
              <label className="block text-left text-nobel-600 text-md font-interSemiBold mb-2">
                Telefono:
              </label>
              <input
                type="tel"
                id="phone-number"
                autoComplete="tel"
                placeholder="Con código de área, sin 0"
                className="w-full border border-gray-300 focus:ring-gold-butter focus:border-gold-butter p-2 rounded h-[49px]"
              />
            </div>
          </div>

          <div>
            <label className="block text-left text-nobel-600 text-md font-interSemiBold mb-2">
              Consulta
            </label>
            <textarea
              id="message"
              placeholder="Necesito asesoría para comprar un auto"
              className="w-full border border-gray-300 focus:ring-gold-butter focus:border-gold-butter p-2 rounded flex-1 h-auto md:h-[342px]"
              rows={4}
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a onClick={(e) => {}}>
            <p>Enviar Consulta</p>
          </a>
        </div>
      </form>
    </div>
  );
};
