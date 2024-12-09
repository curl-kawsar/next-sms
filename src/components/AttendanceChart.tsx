"use client";
import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sunday',
    present: 40,
    absent: 24,
  },
  {
    name: 'Monday',
    present: 30,
    absent: 13,
  },
  {
    name: 'Tuesday',
    present: 20,
    absent: 9,
  },
  {
    name: 'Wednesday',
    present: 27,
    absent: 3,
  },
  {
    name: 'Thursday',
    present: 18,
    absent: 4,
  },
  {
    name: 'Friday',
    present: 23,
    absent: 8,
  },
];

export default function AttendanceChart() {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='mt-5 flex justify-between items-center mb-5'>
            <h1>Attendance</h1>
            <Image src="/moreDark.png" alt="Student Icon" width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="present" fill="#0ea5e9"/>
          <Bar dataKey="absent" fill="#fcd34d"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}