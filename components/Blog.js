// import Link from "next/link"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import axios from "axios"

// export const Artikel = [
//   {
//     image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
//     name: "Malik",
//     date: "19 nov 2023",
//     title: "Classic Cryptography",
//     subtitle: "Kriptografi adalah studi tentang teknik untuk mengamankan komunikasi dan data sehingga hanya mereka yang memiliki kunci keamanan yang benar yang dapat membaca dan memahaminya",
//     slug: "cryptography",
//     tag:
//       [
//         {
//           id: 1,
//           kategori: "computer science",
//         },
//         {
//           id: 2,
//           kategori: "programming"
//         }
//       ]
//   },
//   {
//     image: "https://investorplace.com/wp-content/uploads/2020/08/quantum-computing.jpg",
//     name: "Amsar",
//     date: "14 nov 2023",
//     title: "Kuantum",
//     subtitle: "Kriptografi adalah studi tentang teknik untuk mengamankan komunikasi dan data sehingga hanya mereka yang memiliki kunci keamanan yang benar yang dapat membaca dan memahaminya",
//     tag:
//       [
//         {
//           id: 1,
//           kategori: "computer science",
//         },
//         {
//           id: 2,
//           kategori: "programming"
//         }
//       ]
//   },
//   {
//     image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
//     name: "Malik",
//     date: "19 nov 2023",
//     title: "Classic Cryptography",
//     subtitle: "Kriptografi adalah studi tentang teknik untuk mengamankan komunikasi dan data sehingga hanya mereka yang memiliki kunci keamanan yang benar yang dapat membaca dan memahaminya",
//     tag:
//       [
//         {
//           id: 1,
//           kategori: "computer science",
//         },
//         {
//           id: 2,
//           kategori: "programming"
//         }
//       ]
//   },
//   {
//     image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
//     name: "Malik",
//     date: "19 nov 2023",
//     title: "Classic Cryptography",
//     subtitle: "Kriptografi adalah studi tentang teknik untuk mengamankan komunikasi dan data sehingga hanya mereka yang memiliki kunci keamanan yang benar yang dapat membaca dan memahaminya",
//     tag:
//       [
//         {
//           id: 1,
//           kategori: "computer science",
//         },
//         {
//           id: 2,
//           kategori: "programming"
//         }
//       ]
//   },
//   {
//     image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
//     name: "Malik",
//     date: "19 nov 2023",
//     title: "Classic Cryptography",
//     subtitle: "Kriptografi adalah studi tentang teknik untuk mengamankan komunikasi dan data sehingga hanya mereka yang memiliki kunci keamanan yang benar yang dapat membaca dan memahaminya",
//     tag:
//       [
//         {
//           id: 1,
//           kategori: "computer science",
//         },
//         {
//           id: 2,
//           kategori: "programming"
//         }
//       ]
//   },
// ]

// export default function Example() {
//   return (
//     <div className="">
//       <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>
//         <h1 className=" text-6xl pb-5 text-center">Latest News</h1>
//         <div className="grid p-2 grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
//           {Artikel.map(a => (
//             <Link href={``} key={a.id} className="bg-slate-400 rounded-lg shadow-md">
//               <Image
//                 src={a.image}
//                 className="aspect-video w-full object-cover rounded-md"
//                 alt="" width={100} height={100} />
//               <div className="p-4">
//                 <p className="mb-1 text-sm text-primary-500">{a.name} • <time>{a.date}</time></p>
//                 <h3 className="text-xl font-medium text-gray-900">{a.title}</h3>
//                 <p className="mt-1 text-gray-500">{a.subtitle}</p>

//               </div></Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


import React from "react";
import Image from "next/image";

function Example() {
  return (
    <>
      <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Latest from our Blog</h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div>
                <Image className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="computer" width={50} height={50} />
                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                  <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                  <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                </div>
                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">Transactions</h1>
                  <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                  <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                    <p className="text-base tracking-wide text-indigo-500">Read more</p>
                    <svg className="ml-3 lg:ml-6" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                      <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="h-5 w-2" />
                </div>
              </div>
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div>
                    <Image className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" height={50} width={50} />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                      <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                    </div>
                  </div>
                  <div>
                    <Image className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" height={50} width={50} />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                      <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div>
                    <Image className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" width={50} height={50} />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                      <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                    </div>
                  </div>
                  <div>
                    <Image className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" width={50} height={50} />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                      <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Example;
