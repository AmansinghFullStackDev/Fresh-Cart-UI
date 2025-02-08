import React from 'react'
import ScheduleIcon from '@mui/icons-material/Schedule';
import RedeemIcon from '@mui/icons-material/Redeem';
import InventoryIcon from '@mui/icons-material/Inventory';
import SyncIcon from '@mui/icons-material/Sync';

const Info = () => {
    return (
        <main className='grid grid-cols-2 lg:grid-cols-4 h-auto w-[83%] mx-auto  gap-8 mt-20 '>
            <div className='border p-3 rounded-lg'>
                <div className='h-auto w-auto mt-5'>
                    <ScheduleIcon className='text-[#76d176]' sx={{ fontSize: 60 }} />
                </div>
                <div className='pt-6'>
                    <h1 className='text-gray-800'>10 minute grocery now</h1>
                    <p className='text-gray-500 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias voluptatum! Aperiam perferendis omnis delectus id magni</p>
                </div>
            </div>
            <div className='border p-3 rounded-lg'>
                <div className='h-auto w-auto mt-5'>
                    <RedeemIcon className='text-[#76d176]' sx={{ fontSize: 60 }} />
                </div>
                <div className='pt-6'>
                    <h1 className='text-gray-800'>10 minute grocery now</h1>
                    <p className='text-gray-500 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias voluptatum! Aperiam perferendis omnis delectus id magni</p>
                </div>
            </div>
            <div className='border p-3 rounded-lg'>
                <div className='h-auto w-auto mt-5'>
                    <InventoryIcon className='text-[#76d176]' sx={{ fontSize: 60 }} />
                </div>
                <div className='pt-6'>
                    <h1 className='text-gray-800'>10 minute grocery now</h1>
                    <p className='text-gray-500 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias voluptatum! Aperiam perferendis omnis delectus id magni</p>
                </div>
            </div>
            <div className='border p-3 rounded-lg'>
                <div className='h-auto w-auto mt-5'>
                    <SyncIcon className='text-[#76d176]' sx={{ fontSize: 60 }} />
                </div>
                <div className='pt-6'>
                    <h1 className='text-gray-800'>10 minute grocery now</h1>
                    <p className='text-gray-500 pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias voluptatum! Aperiam perferendis omnis delectus id magni</p>
                </div>
            </div>
        </main>
    )
}

export default Info