import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex gap-4 items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt="Search Icon" width={18} height={14} />
        <input type="text" className='w-[200px] p-2 bg-transparent outline-none' placeholder='Search...' />
      </div>
      {/* ICON AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt="Message Icon" width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/announcement.png" alt="Announcement Icon" width={20} height={20} />
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>Kawsar</span>
          <span className='text-[10px] text-gray-500 text-right'>Superadmin</span>
        </div>

        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/avatar.png" alt="User Icon" width={36} height={36} />
        </div>
      </div>
    </div>
  );
}