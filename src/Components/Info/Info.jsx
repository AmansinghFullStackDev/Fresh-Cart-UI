import React from 'react'
import ScheduleIcon from '@mui/icons-material/Schedule';
import RedeemIcon from '@mui/icons-material/Redeem';
import InventoryIcon from '@mui/icons-material/Inventory';
import SyncIcon from '@mui/icons-material/Sync';

const Info = () => {
    return (
        <main className='bg-red-300 grid grid-cols-4 h-[50vh] w-[83%] ml-28 p-3 gap-8 mt-20 '>
            <div className='border border-gray-400'>
                <div className='h-20px w-20px  mt-5'>
                    <ScheduleIcon />
                </div>
                <div className='pt-6'>
                    <h1 className='text-gray-800'>10 minute grocery now</h1>
                    <p className='text-gray-500 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias voluptatum! Aperiam perferendis omnis delectus id magni</p>
                </div>
            </div>
            <div className='border border-gray-400'>
                <div className='h-20px w-20px  mt-5'>
                    <RedeemIcon />
                </div>
                <div className='pt-6'>
                    <h1 className='text-gray-800'>10 minute grocery now</h1>
                    <p className='text-gray-500 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias voluptatum! Aperiam perferendis omnis delectus id magni</p>
                </div>
            </div>
            <div className='border border-gray-400'>
                <div className='h-20px w-20px  mt-5'>
                    <InventoryIcon />
                </div>
                <div className='pt-6'>
                    <h1 className='text-gray-800'>10 minute grocery now</h1>
                    <p className='text-gray-500 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias voluptatum! Aperiam perferendis omnis delectus id magni</p>
                </div>
            </div>
            <div className='border border-gray-400'>
                <div className='h-20 w-20 bg-red-700  mt-2'>
                    <SyncIcon className=''/>
                </div>
                <div className='pt-4'>
                    <h1 className='text-gray-800'>10 minute grocery now</h1>
                    <p className='text-gray-500 pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, alias voluptatum! Aperiam perferendis omnis delectus id magni</p>
                </div>
            </div>
        </main>
    )
}

export default Info