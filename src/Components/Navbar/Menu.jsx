import { Badge } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Menu = () => {
  return (
    <section className='h-auto w-72 rounded-2xl bg-[#f0f3f2] absolute right-0 mt-[510px]'>

      <div className='flex items-center h-16 w-full gap-14 pl-10 border-b-4 border-gray-500 border-double'>
        <Badge badgeContent={4} color='success' className='text-gray-500 hover:text-green-500'>
          <FavoriteBorderIcon fontSize='large' />
        </Badge>
        <PersonOutlineOutlinedIcon className='text-gray-500 hover:text-green-500' fontSize='large' />
        <Badge badgeContent={4} color='success' className='text-gray-500 hover:text-green-500'>
          <ShoppingBagOutlinedIcon fontSize='large' />
        </Badge>
      </div>
      <div className='w-full uppercase'>
        <ul className="w-full">
          {['Home', 'Shop', 'Stores', 'Mega Menu', 'Pages', 'Account'].map((item) => (
            <li
              className="flex justify-between mt-1 border-b-2 border-gray-200 cursor-pointer hover:text-green-600 p-2"
            >
              <h2>{item}</h2>
            </li>
          ))}
          <li className='flex justify-between mt-1 w-full cursor-pointer p-2 hover:text-green-600'>Dashboard</li>
          <li className='flex justify-between w-full cursor-pointer p-2 hover:text-green-600'>Docs</li>
        </ul>
      </div>
    </section>
  )
}

export default Menu