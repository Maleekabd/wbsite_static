import React from 'react'
import Image from 'next/image'
import Blockchain from "../../public/assets/blockchain.jpg"
import Google from "../../public/assets/google.svg"
import { signIn } from 'next-auth/react'

export const SignIn = () => {

  const googleHandler = async () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000"
    })
  }

  return (
    <>
      <div className='mx-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/3  flex justify-center items-center'>
            <div className='flex flex-col text-center'>
              <h1 className='pb-10 text-3xl font-semibold'>Sign In</h1>
              <div className='input-button'>
                <button type='submit' onClick={googleHandler} className='p-5 bg-emerald-400 rounded flex items-center justify-center gap-3'>Continue With Google <Image src={Google} width={25} height={25} alt={`continue with google`}/></button>
              </div>
              <div className='input-button'>
                <button type='submit' className='p-5'>Continue With Github</button>
              </div>
            </div>
          </div>
          <div className='md:w-2/3'>
            <Image src={Blockchain} className='h-screen' alt=''width={50} height={50}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn