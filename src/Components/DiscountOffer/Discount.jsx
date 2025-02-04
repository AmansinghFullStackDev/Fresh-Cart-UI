import React from 'react'
import DiscountBg1 from '../../Assets/D1.png'
import DiscountBg2 from '../../Assets/D2.png'

const offer = [
    {
        image: DiscountBg1,
        title: "Fruits and Vegetables"
    },
    {
        image: DiscountBg2,
        title: "Baked Buns"
    }
]

const Discount = () => {
    return (
        <div className='h-[35vh] w-[83%] ml-28 mt-20 grid grid-cols-2 gap-3'>
            {offer.map((item) => (
                <div className='h-full w- overflow-hidden rounded-3xl'>
                    <img src={item.image} alt={item.title} className='object-cover w-full h-full ' />
                </div>
            ))}
        </div>
    )
}

export default Discount
