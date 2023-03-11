import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import NavbarCSS from "../styles/navbar.module.css"
import { useRouter } from 'next/router';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const Path = router.pathname
  if (status === "loading") {
    return <><div className='text-3xl'>loading......</div></>
  }

  return (
    <>
      <nav className="w-full bg-white border-b shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 flex items-center justify-evenly">
          <div aria-label="Home. logo" role="img" className={`cursor-pointer`}>
            <Link legacyBehavior href={`/`} >
              <Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg" alt="logo" width={50} height={50} />
            </Link>
          </div>
          <div>
            <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
              <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </button>
            <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
              <button onClick={() => setShow(!show)} className={`block md:hidden lg:hidden text-gray-500 hover:text-emerald-400 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
              <ul className={`flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20 ${!session && status === "loading" ? `${NavbarCSS.loading}` : `${NavbarCSS.loaded}`}`}>
                <li className="text-gray-700 hover:text-emerald-400 hover:font-semibold cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                  <Link legacyBehavior href={`/python`}>
                    <a className={(Path === "/python" ? "text-emerald-400" : "")}>Python</a>
                  </Link>
                </li>
                <li className="text-gray-700 hover:text-emerald-400 hover:font-semibold cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <Link legacyBehavior href={`/cryptography`}>
                    <a className={(Path === "/cryptography" ? "text-emerald-400" : "")}>Cryptography</a>
                  </Link>
                </li>
                <li className="text-gray-700 hover:text-emerald-400  cursor-pointer hover:font-semibold text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <Link legacyBehavior href={`/javascript`}>
                    <a className={(Path === "/javascript" ? "text-emerald-400" : "")}>Javascript</a>
                  </Link>
                </li>
                <li className=" text-gray-700 hover:text-emerald-400 hover:font-semibold cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <Link legacyBehavior href={`/quantum-computing`}>
                    <a className={(Path === "/quantum-computing" ? "text-emerald-400" : " ")}>Quantum Computing</a>
                  </Link>
                </li>
                <li className="pr-5 text-gray-700 hover:text-emerald-400 hover:font-semibold cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <Link legacyBehavior href={`/about`}>
                    <a className={(Path === "/about" ? "text-emerald-400" : "")}>About</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
          </div>
          {!session && (
            <Link legacyBehavior href={`/signin`}>
              <a>
                <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Sign In</button>
              </a>
            </Link>
          )}
          {session && (
            // <div className='flex items-center gap-5'>
            //   <Image className='rounded-full h-10' src={session.user.image} width={40} height={5} alt={session.user.name} />
            //   <Link legacyBehavior href={`/api/auth/signout`}>
            //     <a>
            //       <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm" onClick={
            //         e => {
            //           e.preventDefault()
            //           signOut()
            //         }
            //       }>Sign Out</button>
            //     </a>
            //   </Link>

            // </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50">
                  <Image className='rounded-full h-10' src={session.user.image} width={40} height={5} alt={session.user.name} />                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                            onclick={e => {
                              e.preventDefault()
                              signOut()
                            }
                            }
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </nav >
    </>
  )
}

export default Navbar