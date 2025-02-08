import React from 'react'
import Sell from '../../Assets/S1.png'
import { BestSellingProducts } from './SellingProduct'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddIcon from '@mui/icons-material/Add';

const SellingProducts = () => {
	return (
		<main className='h-[555px] w-[83%] mx-auto mt-8 flex gap-3 bg-green-500'>

			<div className=' bg-slate-500 w-[250px] h-auto  overflow-hidden'>
				<img src={Sell} alt="Sell"
					className='w-full rounded-2xl'
				/>
			</div>

			<section className='w-[78%] grid md:grid-cols-2 xl:grid-cols-3 gap-3 mx-auto bg-cyan-500'>
				{BestSellingProducts.map(() => (
					<p className='border border-black bg-red-500'>dvdauwyvgqeyugewv</p>
				))}
			</section>

		</main>
	)
}

export default SellingProducts
