import React from 'react'
import Layout from '@/Layout/Layout'
import Stylecrypto from "../../styles/cryptography.module.css"
import ArtikelTerbaru from '@/components/ArtikelTerbaru'

export const QuantumComputing = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-5">
          <div className=" w-full md:w-2/3 p-10 bg-white rounded-xl shadow-md">
            <nav className="flex " aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a href="/" className="inline-flex items-center text-sm font-medium hover:text-emerald-400 text-black dark:hover:text-emerald-400">
                    <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Home
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span className="ml-1 text-sm font-medium text-black md:ml-2 dark:text-black">Quantum Computing</span>
                  </div>
                </li>
              </ol>
            </nav>

            <h1 className='font-bold text-3xl p-5 pl-0'>Quantum Computing</h1>
            <div className='flex items-center justify-center'>
              {/* <Image src={Crypto} className={`rounded-xl`} height="600" width="100%" alt="crypto" /> */}
            </div>
            <p className={Stylecrypto.fontsize}>Komputasi kuantum dan informasi kuantum adalah dua konsep yang terkait erat dengan fisika kuantum.Komputasi kuantum menggunakan properti partikel subatomik, seperti spin, superposisi, dan entangled state(keterkaitan kuantum), untuk melakukan operasi matematika dan logika yang sangat kompleks dengan kecepatan dan akurasi yang jauh melebihi komputer klasik saat ini.Pada saat yang sama, informasi kuantum mengacu pada penggunaan properti kuantum ini untuk mengirimkan dan menyimpan informasi jauh lebih efisien dan aman daripada metode tradisional.

              Salah satu perbedaan terbesar antara komputasi kuantum dan komputasi klasik adalah penggunaan bit sebagai unit dasar penyimpanan informasi.Pada komputer klasik, bit adalah satuan dasar yang hanya dapat memiliki nilai 0 atau 1. Sebaliknya, dalam komputer kuantum, unit dasarnya adalah Qubit(Quantum Bit), yang dapat mengambil nilai 0 dan 1 secara bersamaan dalam mode superposisi.Ini memungkinkan komputer kuantum memproses informasi lebih cepat dan jauh lebih efisien dan kompleks daripada komputer klasik.

              Meskipun komputasi kuantum menjanjikan untuk mengungguli komputer tradisional pada tugas - tugas tertentu, masih banyak tantangan teknis yang harus diatasi sebelum komputasi kuantum dapat digunakan dalam skala besar.Salah satu tantangan terbesar adalah menjaga stabilitas dan reliabilitas qubit, karena qubit sangat sensitif terhadap gangguan lingkungan.

              Informasi kuantum, di sisi lain, telah menunjukkan potensi besar dalam aplikasi seperti enkripsi kuantum dan teleportasi kuantum.Enkripsi kuantum adalah cara untuk mengirim informasi dengan aman menggunakan prinsip kuantum seperti keadaan terjerat.Pada saat yang sama, teleportasi kuantum adalah tentang mengirimkan informasi kuantum dari satu tempat ke tempat lain jauh lebih cepat daripada yang mungkin dilakukan dengan komunikasi klasik.

              Untuk mengembangkan aplikasi kuantum yang lebih maju, ilmuwan dan peneliti terus mengeksplorasi sifat unik fisika kuantum dan memperdalam pemahaman mereka tentang teknologi kuantum.Meskipun masih banyak tantangan teknis yang harus diatasi, komputasi kuantum dan informasi kuantum dianggap sebagai teknologi yang memiliki potensi besar untuk merevolusi cara kita memproses dan mentransmisikan informasi di masa depan. </p>
            <br />
            {/* <br />
            <h1 className={Stylecrypto.subtitle}>
              Ada dua jenis utama teknik enkripsi yaitu :
            </h1>
            <ul>
              <li>
                <h1 className={Stylecrypto.subtitle}>kriptografi simetris </h1>
                <Image src={Simetris} />
                <p className={Stylecrypto.fontsize}>Kriptografi simetris menggunakan  kunci yang sama untuk mengenkripsi dan mendekripsi pesan. Kunci  harus dirahasiakan dan hanya diketahui oleh pengirim dan penerima pesan. Beberapa algoritma enkripsi simetris yang populer termasuk Advanced Encryption Standard (AES), Data Encryption Standard (DES), dan Triple DES (3DES). </p>
              </li>
              <br />
              <li>
                <h1 className={Stylecrypto.subtitle}>kriptografi asimetris</h1>
                <Image src={Asimetris} />
                <p className={Stylecrypto.fontsize}>Cryptography asimetris menggunakan dua kunci yang berbeda, yaitu kunci publik dan kunci privat. Kunci publik digunakan untuk mengenkripsi pesan sedangkan kunci privat digunakan untuk mendekripsi pesan. Kunci publik dapat dibagikan dengan siapa saja sedangkan kunci pribadi harus dirahasiakan. Algoritma enkripsi asimetris yang populer adalah RSA dan Elliptic Curve Cryptography (ECC).</p>
              </li>
            </ul>
            <br />

            <ul>
              <h1 className={Stylecrypto.subtitle}>Kriptografi juga dapat digunakan untuk tujuan lain seperti tanda tangan digital, otentikasi, dan hashing. </h1>
              <br />
              <li>
                <h1 className={Stylecrypto.subtitle}>tanda tangan digital (Digital Signature)</h1>
                <p className={Stylecrypto.fontsize}>Tanda tangan digital digunakan untuk mengidentifikasi pengirim pesan dan memastikan integritas pesan. Dengan tanda tangan digital, pengirim pesan menggunakan kunci privat untuk membuat tanda tangan digital untuk pesan tersebut. Penerima pesan kemudian dapat menggunakan kunci publik pengirim untuk memverifikasi tanda tangan dan memastikan bahwa pesan tersebut tidak diubah oleh pihak ketiga.</p>
                <br />
              </li>
              <li>
                <h1 className={Stylecrypto.subtitle}>Authentication</h1>
                <p className={Stylecrypto.fontsize}>Otentikasi digunakan untuk memverifikasi identitas pengirim dan penerima pesan. Ini dapat dicapai dengan enkripsi asimetris dan sertifikat digital. </p>
                <br />
              </li>
              <li>
                <h1 className={Stylecrypto.subtitle}>Hashing</h1>
                <Image src={Hashing} className="p-5" height="300" width="100%" />
                <p className={Stylecrypto.fontsize}>Hashing digunakan untuk mengonversi pesan menjadi nilai hash yang unik dan tetap. Hashing berguna untuk memastikan integritas data. Perubahan kecil pada pesan juga mengubah nilai hash.</p>
              </li>
            </ul>
            <br />

            <p className={Stylecrypto.fontsize}>
              Kriptografi sangat penting dalam  komunikasi dan keamanan informasi dan berkembang karena kebutuhan yang terus meningkat untuk mengamankan informasi secara digital. Namun, tidak ada sistem enkripsi yang benar-benar aman dan tidak dapat dipecahkan, jadi penting untuk terus memperbarui dan meningkatkan teknik enkripsi yang digunakan untuk melindungi data.
            </p> */}
          </div>

          <ArtikelTerbaru />
        </div>
      </div>
    </Layout>
  )
}

export default QuantumComputing
