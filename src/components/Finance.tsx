"use client";
import Image from 'next/image';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
    profit: 4000 - 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
    profit: 3000 - 1398,
  },
  {
    name: 'March',
    income: 9800,
    expense: 2000,
    profit: 9800 - 2000,
  },
  {
    name: 'April',
    income: 3980,
    expense: 2708,
    profit: 3980 - 2708,
  },
  {
    name: 'May',
    income: 4890,
    expense: 1800,
    profit: 4890 - 1800,
  },
  {
    name: 'June',
    income: 3390,
    expense: 2800,
    profit: 3390 - 2800,
  },
  {
    name: 'July',
    income: 5490,
    expense: 300,
    profit: 5490 - 300,
  },
];

export default function Finance() {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      <div className='mt-5 flex justify-between items-center mb-5'>
        <h1>Finance</h1>
        <Image src="/moreDark.png" alt="More Options" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#0ea5e9" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expense" stroke="#fcd34d" />
          <Line type="monotone" dataKey="profit" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}