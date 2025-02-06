import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='max-w-[1400px] flex justify-center my-10'><SignIn /></div>
  )
}