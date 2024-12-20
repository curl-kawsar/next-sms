import React from 'react';
import UserCard from '@/components/UserCard';
import CountChart from '@/components/CountChart';
import AttendanceChart from '@/components/AttendanceChart';
import Finance from '@/components/Finance';

export default function AdminPage() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* USER CARDS */}
        <div className='flex gap-4 flex-wrap'>
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Chart */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* Count Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
          <AttendanceChart/>
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className='w-full h-[500px]'>
        <Finance/>
        </div>
      </div>

      {/* RIGHT */}
      <div className='w-full lg:w-1/3'>
        RIGHT
      </div>
    </div >
  );
}