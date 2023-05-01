import React from 'react';
import Image from 'next/image';

export default function Menu()
{
    return(
        <div class="w-64 h-screen bg-gray-950  fixed inset-y-0 left-0">
        <div class="px-6 pt-8">
        
          <div class="flex items-center justify-between">
            <Image src="/img/logo barras.png" alt="Logo" width={20} height={20} />
                <button class="flex items-center justify-center p-0.5 rounded
                 bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500">
                  <svg class="w-3 h-3 text-gray-300 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="2" d="M10.25 6.75L4.75 12L10.25 17.25"></path><path stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.25 12H5">
                        </path>
                        </svg>
                        </button>
          </div>
          <div class="px-6 pt-4">
            <hr class="border-gray-700"></hr>
          </div>
          {
          //lista de elementos del menu
          /*resumen*/}
          <div class="px-6 pt-4">
            <ul class="flex flex-col space-y2">
            <li class="relative text-gray-500 hover:text-white focus-within:text-white">
              <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="1.5" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 
                   4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 
                   19.25 4.75 18.3546 4.75 17.25V6.75Z"></path><path stroke="currentColor" 
                   stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 8.75V19">
                    </path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                    stroke-width="1.5" d="M5 8.25H19">
                      </path>
                      </svg>
                      </div>
                      <a href="/" class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded
                       hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                        focus:bg-gray-800">Resumen</a>
                        </li>
            </ul>
          </div>
          {/*Lecciones */}
          <div class="px-6 pt-4">
            <ul class="flex flex-col space-y2">
            <li class="relative text-gray-500 hover:text-white focus-within:text-white">
              <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9.25H13.75V5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 15.25H14.25"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 12.25H14.25"></path></svg>
                      </div>
                      <a href="#" class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded
                       hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                        focus:bg-gray-800">Lecciones</a>
                        </li>
            </ul>
          </div>
          {/*Pruebas*/}
          <div class="px-6 pt-4">
            <ul class="flex flex-col space-y2">
            <li class="relative text-gray-500 hover:text-white focus-within:text-white">
              <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H9.25C9.80228 4.75 10.25 5.19772 10.25 5.75V9.25C10.25 9.80228 9.80228 10.25 9.25 10.25H5.75C5.19772 10.25 4.75 9.80228 4.75 9.25V5.75Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 14.75C4.75 14.1977 5.19772 13.75 5.75 13.75H9.25C9.80228 13.75 10.25 14.1977 10.25 14.75V18.25C10.25 18.8023 9.80228 19.25 9.25 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V14.75Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 5.75C13.75 5.19772 14.1977 4.75 14.75 4.75H18.25C18.8023 4.75 19.25 5.19772 19.25 5.75V9.25C19.25 9.80228 18.8023 10.25 18.25 10.25H14.75C14.1977 10.25 13.75 9.80228 13.75 9.25V5.75Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 14.75C13.75 14.1977 14.1977 13.75 14.75 13.75H18.25C18.8023 13.75 19.25 14.1977 19.25 14.75V18.25C19.25 18.8023 18.8023 19.25 18.25 19.25H14.75C14.1977 19.25 13.75 18.8023 13.75 18.25V14.75Z"></path></svg>
               </div>
                      <a href="#" class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded
                       hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                        focus:bg-gray-800">Pruebas</a>
                        </li>
            </ul>
          </div>
          {/*representacion*/}
          <div class="px-6 pt-4">
            <ul class="flex flex-col space-y2">
            <li class="relative text-gray-500 hover:text-white focus-within:text-white">
              <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 19.2502H6.25C6.80229 19.2502 7.25 18.8025 7.25 18.2502V15.75C7.25 15.1977 6.80229 14.75 6.25 14.75H5.75C5.19772 14.75 4.75 15.1977 4.75 15.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.75 19.2502H12.25C12.8023 19.2502 13.25 18.8025 13.25 18.2502V12.75C13.25 12.1977 12.8023 11.75 12.25 11.75H11.75C11.1977 11.75 10.75 12.1977 10.75 12.75V18.2502C10.75 18.8025 11.1977 19.2502 11.75 19.2502Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H17.75C17.1977 4.75 16.75 5.19772 16.75 5.75V18.2502C16.75 18.8025 17.1977 19.2502 17.75 19.2502Z"></path></svg>
                      </div>
                      <a href="#" class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded
                       hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                        focus:bg-gray-800">Representación</a>
                        </li>
            </ul>
          </div>

          <div class="px-6 pt-8">
            <hr class="border-gray-700"></hr>
          </div>

          {/*Configuraciones */}
          <div class="px-6 pt-4 pb-8">
          <ul>
          <li class="relative text-gray-500 hover:text-white focus-within:text-white">
          <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
           d="M13.1191 5.61336C13.0508 5.11856 12.6279 4.75 12.1285 4.75H11.8715C11.3721 4.75 10.9492
            5.11856 10.8809 5.61336L10.7938 6.24511C10.7382 6.64815 10.4403 6.96897 10.0622 7.11922C10.006 
            7.14156 9.95021 7.16484 9.89497 7.18905C9.52217 7.3524 9.08438 7.3384 8.75876 7.09419L8.45119 
            6.86351C8.05307 6.56492 7.49597 6.60451 7.14408 6.9564L6.95641 7.14408C6.60452 7.49597
             6.56492 8.05306 6.86351 8.45118L7.09419 8.75876C7.33841 9.08437 7.3524 9.52216 7.18905 
             9.89497C7.16484 9.95021 7.14156 10.006 7.11922 10.0622C6.96897 10.4403 6.64815 10.7382
              6.24511 10.7938L5.61336 10.8809C5.11856 10.9492 4.75 11.372 4.75 11.8715V12.1285C4.75
               12.6279 5.11856 13.0508 5.61336 13.1191L6.24511 13.2062C6.64815 13.2618 6.96897 13.5597
                7.11922 13.9378C7.14156 13.994 7.16484 14.0498 7.18905 14.105C7.3524 14.4778 7.3384 14.9156 
                7.09419 15.2412L6.86351 15.5488C6.56492 15.9469 6.60451 16.504 6.9564 16.8559L7.14408 
                17.0436C7.49597 17.3955 8.05306 17.4351 8.45118 17.1365L8.75876 16.9058C9.08437 16.6616
                 9.52216 16.6476 9.89496 16.811C9.95021 16.8352 10.006 16.8584 10.0622 16.8808C10.4403 
                 17.031 10.7382 17.3519 10.7938 17.7549L10.8809 18.3866C10.9492 18.8814 11.3721 19.25 
                 11.8715 19.25H12.1285C12.6279 19.25 13.0508 18.8814 13.1191 18.3866L13.2062 
                 17.7549C13.2618 17.3519 13.5597 17.031 13.9378 16.8808C13.994 16.8584 14.0498 
                 16.8352 14.105 16.8109C14.4778 16.6476 14.9156 16.6616 15.2412 16.9058L15.5488 
                 17.1365C15.9469 17.4351 16.504 17.3955 16.8559 17.0436L17.0436 16.8559C17.3955 16.504 
                 17.4351 15.9469 17.1365 15.5488L16.9058 15.2412C16.6616 14.9156 16.6476 14.4778 16.811
                  14.105C16.8352 14.0498 16.8584 13.994 16.8808 13.9378C17.031 13.5597 17.3519 13.2618 
                  17.7549 13.2062L18.3866 13.1191C18.8814 13.0508 19.25 12.6279 19.25 12.1285V11.8715C19.25 
                  11.3721 18.8814 10.9492 18.3866 10.8809L17.7549 10.7938C17.3519 10.7382 17.031 10.4403
                   16.8808 10.0622C16.8584 10.006 16.8352 9.95021 16.8109 9.89496C16.6476 9.52216 16.6616
                    9.08437 16.9058 8.75875L17.1365 8.4512C17.4351 8.05308 17.3955 7.49599 17.0436 
                    7.1441L16.8559 6.95642C16.504 6.60453 15.9469 6.56494 15.5488 6.86353L15.2412
                     7.09419C14.9156 7.33841 14.4778 7.3524 14.105 7.18905C14.0498 7.16484 13.994
                      7.14156 13.9378 7.11922C13.5597 6.96897 13.2618 6.64815 13.2062 6.24511L13.1191
                       5.61336Z">
                       </path>
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                       stroke-width="1.5" d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 
                       13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 
                       13.25 11.3096 13.25 12Z">
                        </path>
                        </svg>
                        </div>
                        <a href="#" class="inline-block 
                       w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none
                        focus:ring-1 focus:ring-gray-500 focus:bg-gray-800">Configuración</a>
          </li>
          </ul>
        </div>

        {/*About us */}
        <div class="px-6 pt-4"> 
        </div>
        <div class="px-6 pt-4"> 
        </div>
        <div class="px-6 pt-4"> 
        </div>
        <div class="px-6 pt-4"> 
        </div>
        <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> <div class="px-6 pt-4"> 
        </div> 
        {/**Ayuda */}
        <div class="px-6 pt-4">
            <ul class="flex flex-col space-y2">
            <li class="relative text-gray-500 hover:text-white focus-within:text-white">
                      <a href="#" class="inline-block w-full py-2 pl-8 pr-1 text-xs rounded
                       hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                        focus:bg-gray-800 text-left">Ayuda</a>
                        </li>
            </ul>
          </div>
          {/**Contactanos */}
          <div class="px-6 pt-4">
            <ul class="flex flex-col space-y2">
            <li class="relative text-gray-500 hover:text-white focus-within:text-white">
                      <a href="#" class="inline-block w-full py-2 pl-8 pr-1 text-xs rounded
                       hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                        focus:bg-gray-800 text-left">Contáctanos</a>
                        </li>
            </ul>
          </div>
          {/**Cerrar Seccion */}
          <div class="px-6 pt-4">
            <ul class="flex flex-col space-y2">
            <li class="relative text-gray-500 hover:text-white focus-within:text-white">
              <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg class="h-4 w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />  <polyline points="16 17 21 12 16 7" />  <line x1="21" y1="12" x2="9" y2="12" /></svg>
              </div>
              <a href="" class="inline-block w-full py-2 pl-8 pr-4 text-xs rounded
                       hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500
                        focus:bg-gray-800">Representación</a>
                        </li>
            </ul>
          </div>
        </div>
      </div>
    )
}