import Layout from '@/Layout/Layout'
import React from 'react'
import List_Content from '@/components/List_Content'
import Stylecrypto from "../../styles/cryptography.module.css"
import ArtikelTerbaru from '@/components/ArtikelTerbaru'
import { Artikel } from '@/components/Blog'
import { data } from '@/data'
import Breadcrumb from '@/components/Breadcrumb'

export const Javascript = () => {
  return (
    <Layout pageTitle={"Javascript"}>
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-5">
          <div className=" w-full md:w-2/3 p-10 bg-white rounded-xl shadow-md">

            <h1 className='font-bold text-3xl p-5 pl-0'>Javascript</h1>
            <div className='flex items-center justify-center'>
            </div>
            <p className={Stylecrypto.fontsize}>JavaScript adalah bahasa pemrograman yang digunakan untuk mengembangkan situs web dan aplikasi seluler.Bahasa pemrograman ini digunakan untuk membuat halaman web lebih interaktif, memperbarui konten halaman tanpa memuat ulang halaman, mengelola animasi, memvalidasi formulir, memungkinkan pengguna berinteraksi dengan halaman web, dan banyak lagi.
              JavaScript adalah bahasa pemrograman yang sangat populer dan digunakan di seluruh dunia.Bahasa ini bisa digunakan untuk mengembangkan website menggunakan framework seperti React, Vue.js, Angular dan masih banyak lagi.
            </p>
            <br />
            <br />
            <ul>
              <li>
                <h1 className={Stylecrypto.subtitle}>Pengembangan Javascript</h1>
                <p className={Stylecrypto.fontsize}>JavaScript juga dapat digunakan untuk mengembangkan aplikasi seluler menggunakan kerangka kerja seperti React Native, NativeScript, dan lainnya.Bahasa ini juga digunakan dalam pengembangan game online dan mobile seperti Phaser, Three.js dan lainnya.</p>
              </li>
            </ul>
            <br />

            <ul>
              <li>
                <p className={Stylecrypto.fontsize}>Selain itu JavaScript juga dapat digunakan untuk mengembangkan aplikasi desktop menggunakan framework seperti Electron, NW.js, dan lainnya.Bahasa ini juga umum digunakan dalam mengembangkan aplikasi Internet of Things(IoT) dan artificial intelligence(AI) dan machine learning(ML).</p>
                <br />
              </li>
              <li>
                <p className={Stylecrypto.fontsize}>JavaScript adalah bahasa pemrograman yang sangat kuat dan fleksibel dan cocok untuk mengembangkan berbagai jenis aplikasi dan proyek teknologi.JavaScript dapat digunakan di banyak platform dan di lingkungan yang berbeda, menjadikannya bahasa pemrograman yang tak tergantikan dan sangat diperlukan dalam dunia aplikasi dan pengembangan teknologi. </p>
                <br />
              </li>
            </ul>
          </div>
          {/* <div className='w-full md:w-1/3 p-5 pt-0'>
            <div className='rounded-xl shadow-md p-5 mt-2 bg-white'>
              <h1 className='font-bold text-xl'>List Content</h1>
              {data.map(p => (
                <List_Content {...p} />
              ))}
            </div>
            <div className='rounded-xl shadow-md p-5 bg-white mt-2'>
              <h1 className='font-bold text-xl'>Artikel Terbaru</h1>
              <div>{Artikel.map(p => (
                <ArtikelTerbaru {...p} />
              ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout >
  )
}

export default Javascript