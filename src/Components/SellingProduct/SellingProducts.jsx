import React from 'react'
import Sell from '../../Assets/S1.png'
import { BestSellingProducts } from './SellingProduct'

const SellingProducts = () => {
    return (
        <div className='h-[85vh] w-[83%] ml-28 pt-3 flex gap-5'>
            <div className='h-[82%] w-[22%] rounded-xl overflow-hidden'>
                <img src={Sell} alt="Sell"
                    className='object-contain h-[100%] '
                />
            </div>
            <div className='w-[78%] grid grid-cols-3 gap-3'>
                {BestSellingProducts.map((item) => (
                    <div className='h-full w-full border border-gray-200 rounded-lg'>

                        {/* Image Section */}
                        <div className='pt-12 pl-16'>
                            <img src={item.image} alt={item.title}
                                className='object-contain w-36 h-36'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SellingProducts
