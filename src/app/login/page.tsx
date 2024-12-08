import React from 'react'
import Image from 'next/image'


const Login = () => {
  return (
    <div className='max-w-[1500px] mx-[30%] text-[#cccccc]'>
        <Image src='/logo.png' alt='logo' width={58} height={20} className='mx-auto'></Image>       
        <h3 className='text-2xl mx-[20%] text-center text-black'><strong>YOUR ACCOUNT FOR EVERYTHING NIKE</strong></h3>
        <p><input type="email" placeholder='Email address' className='my-6 rounded-md outline-[#b6afaf] pr-64' /></p>
        <p><input type='password' placeholder='Password' className='my-6 rounded-md outline-[#b6afaf] pr-64'/></p>
        <div className='flex justify-between my-2 mx-3  '>
            <span>☑ Keep me signed in</span>
            <span>Forgotten your password?</span>
        </div>
        <p className='mx-[10%] my-6 text-center'>By logging in, you agree to Nike&apos;s <u>Privacy Policy</u> and Terms of Use</p>
        <button className='bg-black text-white px-44 py-1 my-6 rounded-md'>SIGN IN</button>
        <p className='text-center'><span>Not a Member? </span><strong className='text-black'><u>Join Us</u></strong></p>
    </div>
  )
}

export default Login