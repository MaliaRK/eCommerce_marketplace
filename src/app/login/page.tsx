import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Login = () => {
  return (
    <div className='max-w-[1440px] md:mx-[30%] text-[#cccccc]'>
      <Image src='/logo.png' alt='logo' width={58} height={20} className='mx-auto'></Image>
      <h3 className='text-2xl mx-[20%] text-center text-black'><strong>YOUR ACCOUNT FOR EVERYTHING NIKE</strong></h3>
      <div className='mx-[10%]'>
        <p><input type="email" placeholder='Email address' className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' /></p>
        <p><input type='password' placeholder='Password' className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' /></p>
        <div className='flex justify-around md:text-center my-2'>
          <p>☑ Keep me signed in</p>
          <p className='text-ed'>Forgotten your password?</p>
        </div>
        <p className='mx-[10] my-6 text-center'>By logging in, you agree to Nike&apos;s <u>Privacy Policy</u> and Terms of Use</p>
        <button className='bg-black text-white px-16 md:px-32 py-1 mx-12 md:mx-4 my-6 rounded-md'>SIGN IN</button>
        <p className='text-center'><span>Not a Member? </span><Link href='./joinUs'><strong className='text-black'><u>Join Us</u></strong></Link></p>
      </div>
    </div>
  )
}

export default Login