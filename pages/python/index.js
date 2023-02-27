import ArtikelTerbaru from '@/components/ArtikelTerbaru'
import Layout from '@/Layout/Layout'
import React from 'react'
import PyStyle from "../../styles/python.module.css"

const Python = () => {
  return (
    <Layout>
      <div className='container mx-auto '>
        <div className='flex flex-wrap pt-5'>
          <div className='className=" w-full md:w-2/3 p-10 bg-white rounded-xl shadow-md'>
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
                    <span className="ml-1 text-sm font-medium text-black md:ml-2 dark:text-black">Python</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className='font-bold text-3xl p-5 pl-0'>Python</h1>
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
                <h1  className={PyStyle.subtitle}>
                  Mudah untuk dipelajari:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python dirancang agar mudah dipelajari dan mudah dibaca. Bahasa pemrograman ini menggunakan sintaks yang sederhana dan intuitif yang memungkinkan pemrogram baru dengan cepat mengembangkan pemahaman tentang konsep pemrograman dasar.
                </p>
                <br />
              </li>
              <li>
                <h1  className={PyStyle.subtitle}>
                  Multi-Platform:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python berjalan di beberapa sistem operasi seperti Windows, Linux dan macOS. Selain itu, Python juga dapat berjalan di berbagai arsitektur komputer, antara lain x86, ARM, dan PowerPC.
                </p>
                <br />
              </li>
              <li>
                <h1  className={PyStyle.subtitle}>
                  Interpretatif:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python adalah bahasa pemrograman yang ditafsirkan. Artinya, kode Python tidak harus dikompilasi seperti bahasa pemrograman lain seperti C++ atau Java. Penerjemah Python langsung menerjemahkan kode Python ke dalam bahasa mesin.
                </p>
                <br />
              </li>
              <li>
                <h1  className={PyStyle.subtitle}>
                  Dinamis:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python adalah bahasa pemrograman yang dinamis. Dengan kata lain, jenis variabel ditentukan saat runtime, bukan waktu kompilasi. Ini memungkinkan pengembang menjadi lebih fleksibel dengan data dan membuat kode yang lebih dinamis.
                </p>
                <br />
              </li>
              <li>
                <h1  className={PyStyle.subtitle}>
                  Object-Oriented:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python mendukung pemrograman berorientasi objek, yang memungkinkan pemrogram membuat program dengan mengelompokkan data dan fungsi ke dalam objek.
                </p>
                <br />
              </li>
              <li>
                <h1  className={PyStyle.subtitle}>
                  Mendukung berbagai paradigma pemrograman:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python mendukung banyak paradigma pemrograman, termasuk pemrograman prosedural, berorientasi objek, dan fungsional. Ini memberi pengembang lebih banyak fleksibilitas untuk menulis kode yang efisien dan mudah dipahami.
                </p>
                <br />
              </li>
              <li>
                <h1  className={PyStyle.subtitle}>
                  Beberapa modul dan pustaka:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python memiliki banyak modul dan library yang dapat digunakan untuk berbagai keperluan seperti : B. untuk pengembangan aplikasi web, ilmu data dan kecerdasan buatan. Beberapa modul dan pustaka populer adalah NumPy, Pandas, Matplotlib, Django, dan Flask.
                </p>
                <br />
              </li>
              <li>
                <h1  className={PyStyle.subtitle}>
                  Komunitas yang kuat:
                </h1>
                <p className={PyStyle.fontsize}>
                  Python memiliki komunitas yang kuat dan aktif. Hal ini memungkinkan pengembang untuk mendapatkan dukungan dan bantuan dengan mudah setiap kali ada masalah atau kesulitan saat menggunakan bahasa pemrograman ini.
                </p>
                <br />
              </li>
            </ol>

            <ul>
              <h1  className={PyStyle.subtitle}>
                Beberapa contoh aplikasi Python yang populer adalah:
              </h1>
              <li>
                <h1  className={PyStyle.subtitle}>
                  Django
                </h1>
                <p className={PyStyle.fontsize}>
                  Django adalah kerangka web populer untuk mengembangkan aplikasi web. Botol:
                  Flask adalah framework web ringan untuk membangun situs web sederhana.</p>
                <br />
              </li>
              <li>
                <h1  className={PyStyle.subtitle}>
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
          <ArtikelTerbaru />
        </div>
      </div>
    </Layout>
  )
}

export default Python
