import React from 'react'
import Layout from '@/Layout/Layout'
import Stylecrypto from "../../styles/cryptography.module.css"
import ArtikelTerbaru from '@/components/ArtikelTerbaru'
import QComputing from "../../public/assets/Quantum-Computing-business.jpg"
import Image from 'next/image'
import List_Content from '@/components/List_Content'
import { Artikel } from '@/components/Blog'
import { data } from '@/data'
import Breadcrumb from '@/components/Breadcrumb'

export const QuantumComputing = () => {
  return (
    <Layout pageTitle={"Quantum Computing"}>
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-5">
          <div className=" w-full md:w-2/3 p-10 bg-white rounded-xl shadow-md">
            <h1 className='font-bold text-3xl p-5 pl-0'>Quantum Computing</h1>
            <Image loading='lazy' className='rounded-md ' src={QComputing} alt={`Quantum Computing`} />
            <div className='flex items-center justify-center'>
              {/* <Image src={Crypto} className={`rounded-xl`} height="600" width="100%" alt="crypto" /> */}
            </div>
            <p className={Stylecrypto.fontsize}>Komputasi kuantum dan informasi kuantum adalah dua konsep yang terkait erat dengan fisika kuantum.Komputasi kuantum menggunakan properti partikel subatomik, seperti spin, superposisi, dan entangled state(keterkaitan kuantum), untuk melakukan operasi matematika dan logika yang sangat kompleks dengan kecepatan dan akurasi yang jauh melebihi komputer klasik saat ini.Pada saat yang sama, informasi kuantum mengacu pada penggunaan properti kuantum ini untuk mengirimkan dan menyimpan informasi jauh lebih efisien dan aman daripada metode tradisional.

              Salah satu perbedaan terbesar antara komputasi kuantum dan komputasi klasik adalah penggunaan bit sebagai unit dasar penyimpanan informasi.Pada komputer klasik, bit adalah satuan dasar yang hanya dapat memiliki nilai 0 atau 1. Sebaliknya, dalam komputer kuantum, unit dasarnya adalah Qubit(Quantum Bit), yang dapat mengambil nilai 0 dan 1 secara bersamaan dalam mode superposisi.Ini memungkinkan komputer kuantum memproses informasi lebih cepat dan jauh lebih efisien dan kompleks daripada komputer klasik.

              Meskipun komputasi kuantum menjanjikan untuk mengungguli komputer tradisional pada tugas - tugas tertentu, masih banyak tantangan teknis yang harus diatasi sebelum komputasi kuantum dapat digunakan dalam skala besar.Salah satu tantangan terbesar adalah menjaga stabilitas dan reliabilitas qubit, karena qubit sangat sensitif terhadap gangguan lingkungan.

              Informasi kuantum, di sisi lain, telah menunjukkan potensi besar dalam aplikasi seperti enkripsi kuantum dan teleportasi kuantum.Enkripsi kuantum adalah cara untuk mengirim informasi dengan aman menggunakan prinsip kuantum seperti keadaan terjerat.Pada saat yang sama, teleportasi kuantum adalah tentang mengirimkan informasi kuantum dari satu tempat ke tempat lain jauh lebih cepat daripada yang mungkin dilakukan dengan komunikasi klasik.

              Untuk mengembangkan aplikasi kuantum yang lebih maju, ilmuwan dan peneliti terus mengeksplorasi sifat unik fisika kuantum dan memperdalam pemahaman mereka tentang teknologi kuantum.Meskipun masih banyak tantangan teknis yang harus diatasi, komputasi kuantum dan informasi kuantum dianggap sebagai teknologi yang memiliki potensi besar untuk merevolusi cara kita memproses dan mentransmisikan informasi di masa depan. </p>
            <br />
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
    </Layout>
  )
}

export default QuantumComputing
