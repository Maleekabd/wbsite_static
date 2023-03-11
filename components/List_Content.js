import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

const List_Content = ({ category, content, path }) => {
  const Category = slugify(category, {
    replacement: "-",
    remove: "/[*+~.()!:@]/g",
    lower: "true"
  })
  const Content = slugify(content, {
    replacement: "-",
    remove: "/[*+~.()!:@]/g",
    lower: "true"
  })
  const Path = slugify(path, {
    replacement: "-",
    remove: "/[*+~.()!:@]/g",
    lower: "true"
  })
  return (
    <>
      <ul>
        <li>
          <div className='flex flex-col'>
            <Link legacyBehavior href={`/cryptography/${Path}`}>
              <a className='font-semibold'>{category}</a>
            </Link>
            <Link legacyBehavior href={`/cryptography/${Path}/${Content}`}>
              <a className='pl-5'>{content}</a>
            </Link>
          </div>
        </li>
      </ul>
    </>
  )
}

export default List_Content

{/* <div
class=' flex justify-center items-center'>
<div class='relative'>
  <button class=" text-gray-700 rounded-md peer focus:bg-sky-400 focus:text-gray-200 transition-all duration-200 hover:text-emerald-400  ">Cryptography</button>
  <div class=' w-80 absolute z-10
after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
after:w-full after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible 
transition-all duration-300 invisible  opacity-0 
'>
    <ul class='py-6 px-3 flex flex-col gap-3'>
      <li class='cursor-pointer bg-sky-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day</li>
      <li class='cursor-pointer bg-blue-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day
      </li>
      <li class='cursor-pointer bg-cyan-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day
      </li>
      <li class='cursor-pointer bg-red-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day</li>
      <li class='cursor-pointer bg-yellow-300 p-3 rounded-md hover:opacity-90 text-white'>Eat an apple a day
      </li>
    </ul>
  </div>
</div>
</div> */}