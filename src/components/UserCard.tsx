import Image from 'next/image'
import React from 'react'

export default function UserCard({type}: {type: string}) {
  return (
    <div className='rounded-2xl odd:bg-[#B57EDC] even:bg-[#FFD700] p-4 flex-1' >
        <div className='flex justify-between items-center'>
            <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-500'>
                2024/25
            </span>
        <Image src="/more.png" alt="Student Icon" width={20} height={20}></Image>
        </div>
    <h1 className='text-2xl font-semibold my-4'>1,324</h1>
    <h2 className='capitalize text-sm font-medium text-gray-800'>{type}</h2>
    </div>
  )
  
}
