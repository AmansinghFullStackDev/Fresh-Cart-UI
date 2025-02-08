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
        <div className='min-h-[35vh] w-[83%] mx-auto mt-20 grid lg:grid-cols-2 gap-3'>
            {offer.map((item) => (
                <div className='h-full w-full overflow-hidden rounded-3xl'>
                    <img
                        src={item.image}
                        alt={item.title}
                        className='object-cover w-full h-auto'
                    />
                </div>
            ))}
        </div>
    )
}


export default Discount
