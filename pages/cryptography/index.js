import Layout from '@/Layout/Layout'
import React from 'react'
import Stylecrypto from "@/styles/cryptography.module.css"
import Crypto from "../../public/assets/crypto.jpg"
import Image from 'next/image'
import Hashing from "../../public/assets/hashing.jpg"
import Simetris from "../../public/assets/simetris.jpg"
import Asimetris from "../../public/assets/asimetris.jpg"
import ArtikelTerbaru from "../../components/ArtikelTerbaru"
import List_Content from '@/components/List_Content'

export const Cryptography = ({ cryptographyapi }) => {


  return (
    <Layout pageTitle={"Cryptography"}>
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-5">
          <div className=" w-full md:w-2/3 p-10 bg-white rounded-xl shadow-md">
            <h1 className='font-bold text-3xl p-5 pl-0'>Cryptography</h1>
            <div className='flex items-center justify-center'>
              <Image src={Crypto} className={`rounded-xl`} height="600" width="100%" alt="crypto" />
            </div>
            <p className={Stylecrypto.fontsize}>Kriptografi adalah studi tentang teknik untuk mengamankan komunikasi dan data sehingga hanya mereka yang memiliki kunci keamanan yang benar yang dapat membaca dan memahaminya. Tujuan utama enkripsi adalah untuk melindungi data dan menjaga kerahasiaan, keaslian, integritas, dan non-penolakan pesan atau data apa pun.</p>
            <br />
            <br />
            <h1 className={Stylecrypto.subtitle}>
              Ada dua jenis utama teknik enkripsi yaitu :
            </h1>
            <ul>
              <li>
                <h1 className={Stylecrypto.subtitle}>kriptografi simetris </h1>
                <Image alt={`simetris`} src={Simetris} />
                <p className={Stylecrypto.fontsize}>Kriptografi simetris menggunakan  kunci yang sama untuk mengenkripsi dan mendekripsi pesan. Kunci  harus dirahasiakan dan hanya diketahui oleh pengirim dan penerima pesan. Beberapa algoritma enkripsi simetris yang populer termasuk Advanced Encryption Standard (AES), Data Encryption Standard (DES), dan Triple DES (3DES). </p>
              </li>
              <br />
              <li>
                <h1 className={Stylecrypto.subtitle}>kriptografi asimetris</h1>
                <Image src={Asimetris} width={50} height={50} alt=""/>
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
                <Image src={Hashing} className="p-5" height="300" width="100%" alt=''/>
                <p className={Stylecrypto.fontsize}>Hashing digunakan untuk mengonversi pesan menjadi nilai hash yang unik dan tetap. Hashing berguna untuk memastikan integritas data. Perubahan kecil pada pesan juga mengubah nilai hash.</p>
              </li>
            </ul>
            <br />

            <p className={Stylecrypto.fontsize}>
              Kriptografi sangat penting dalam  komunikasi dan keamanan informasi dan berkembang karena kebutuhan yang terus meningkat untuk mengamankan informasi secara digital. Namun, tidak ada sistem enkripsi yang benar-benar aman dan tidak dapat dipecahkan, jadi penting untuk terus memperbarui dan meningkatkan teknik enkripsi yang digunakan untuk melindungi data.
            </p>
          </div>
          <div className='w-full md:w-1/3 p-5 pt-0'>
            <div className='rounded-xl shadow-md p-5 mt-2 bg-white'>
              <h1 className='font-bold text-xl'>List Content</h1>
              {cryptographyapi.map(p => (
                <div key={p._id}>
                <List_Content {...p} />
                </div>
              ))}
            </div>
            <ArtikelTerbaru />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cryptography

export const getServerSideProps = async () => {

  const data = await fetch("/api/cryptographyapi/")
  const response = await data.json();

  return {
    props: {
      cryptographyapi: response
    }
  }
}