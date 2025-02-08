import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Menu from './Menu';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <section className="h-[25vh] w-full">
            <div className="h-1/2 flex items-center justify-evenly">
                <div className='flex items-center w-[19%] h-[50%]'>
                    <ShoppingCartIcon style={{ color: '#76d176', height: '45px', width: '55px' }} />
                    <h1 className='font-bold hidden sm:block sm:text-xs md:text-2xl xl:text-4xl'>FreshCart</h1>
                </div>
                <div className="w-[40%] flex md:gap-4">

                    <div className="relative w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
                    </div>

                    <div className="relative ml-3">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 
                        pointer-events-none">
                            <LocationOnOutlinedIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Location"
                            className=" w-5 sm:w-32 pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                </div>
                <div className='hidden xl:flex items-center md:w-[15%] h-[50%] md:gap-3 lg:gap-9 md:pl-3 lg:pl-6'>
                    <Badge badgeContent={4} color='success' className='text-gray-500'>
                        <FavoriteBorderIcon />
                    </Badge>
                    <PersonOutlineOutlinedIcon className='text-gray-500' />
                    <Badge badgeContent={4} color='success' className='text-gray-500'>
                        <ShoppingBagOutlinedIcon />
                    </Badge>
                </div>
            </div>


            <div className="h-1/2 flex items-center">
                <div className='w-[28%] h-full pt-3'>
                    <div style={{ backgroundColor: '#0aad0a' }}
                        className="w-[65%] h-[80%] hidden lg:flex items-center justify-center gap-1 text-1xl
                         border border-black ml-28 rounded-lg">
                        <GridViewOutlinedIcon style={{ color: '#ffff' }} />
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>All Departments</h1>
                    </div>
                </div>
                <div className='w-[50%] h-full'>
                    <ul className='hidden xl:flex items-center gap-2 mt-6'>
                        {['Home', 'Shop', 'Stores', 'Mega Menu', 'Pages', 'Account'].map((item) => (
                            <li className='flex items-center gap-0'>
                                <h2>{item}</h2>
                                <KeyboardArrowDownIcon />
                            </li>

                        ))}
                        <li className='gap-2'>Dashboard</li>
                        <li className='gap-2'>Docs</li>
                    </ul>
                </div>
                <div className='bg-[#f0f3f2] lg:hidden ml-20 relative flex items-center justify-center h-14 w-14 
                rounded-lg border-2'>
                    <button onClick={() => setIsOpen((prev) => !prev)}
                        className="p-1 w-full duration-300 active:text-white">
                        {!isOpen ? <MenuIcon /> : <ArrowDropUpIcon />}
                    </button>
                    {isOpen && <Menu />}
                </div>
            </div>

        </section >
    );

}

export default Navbar
