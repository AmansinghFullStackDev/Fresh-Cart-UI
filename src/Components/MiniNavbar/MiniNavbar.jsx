import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// 
const MiniNavbar = () => {
    return (

        <div className='flex items-center justify-between bg-[#f0f3f2]' style={{ height: '4%' }}>
            <div className='text-xs sm:text-sm sm:ml-32'>
                <p>Super Value Deals - Save more with coupons </p>
            </div>
            <div className='sm:flex items-center justify-between sm:mr-24 h-full sm:gap-4'>
                <div className='hidden sm:flex gap-2 items-center'>
                    <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/13/27/england-147080_640.png"
                        alt="britain"
                        width='25px'
                    />
                    <p>English</p>
                </div>
                <KeyboardArrowDownIcon />
            </div>
        </div>

    )
}

export default MiniNavbar
