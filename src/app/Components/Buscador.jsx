import Head from 'next/head';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function Buscador() {
  return (
    <div className="fixed top-0 left-64 right-0 px-4 py-2 bg-white z-50 items-center">
      <div className="max-w-1/2 mx-auto">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FiSearch className="h-5 w-5 text-gray-500" />
          </span>
          <input
            className="placeholder-italic placeholder-text-slate-400 text-gray-900 block bg-white w-full border border-slate-300 rounded-full py-2 pl-6 pr-8 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-5 sm:text-sm"
            placeholder="Buscar tema"
            type="text"
            name="search"
          />
        </div>
      </div>
    </div>
  );
}
