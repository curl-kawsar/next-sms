"use client";

import Image from 'next/image';
import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 53,
        fill: '#fcd34d',
    },
    {
        name: 'Boys',
        count: 53,
        fill: '#0ea5e9',
    }
];

export default function CountChart() {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='mt-5 flex justify-between items-center'>
                <h1>Students</h1>
                <Image src="/moreDark.png" alt="Student Icon" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={35} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'  />
            </div>
            {/* BOTTOM */}
            <div className='flex justify-center gap-16 mt-4'>
                <div className="flex flex-col gap-1 items-center">
                    <div className='w-5 h-5 rounded-full bg-sky-500'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-500'>Boys (55%)</h2>
                </div>

                <div className="flex flex-col gap-1 items-center">
                    <div className='w-5 h-5 rounded-full bg-yellow-300'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-500'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
}