import ArtikelTerbaru from '@/components/ArtikelTerbaru'
import Layout from '@/Layout/Layout'
import React from 'react'
import PyStyle from "../../styles/python.module.css"
import { data } from '@/data'
import { Artikel } from '@/components/Blog'
import List_Content from '@/components/List_Content'
import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'

const Python = () => {
  return (
    <Layout pageTitle={"Python"}>
      <div className='container mx-auto '>
        <div className='flex flex-wrap pt-5'>
          <div className='className=" w-full md:w-2/3 p-10 bg-white rounded-xl shadow-md'>
            <h1 className='font-bold text-3xl p-5 pl-0'>Python</h1>
            <Image src={`https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}  width={1000}  alt={`python`} height={400}/>
            <p className={PyStyle.fontsize}>
              Python adalah bahasa pemrograman tingkat tinggi, interpretatif, dan dinamis yang dirancang agar mudah dipelajari dan mudah dibaca. Python pertama kali diterbitkan oleh Guido van Rossum pada tahun 1991 dan sejak itu menjadi salah satu bahasa pemrograman terpopuler di dunia.
            </p>
            <br />
            <h2 className={PyStyle.subtitle}>
              Python memiliki banyak fitur yang menjadikannya pilihan populer untuk mengembangkan aplikasi dan proyek, termasuk:
            </h2>
            <br />

            <ol>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Mudah untuk dipelajari:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python dirancang agar mudah dipelajari dan mudah dibaca. Bahasa pemrograman ini menggunakan sintaks yang sederhana dan intuitif yang memungkinkan pemrogram baru dengan cepat mengembangkan pemahaman tentang konsep pemrograman dasar.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Multi-Platform:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python berjalan di beberapa sistem operasi seperti Windows, Linux dan macOS. Selain itu, Python juga dapat berjalan di berbagai arsitektur komputer, antara lain x86, ARM, dan PowerPC.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Interpretatif:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python adalah bahasa pemrograman yang ditafsirkan. Artinya, kode Python tidak harus dikompilasi seperti bahasa pemrograman lain seperti C++ atau Java. Penerjemah Python langsung menerjemahkan kode Python ke dalam bahasa mesin.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Dinamis:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python adalah bahasa pemrograman yang dinamis. Dengan kata lain, jenis variabel ditentukan saat runtime, bukan waktu kompilasi. Ini memungkinkan pengembang menjadi lebih fleksibel dengan data dan membuat kode yang lebih dinamis.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Object-Oriented:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python mendukung pemrograman berorientasi objek, yang memungkinkan pemrogram membuat program dengan mengelompokkan data dan fungsi ke dalam objek.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Mendukung berbagai paradigma pemrograman:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python mendukung banyak paradigma pemrograman, termasuk pemrograman prosedural, berorientasi objek, dan fungsional. Ini memberi pengembang lebih banyak fleksibilitas untuk menulis kode yang efisien dan mudah dipahami.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Beberapa modul dan pustaka:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python memiliki banyak modul dan library yang dapat digunakan untuk berbagai keperluan seperti : B. untuk pengembangan aplikasi web, ilmu data dan kecerdasan buatan. Beberapa modul dan pustaka populer adalah NumPy, Pandas, Matplotlib, Django, dan Flask.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Komunitas yang kuat:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python memiliki komunitas yang kuat dan aktif. Hal ini memungkinkan pengembang untuk mendapatkan dukungan dan bantuan dengan mudah setiap kali ada masalah atau kesulitan saat menggunakan bahasa pemrograman ini.
                </p>
                <br />
              </li>
            </ol>

            <ul>
              <h1 className={PyStyle.subtitle}>
                Beberapa contoh aplikasi Python yang populer adalah:
              </h1>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Django
                </h1>
                <p className={PyStyle.fontsize}>
                  Django adalah kerangka web populer untuk mengembangkan aplikasi web. Botol:
                  Flask adalah framework web ringan untuk membangun situs web sederhana.</p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  NumPy
                </h1>
                <p className={PyStyle.fontsize}>
                  NumPy adalah pustaka Python yang digunakan untuk komputasi dan komputasi ilmiah.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>
                  Panda
                </h1>
                <p className={PyStyle.fontsize}>
                  Pandas adalah pustaka Python yang digunakan untuk memproses, menganalisis, dan memanipulasi data.
                </p>
                <br />
              </li>
              <li>
                <h1 className={PyStyle.subtitle}>TensorFlow</h1>
                <p className={PyStyle.fontsize}>
                  TensorFlow adalah pustaka Python untuk pembelajaran mesin dan kecerdasan buatan.
                </p>
                <br />
              </li>
            </ul>
            <p className={PyStyle.fontsize}>
              Dalam pengembangan web, Python sering digunakan bersamaan dengan kerangka kerja web seperti Django atau Flask. Dalam ilmu data dan kecerdasan buatan, Python sering digunakan bersamaan dengan pustaka seperti NumPy, Pandas, dan TensorFlow.

              Python adalah bahasa pemrograman yang populer dan banyak digunakan oleh developer di seluruh dunia. Berkat kelebihannya, Python menjadi pilihan yang tepat untuk mengembangkan berbagai aplikasi dan proyek.
            </p>
          </div>
          <div className='w-full md:w-1/3 p-5 pt-0'>
            <div className='rounded-xl shadow-md p-5 mt-2 bg-white'>
              <h1 className='font-bold text-xl'>List Content</h1>
              {/* {data.map(p => (
                <List_Content {...p} />
              ))} */}
            </div>
            <div className='rounded-xl shadow-md p-5 bg-white mt-2'>
              <h1 className='font-bold text-xl'>Artikel Terbaru</h1>
              {/* <div>{DataArtikel.map(p => (
                <ArtikelTerbaru {...p} />
              ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Python
