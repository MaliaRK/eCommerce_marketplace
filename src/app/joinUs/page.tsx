import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const JoinUs = () => {
  return (
    <div className='max-w-[1440px] md:mx-[30%] text-[#cccccc]'>
      <Image src='/logo.png' alt='logo' width={58} height={20} className='mx-auto'></Image>
      <h3 className='text-2xl mx-[20%] text-center text-black'><strong>BECOME A NIKE MEMBER</strong></h3>
      <p className='mx-[10%] my-6 text-center'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
      <div className='mx-[10%]'>
        <p><input type="email" placeholder='Email address' className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' /></p>
        <p><input type="password" placeholder='Password' className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' /></p>
        <p><input type="text" placeholder='First Name' className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' /></p>
        <p><input type="text" placeholder='Last Name' className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' /></p>
        <p><input type="text" placeholder='Date of Birth' className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' /></p>
        <p>Get a Nike Member Reward every year on your Birthday.</p>
        <p><input type='text' placeholder='Pakistan' className='my-4 border-[#cccccc] border-[1px] outline-none py-2 md:py-1 pl-1 md:pr-36 rounded-md' /></p>  
        <p><input type='text' placeholder='Postal Code' className='my-4 mr-4 border-[#cccccc] border-[1px] outline-none p-1 md:text-center rounded-md' />
        <input type='text' placeholder='Locality' className='my-4  border-[#cccccc] border-[1px] outline-none p-1 md:text-center rounded-md' /></p>
        <p>⬜ Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
        <p>By creating an account, you agree to Nike&apos;s <u>Privacy Policy</u> and <u>Terms of Use</u>.</p>
        <button className='bg-black text-white px-16 md:px-32 py-1 my-6 mx-12 md:mx-4 rounded-md'>JOIN US</button>
        <p className='text-center'><span>Already a Member? </span><Link href='./login'><strong className='text-black'><u>Sign In</u></strong></Link></p>
      </div>
    </div>
  )
}

export default JoinUs