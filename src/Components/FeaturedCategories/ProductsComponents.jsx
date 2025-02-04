import React from 'react'
import { ProductList } from './Products'

const ProductsComponents = () => {
    return (
        <div className='w-full mt-5 grid grid-cols-4 gap-4 h-[35vh]'>
            {ProductList.map((item) => (
                <div className="pt-10 border border-gray-200 rounded-lg">
                    <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-md mx-auto" />
                    <span className="text-gray-400 text-lg font-bold mt-2 text-center block">{item.title}</span>
                </div>

            ))}
        </div>
    )
}

export default ProductsComponents