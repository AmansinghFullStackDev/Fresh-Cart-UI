import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MiniNavbar = () => {
    return (
        <div className='flex items-center justify-between' style={{ backgroundColor: '#f0f3f2', height: '4vh', width: '100%' }}>
            <div className='ml-32' style={{ height: '100%' }}>
                <p>Super Value Deals - Save more with coupons </p>
            </div>
            <div className='flex items-center justify-between mr-24' style={{ height: '100%', gap: 6 }}>
                <img
                    src="https://cdn.pixabay.com/photo/2013/07/12/13/27/england-147080_640.png" alt="britain" width='25vh'
                />
                <p>English</p>
                <KeyboardArrowDownIcon />
            </div>
        </div>
    )
}

export default MiniNavbar
