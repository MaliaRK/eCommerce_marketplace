import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,} from '@/components/ui/carousel'



const Hero = () => {
  return (
    <div className='max-w-[1500px] mx-auto mt-[10%]'>
      <div className='bg-[#cccccc] text-center py-1'>
          <h3><strong>Hello Nike APP</strong></h3>
          <p>Download the apps to access everything Nike. <strong><u>Get Your Great</u></strong></p>
      </div>
      <Image src='/hero.png' alt='hero' width={1344} height={10}></Image>
      <div className='text-center my-3'>
        <p className='text-xs'>First Look</p>
        <h3 className='text-xl'><strong>NIKE AIR MAX PULSE</strong></h3>
        <p className='my-4'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br /> --designed to push you past your limits and help you go to the max.</p>
        <button className='bg-black text-white rounded-full px-4 py-1 mx-4'>Notify Me</button>
        <button className='bg-black text-white rounded-full px-4 py-1'>Shop Air Max</button>
      </div>
      <section>
        <h3 className='mb-2'><strong>Best of Air Max</strong></h3>
        <Carousel className='my-4'>
          <CarouselContent>
            <CarouselItem className='flex gap-5 item-center'>
              <Image src='/airmax1.png' alt='shoe' width={440} height={10}></Image>
              <Image src='/airmax1.png' alt='shoe' width={440} height={10}></Image>
              <Image src='/airmax2.png' alt='shoe' width={440} height={10}></Image>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className='absolute left-[92%] -top-6 before:content-["shop"] before:text-black '/>
          <CarouselNext className='absolute -top-6 right-4 '/>
        </Carousel>
      </section>
      <section className='my-[8%]'>
        <h3 className='mb-2'><strong>Featured</strong></h3>
        <Image src='/boy.png' alt='boy' width={1344} height={10}></Image>
        <div className='text-center my-4'>
          <h3 className='text-2xl'><strong>STEP INTO HAT FEELS GOOD</strong></h3>
          <p className='my-4'>Cause everyone should know the feeling of running in this perfect pair.</p>
          <button className='bg-black text-white rounded-full px-4 py-1 mx-4'>Find Your Shoe</button>
        </div>
      </section>
      <section className='my-[5%]'>
      <h3 className='mb-2'><strong>Gear Up</strong></h3>
      <div className='flex gap-5'>
        <div className='text-xs'>
          <Image src='/gearup1.png' alt='men' width={300} height={10}></Image>
          <p><strong>Nike Dri-FIT ADV Techknit Ultra &nbsp; &nbsp; <span>&#8377;3 895</span></strong></p>
          <p>Men&apos's Short-Sleeve</p>
          <p>Running Top</p>
        </div>
        <div>
          <Image src='/gearup2.png' alt='men' width={300} height={10}></Image>
          <p><strong>Nike Dri-FIT Challenger &nbsp; &nbsp; <span>&#8377;2 495</span></strong></p>
          <p>Men&apos's 18cm (approx) 2- <br /> in-1 Versatile Shorts</p>
        </div>
        <div>
          <Image src='/gearup3.png' alt='women' width={300} height={10}></Image>
          <p><strong>Nike Dri-FIT ADV Run Division &nbsp; &nbsp; <span>&#8377;5 295</span></strong></p>
          <p>Women&apos's Long-Sleeve <br /> Running Top</p>
        </div>
        <div>
          <Image src='/gearup4.png' alt='women' width={300} height={10}></Image>  
          <p><strong>Nike Fast &nbsp; &nbsp; &nbsp; &nbsp; <span>&#8377;3 795</span></strong></p>
          <p>Women&apos's Mid-Rise 7/8 Running <br /> Legging with Pockets</p>
        </div>
      </div>
      </section>
      <section className='my-[8%]'>
        <h3 className='mb-2'><strong>Don&apos;s Miss</strong></h3>
        <Image src='/dontmis.png' alt='men' width={1344} height={10}></Image>
        <div className='text-center my-8'>
          <h3 className='text-2xl'><strong>FLIGHT ESSENTIALS</strong></h3>
          <p className='my-4 text-xs'>Your built-to-last, all-week wears--but with style only Jordan Brand can deliver.</p>
          <button className='bg-black text-white rounded-full px-4 py-1 mx-4'>Shop</button>
        </div>
      </section>
      <section className='my-[8%]'>
        <h3 className='mb-2'><strong>The Essentials</strong></h3>
        <div className='flex gap-5'>
          <Image src='/essential1.png' alt='essential' width={440} height={10}></Image>
          <Image src='/essential2.png' alt='essential' width={440} height={10}></Image>
          <Image src='/essential3.png' alt='essential' width={440} height={10}></Image>     
        </div>
        <div className='text-center my-4'>
          <ul className='flex justify-center gap-32'>
            <li>Icons</li>
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Kids</li>
          </ul>
        </div>
      </section>
      
    </div>
  )
}

export default Hero
