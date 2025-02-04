import React from 'react'
import { PopularProductList } from './Products'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const PopularProducts = () => {
    return (
        <div className='w-[83%] ml-28 mt-24'>
            <p className='font-semibold text-2xl'>Popular Products</p>
            <div className='grid grid-cols-5 mt-6 gap-3 rounded-xl'>
                {PopularProductList.map((item) => (
                    <div className='h-[52vh] w-full border border-gray-200 rounded-lg pt-6'>

                        {/* Image Section */}
                        <div className='pt-2 pl-9'>
                            <img src={item.image} alt={item.title}
                                className='object-contain w-36 h-36'
                            />
                        </div>

                        {/* Description Section */}
                        <div className='pl-9 py-2'>
                            <span className='text-xs text-gray-300'>{item.description}</span>
                            <h1 className='text-base text-black font-semibold'>{item.title}</h1>
                        </div>

                        {/* Rating Section */}
                        <div className='w-[70%] pl-9 flex items-center gap-1'>
                            <div className='flex items-center'>
                                {[1, 1, 1, 1].map((item) => (
                                    <StarIcon className='text-yellow-400' style={{ fontSize: '18' }} />
                                ))}
                                <StarHalfIcon className='text-yellow-400' style={{ fontSize: '18' }} />
                            </div>
                            <span className='text-xs text-gray-800'>4.3(4)</span>
                        </div>

                        {/* Price section */}
                        <div className='w-[80%] h-[15%] ml-9 mt-2 flex items-center justify-between'>
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
