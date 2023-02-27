import React from 'react'
import Image from 'next/image'
import Blockchain from "../../public/assets/blockchain.jpg"

export const SignIn = () => {
  return (
    <>
      <div className='flex  h-screen'>
        <div className='flex flex-col justify-center w-full items-center'>
          <h1 className='pb-10 text-3xl font-semibold'>Sign In</h1>
          <div className='p-5 bg-emerald-400 rounded'>Continue With Google</div>
          <div className='p-5'>Continue With Github</div>
        </div>
        <div>
          <Image src={Blockchain}  className='h-screen' />
        </div>
      </div>
    </>
  )
}

export default SignIn