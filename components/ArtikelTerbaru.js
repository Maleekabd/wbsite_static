import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import slugify from 'slugify'

const ArtikelTerbaru = () => {

  const [data, setData] = useState([])
  console.log(data);
  async function fetchData() {
    const Response = await axios.get("http://localhost:3000/api/cryptographyapi")
    setData(Response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='rounded-xl shadow-md p-5 bg-white mt-2'>
        <h1 className='font-bold text-xl'>Artikel Terbaru</h1>
        <div>
          {data.map(p => {
            const Content = slugify(p.content, {
              replacement: "-",
              remove: "/[*+~.()!:@]/g",
              lower: "true"
            })
            const Category = slugify(p.category, {
              replacement: "-",
              remove: "/[*+~.()!:@]/g",
              lower: "true"
            })

            return (
              <div key={p._id}>
                <Link legacyBehavior href={`http://localhost:3000/${p.name}/${Category}/${Content}`}
                >
                  <a className="flex pb-2">
                    <Image className='h-40 pt-4' src={p.image} width={100} height={20} alt={p.name} />
                    <div className='flex flex-col 2'>
                      <h1 className='font-bold'>{p.content}</h1>
                      <span className='text-xs font-semibold'>{p.date}</span>
                      <div>{p.description}</div>
                    </div>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ArtikelTerbaru
