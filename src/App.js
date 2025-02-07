import './App.css';
import MiniNavbar from './Components/MiniNavbar/MiniNavbar';
import Navbar from './Components/Navbar/Navbar';
import BackgroundImage from './Assets/bg.png'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ProductsComponents from './Components/FeaturedCategories/ProductsComponents';
import Discount from './Components/DiscountOffer/Discount';
import PopularProducts from './Components/PopularProducts/PopularProducts';
import SellingProducts from './Components/SellingProduct/SellingProducts';
import Info from './Components/Info/Info';
import Menu from './Components/Navbar/Menu';

function App() {
  return (
    <div>
      <MiniNavbar />

      <Navbar />

      <div className='h-full w-[83%] overflow-hidden ml-10 sm:ml-14 md:ml-20 xl:ml-28 pt-5'>
        <img src={BackgroundImage} alt='bg'
          className='rounded-2xl h-auto w-auto'
        />
      </div>

      <div className='h-[40vh] w-[83%] ml-8 sm:ml-14 md:ml-20 xl:ml-28 pt-5 mt-8'>
        <div className='h-[10%] w-full text-base sm:text-xl flex items-center justify-between font-semibold'>
          <p>Featured Categories</p>
          <div className='flex items-center justify-end gap-5 border border-gray-100 '>
            <ArrowCircleLeftOutlinedIcon style={{ fontSize: '35' }} />
            <ArrowCircleRightOutlinedIcon style={{ fontSize: '35' }} />
          </div>
        </div>

        <ProductsComponents />
      </div>


      <Discount />
      {/*   
      <PopularProducts /> 

      <div className='h-[5vh] w-[83%] text-black text-2xl font-semibold mt-24 ml-28'>
        <p>Daily Best Sells</p>
      </div>
      <SellingProducts /> 

      <Info /> 

      <div className='bg-green-500 h-80 mt-5'>
        <p>dwbvgfqewjbgoewgvwebg</p>
      </div> */}
    </div>
  );
}

export default App;
