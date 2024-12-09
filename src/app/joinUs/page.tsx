import React from 'react'
import Image from 'next/image'


const JoinUs = () => {
  return (
    <div className='max-w-[1500px] mx-auto text-[#cccccc]'>
        <Image src='/logo.png' alt='logo' width={58} height={20} className='mx-auto'></Image>       
        <h3 className='text-2xl mx-[20%] text-center text-black'><strong>BECOME A NIKE MEMBER</strong></h3>
        <p className='mx-[10%] my-6 text-center'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
        <p><input type="email" placeholder='Email address' className='my-6 rounded-md outline-[#b6afaf] pr-64'/></p>
        <p><input type="password" placeholder='Password' className='my-6 rounded-md outline-[#b6afaf] pr-64'/></p>
        <p><input type="text" placeholder='First Name' className='my-6 rounded-md outline-[#b6afaf] pr-64'/></p>
        <p><input type="text" placeholder='Last Name' className='my-6 rounded-md outline-[#b6afaf] pr-64'/></p>
        <p><input type="text" placeholder='Date of Birth' className='my-6 rounded-md outline-[#b6afaf] pr-64'/></p>
        <p>Get a Nike Member Reward every year on your Birthday.</p>
        <p><input type='text' placeholder='Pakistan' className='my-6 rounded-md outline-[#b6afaf] pr-64'/></p>
        <div className='flex gap-2'>
            <button className='px-28 py-2'>Male</button>
            <button className='px-28 py-2'>Female</button>
        </div>
        <p>⬜ Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
        <p>By creating an account, you agree to Nike&apos;s <u>Privacy Policy</u> and <u>Terms of Use</u>.</p>
        <button className='bg-black text-white px-44 py-1 my-6 rounded-md'>JOIN US</button>
        <p className='text-center'><span>Already a Member? </span><strong className='text-black'><u>Sign In</u></strong></p> 
    </div>
  )
}

export default JoinUs