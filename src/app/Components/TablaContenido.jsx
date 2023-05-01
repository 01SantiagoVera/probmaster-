import React from "react";
import Link from "next/link";

export default function TablaDeContenido()
{
    return(
        <div class="absolute inset-x-0 top-1/2 left-1/2 w-30/40 ml-auto transform -translate-x-1/2 -translate-y-1/2 overflow-x-auto shadow-md sm:rounded-lg p-20 px-4 py-2 bg-slate-100">
   
    <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <b>Tema</b>
                </th>                  
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Probabilidad Condicional
                </th>
                <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Lección</a>
                </td>
                <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Simulación</a>
                </td>
                <td class="px-6 py-4">
                <Link href="/Quiz" passHref class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Custionario</Link>
                </td>                
            </tr>
        </tbody>
    </table>
</div>
    )
}