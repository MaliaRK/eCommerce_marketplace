import React from 'react'
import Image from 'next/image'


const Contact = () => {
  return (
    <div className='max-w-[1440px] mx-auto my-[4%] md:grid grid-cols-[80%_auto] '>
      <div className='mx-10'>
        <h3 className='text-2xl text-center'><strong>GET HELP</strong></h3>
        <p className='mx-[30%] flex items center justify-around rounded-md border-[1px] border-[#cccccc] '>
          <input type="text" placeholder='What can we help you with?'className='outline-none md:pr-32 py-1' />
          <Image src='/search.png' alt='search' width={24} height={20} className='mx-aut'></Image>       
        </p>
        <h3 className='text-2xl my-4'><strong>WHAT PAYMENT OPTIONS I USE ON NIKE ORDERS?</strong></h3>
        <p className='text-sm'>We want to make buying favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
        <p className='m-3 '>Visa, Master, Diners club, Discover, American express, Visa Electron, Maestro <br />
        if you enter your PAN information at checkout, you will be able to pay for your order ith payment
        or a local credit or debit card. <br /> Apple Pay</p>
        <p><u>Nike Members</u> can store multiple debit cards in their profile for faster checkout.
          if you are not already a Member, <u>join us</u> today.</p>
        <button className='bg-black text-white px-4 py-1 mx-4 my-6 rounded-md'>JOIN US</button>
        <button className='bg-black text-white px-4 py-1 mx-4 my-6 rounded-md'>SHOP NIKE</button>
        <h3 className='text-2xl text-center'><strong>FAQs</strong></h3>
        <p><strong>Can I pay for my order with multiple methods?</strong></p>
        <p>No, payment for Nike orders can not be split between multiple payment methods.</p>
        <br />
        <p><strong>What payment method is accepted for SNKRS orders?</strong></p>
        <p>You can use any accepted credit card to pay for your SNKRS order.</p>
        <br />
        <p><strong>Why don&apos;t I see Apple Pay as an option?</strong></p>
        <p>To see Apple Pay as an option in the Nike App or on Nike.com, you will need to use a compatible
          Apple device running the latest OS, be signed in to your iCloud account and have a supported card
          in your Wallet. Additionally, you will need to use safari to use Apple Pay on Nike
        </p>
        <br />
        <p>Was this answer helpful?</p>
        <span className='text-[#cccccc]'>👍👎 Related</span>
        <ul className='mt-4 '>
          <li>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</li>
          <li>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</li>
        </ul>
      </div>
      <div className='mr-10'>
        <div className='text-center text-xs my-8'>
          <Image src='/phone.png' alt='phone' width={64} height={20} className='mx-auto'></Image>
          <p>000 0800 919 0566</p>     
          <p>Products & Orders: 24 hours a day, 7 days a week</p>     
          <p>Company info & Enquiries: 07:30-16:30, Monday-Friday</p>     
        </div>
        <div className='text-center text-xs my-8'>
          <Image src='/message.png' alt='message' width={64} height={20} className='mx-auto'></Image>
          <p>24 hours a day 7 days a week</p>          
        </div>
        <div className='text-center text-xs my-8'>
          <Image src='/email.png' alt='email' width={64} height={20} className='mx-auto'></Image>
          <p>We&apos;ll reply within five business days</p>          
        </div>
        <div className='text-center text-xs my-8'>
          <Image src='/map.png' alt='map' width={64} height={20} className='mx-auto'></Image>
          <p>STORE LOCATION</p>          
          <p>Find Nike retail stores near you</p>          
        </div>
      </div>
    </div>
  )
}

export default Contact
