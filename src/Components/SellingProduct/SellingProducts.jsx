import React from 'react'
import Sell from '../../Assets/S1.png'
import { BestSellingProducts } from './SellingProduct'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Box } from '@mui/material';

const SellingProducts = () => {
    return (
        <div className='h-[85vh] w-[83%] ml-28 pt-3 flex gap-5'>
            <div className='h-[82%] w-[22%] rounded-2xl overflow-hidden'>
                <img src={Sell} alt="Sell"
                    className='object-contain h-[100%] '
                />
            </div>
            <div className='w-[78%] grid grid-cols-3 gap-3'>
                {BestSellingProducts.map((item) => (
                    <div className='h-full w-full border border-gray-200 rounded-lg'>

                        {/* Image Section */}
                        <div className='pt-10 pl-16'>
                            <img src={item.image} alt={item.title}
                                className='object-contain w-36 h-36'
                            />
                        </div>

                        {/* Details Section */}
                        <div className='pl-6 py-3 mt-10'>
                            <span className='text-sm text-gray-300'>{item.description}</span>
                            <h1 className='text-base text-black font-semibold'>{item.title}</h1>
                        </div>


                        <div className='h-[6vh] flex justify-between'>
                            {/* Price Section */}
                            <div className='w-[30%] h-[15%] ml-6 mt-3 flex items-center justify-between'>
                                <div className='font-semibold text-base'>
                                    <span className='text-base text-black '>{item.price}</span>
                                    <span className='text-base text-gray-300 line-through'>{item.oldprice}</span>
                                </div>
                            </div>

                            {/* Rating Section */}
                            <div className='w-[70%] h-[15%] mt-3 pl-10 flex items-center gap-1'>
                                <div className='flex'>
                                    {[1, 1, 1, 1].map((item) => (
                                        <StarIcon className='text-yellow-400' style={{ fontSize: '18' }} />
                                    ))}
                                    <StarHalfIcon className='text-yellow-400' style={{ fontSize: '18' }} />
                                </div>
                                <span className='text-xs text-gray-800'>4.3</span>
                            </div>
                        </div>

                        {/* Button Section */}
                        <div className='text-white rounded-md mr-3 text-center w-[86%] h-12 ml-5 pt-2 font-bold text-lg' style={{ backgroundColor: '#0aad0a' }}>
                            <h1>+ Add</h1>
                        </div>

                        {/* Days Section */}
                        <div className='h-[25vh] w-[86%] bg-red-600 ml-5'>
                            <div className='h-1/2 w-[100%] bg-yellow-500'>

                            </div>
                            <div className='h-1/2 w-[100%] bg-yellow-900'>
                                <Box>

                                </Box>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default SellingProducts
