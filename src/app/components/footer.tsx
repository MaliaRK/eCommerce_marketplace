import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='max-w-[1440px] mx-auto mt-5 py-5 bg-black text-white'>
        <div className='grid grid-cols-2 gap-10 md:flex justify-between itms-center mx-[8%] my-5'>
            <ul>
                <li className='mt-3'>FIMD A STORE</li>
                <li className='mt-3'>BECOME A MEMBER</li>
                <li className='mt-3'>SIGN UP FOR EMAIL</li>
                <li className='mt-3'>Send Us Feedback</li>
                <li className='mt-3'>STUDENT DISCOUNTS</li>
            </ul>
            <ul className='text-xs text-[#cccccc]'>
                <li className='mt-3 text-normal text-white decoration-none'>GET HELP</li>
                <li className='mt-3'>Other Status</li>
                <li className='mt-3'>Delivery</li>
                <li className='mt-3'>Returns</li>
                <li className='mt-3'>Paymets Options</li>
                <Link href='./footer' target='_blank'><li className='mt-3'>Contact Us On Nike.com Inquiries</li></Link>
                <Link href='./footer' target='_blank'><li className='mt-3'>Contact Us On All Other Inquiries</li></Link>
            </ul>
            <ul className='text-xs text-[#cccccc]'>
                <li className='mt-3 text-normal text-white'>ABOUT NIKE</li>
                <li className='mt-3'>News</li>
                <li className='mt-3'>Careers</li>
                <li className='mt-3'>Investors</li>
                <li className='mt-3'>Sustainability</li>
            </ul>
            <ul className='flex gap-5 items-center md:items-start'>
                <li><Image src='/twitter.png' alt='twitter' width={30} height={10}></Image></li>       
                <li><Image src='/facebook.png' alt='facebook' width={30} height={10}></Image></li>
                <li><Image src='/utube.png' alt='utube' width={30} height={10}></Image></li>
                <li><Image src='/camera.png' alt='camera' width={30} height={10}></Image></li>
            </ul>        
        </div>
        <div className='md:flex justify-between items-center mt-[8%] mx-5'>
            <div className='flex justify-around gap-2'>
                <Image src='/location.png' alt='location' width={20} height={10}></Image>
                <p>India &nbsp; &nbsp; &copy; 2023 Nike, Inc. All Right Reserved</p>
            </div>
            <ul className='flex justify-between md:gap-24 mt-4 md:mt-0 '>
                <li>Guides</li>
                <li>Terms of Sale</li>
                <li>Terms of Use</li>
                <li>Nike Privacy Policy</li>
            </ul>
        </div>
    </div>
  )      
}

export default Footer