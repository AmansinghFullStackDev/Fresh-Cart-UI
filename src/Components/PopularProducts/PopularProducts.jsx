import React from 'react'
import { PopularProductList } from './Products'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const PopularProducts = () => {
    return (
        <div className='h-full w-[83%] mx-auto mt-20'>

            <p className='font-semibold text-lg md:text-2xl'>Popular Products</p>

            <div className='w-full h-full pt-6
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {PopularProductList.map((item) => (
                    <div className='h-[310px]  w-[255px] mx-auto sm:w-full rounded-lg border-2 border-gray-300'>

                        {/* Image Section */}
                        <div className='w-[150px] pt-6 mx-auto'>
                            <img src={item.image} alt={item.title} />
                        </div>

                        {/* Description Section */}
                        <div className=' h-[55px] w-[180px] mx-auto'>
                            <span className='sm:text-xs text-gray-300'>{item.description}</span>
                            <h1 className='sm:text-base text-black font-semibold'>{item.title}</h1>
                        </div>

                        {/* Rating Section */}
                        <div className='w-[180px] mx-auto flex items-center gap-1'>
                            <div className='flex items-center'>
                                {[1, 1, 1, 1].map((item) => (
                                    <StarIcon className='text-yellow-400' style={{ fontSize: '18' }} />
                                ))}
                                <StarHalfIcon className='text-yellow-400' style={{ fontSize: '18' }} />
                            </div>
                            <span className='text-xs text-gray-800'>4.3(4)</span>
                        </div>

                        {/* Price section */}
                        <div className='w-[180px] mx-auto mt-2 flex items-center justify-between'>
                            <div className='font-semibold text-base '>
                                <span className='text-xs text-black'>{item.price}</span>
                                <span className='text-xs text-gray-300 line-through'>{item.oldprice}</span>
                            </div>
                            <div className='text-white rounded-md mr-3 p-1' style={{ backgroundColor: '#0aad0a', width: 61 }}>
                                <h1>+Add</h1>
                            </div>
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default PopularProducts
