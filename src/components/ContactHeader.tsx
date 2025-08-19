import { useRouter } from 'next/navigation'
import React from 'react'

export default function ContactHeader() {

    const router = useRouter();

    const handleContactUsClick = () => {
        router.push("/contact");
    };

  return (
    <div className='w-full flex items-end justify-end px-10 py-4'>
      <button
      onClick={handleContactUsClick}
      className=' text-white font-semibold py-2 px-5 rounded-lg border-2 border-white hover:bg-white hover:text-black cursor-pointer transition-colors duration-300'>
        Contact Us
      </button>
    </div>
  )
}
