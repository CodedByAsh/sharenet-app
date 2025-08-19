import Link from 'next/link';
import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function page() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#111111]'>

    <div className='relative p-10 bg-[#181818] rounded-lg shadow-sm text-center w-2xl'>
        
      <h1 className="text-white text-2xl font-bold mb-4">Contact Us</h1>
  <Link href='/' className='absolute top-4 right-4 text-white  flex items-center gap-1 font-semibold'>
        <HiArrowNarrowLeft className="inline w-5 h-5" /> Home
  </Link>
      <div className="text-white mb-6 text-left flex-col space-y-4">
        <p className="mt-2 border-2 rounded-2xl p-3 font-semibold">Telephone: <a href="tel:+27217004800" className="text-white">(021) 700 4800</a></p>
        <p className="mt-2 border-2 rounded-2xl p-3 font-semibold">International: <a href="tel:+27217004800" className="text-white">+27 21 700 4800</a></p>
        <p className="mt-2 border-2 rounded-2xl p-3 font-semibold">Email: <a href="mailto:support@sharenet.co.za" className="text-white">support@sharenet.co.za</a></p>
      </div>
      <div className="mb-6">
<iframe
  title="Sharenet Location"
  src="https://www.google.com/maps?q=Sharenet+(Pty)+Ltd,+301+Imperial+Terraces,+Tyger+Waterfront,+Bellville,+Cape+Town,+7530,+South+Africa&output=embed"
  width="100%"
  height="250"
  style={{ border: 0, borderRadius: '8px' }}
  allowFullScreen={true}
  loading="lazy"

/>
      </div>
      <p className="text-white text-sm">For more information, visit <a href="https://www.sharenet.co.za" className="text-blue-400 underline">sharenet.co.za</a></p>
    </div>

    </div>
  )
}
