import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,} from '@/components/ui/carousel'



const Hero = () => {
  return (
    <div className='mt-[10%] md:mt-[5%] mx-auto'>
      <div className='bg-[#cccccc] text-center py-1 my-1'>
          <h3><strong>Hello Nike APP</strong></h3>
          <p>Download the apps to access everything Nike. <strong><u>Get Your Great</u></strong></p>
      </div>
      <Image src='/hero.png' alt='hero' width={1344} height={700} className='mx-auto'></Image>
      <div className='text-center my-3'>
        <p className='text-xs'>First Look</p>
        <h3 className='text-xl'><strong>NIKE AIR MAX PULSE</strong></h3>
        <p className='my-4'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br /> --designed to push you past your limits and help you go to the max.</p>
        <button className='bg-black text-white rounded-full px-4 py-1 mx-4'>Notify Me</button>
        <button className='bg-black text-white rounded-full px-4 py-1'>Shop Air Max</button>
      </div>
      <section className='mt-[5%]'>
        <h3 className='mb-2 mx-auto'><strong>Best of Air Max</strong></h3>
        <Carousel>
          <CarouselContent className='mx-5'>
            <CarouselItem className='flex gap-5'>
              <div>
                <Image src='/1.png' alt='shoe' width={150} height={150} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='md:flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
              <div>
                <Image src='/2.png' alt='shoe' width={150} height={150} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='md:flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
              <div>
                <Image src='/3.png' alt='shoe' width={150} height={150} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='md:flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
            </CarouselItem>           
            <CarouselItem className='flex gap-5'>
              <div>
                <Image src='/1.png' alt='shoe' width={150} height={150} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='md:flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
              <div>
                <Image src='/2.png' alt='shoe' width={150} height={150} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='md:marker:flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
              <div>
                <Image src='/3.png' alt='shoe' width={150} height={150} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='md:flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
            </CarouselItem>                  
          </CarouselContent>         
          <CarouselPrevious className='absolute left-[75%] md:left-[88%] -top-4 '/>
          <CarouselNext className='absolute -top-4 left-[85%] md:left-[92%]'/>
        </Carousel>
      </section>
      <section className='mt-[5%]'>
        <h3 className='mb-2'><strong>Featured</strong></h3>
        <Image src='/boy.png' alt='boy' width={1344} height={700} className='mx-auto'></Image>
        <div className='text-center mx-auto my-4'>
          <h3 className='text-2xl'><strong>STEP INTO HAT FEELS GOOD</strong></h3>
          <p className='my-4'>Cause everyone should know the feeling of running in this perfect pair.</p>
          <button className='bg-black text-white rounded-full px-4 py-1 mx-4'>Find Your Shoe</button>
        </div>
      </section>
      <section className='mt-[5%]'>
        <h3 className='mb-2'><strong>Gear Up</strong></h3>
        <div className='flex gap-5 mx-[5%]'>
          <div>
            <Image src='/gearup1.png' alt='men' width={300} height={300}></Image>
            <p><strong>Nike Dri-FIT ADV Techknit Ultra &nbsp; &nbsp; <span>&#8377;3 895</span></strong></p>
            <p>Men&apos;s Short-Sleeve</p>
            <p>Running Top</p>
          </div>
          <div>
            <Image src='/gearup2.png' alt='men' width={300} height={300}></Image>
            <p><strong>Nike Dri-FIT Challenger &nbsp; &nbsp; <span>&#8377;2 495</span></strong></p>
            <p>Men&apos;s 18cm (approx) 2- <br /> in-1 Versatile Shorts</p>
          </div>
          <div>
            <Image src='/gearup3.png' alt='women' width={300} height={300}></Image>
            <p><strong>Nike Dri-FIT ADV Run Division &nbsp; &nbsp; <span>&#8377;5 295</span></strong></p>
            <p>Women&apos;s Long-Sleeve <br /> Running Top</p>
          </div>
          <div>
            <Image src='/gearup4.png' alt='women' width={300} height={300}></Image>  
            <p><strong>Nike Fast &nbsp; &nbsp; &nbsp; &nbsp; <span>&#8377;3 795</span></strong></p>
            <p>Women&apos;s Mid-Rise 7/8 Running <br /> Legging with Pockets</p>
          </div>
        </div>
      </section>
      <section className='mt-[5%]'>
        <h3 className='mb-2'><strong>Don&apos;s Miss</strong></h3>
        <Image src='/dontmis.png' alt='men' width={1344} height={700} className='mx-auto'></Image>
        <div className='text-center mx-auto my-8'>
          <h3 className='text-2xl'><strong>FLIGHT ESSENTIALS</strong></h3>
          <p className='my-4 text-xs'>Your built-to-last, all-week wears--but with style only Jordan Brand can deliver.</p>
          <button className='bg-black text-white rounded-full px-4 py-1 mx-4'>Shop</button>
        </div>
      </section>
      <section className='mt-[5%]'>
        <h3 className='mb-2'><strong>The Essentials</strong></h3>
        <div className='flex gap-5 mx-[5%]'>
          <Image src='/essential1.png' alt='essential' width={100} height={100} className='my-2 mx-auto md:w-72 '></Image>
          <Image src='/essential2.png' alt='essential' width={100} height={100} className='my-2 mx-auto md:w-72'></Image>
          <Image src='/essential3.png' alt='essential' width={100} height={100} className='my-2 mx-auto md:w-72'></Image>     
        </div>
        <div className='text-center my-4'>
          <ul className='flex justify-around md:justify-center md:gap-32'>
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



{/* <CarouselItem className='md:hidden gap-5'>
              <div>
                <Image src='/1.png' alt='shoe' width={100} height={100} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
            </CarouselItem> 
            <CarouselItem className='md:hidden gap-5'>
              <div>
                <Image src='/2.png' alt='shoe' width={100} height={100} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
            </CarouselItem>  
            <CarouselItem className='md:hidden gap-5'>
              <div>
                <Image src='/3.png' alt='shoe' width={100} height={100} className='md:w-[400px] mx-auto my-4'></Image>
                <div className='flex justify-between'><strong>Nike Air Max SE</strong><strong>&#8377;16 995</strong></div>
                <p>Men&apos;s Shoes</p>
              </div>
            </CarouselItem> */}
