import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import getStripe, {PRICE_ID} from '../lib/getStripe';


function Header() {
  const location = useLocation();
const [menustate, setMenustate] = useState(false);
  const changeTheme = () => {
    if (localStorage.getItem('color-theme') === 'light') {
      localStorage.setItem('color-theme', 'dark');
    } else {
      localStorage.setItem('color-theme', 'light');
    }
    window.location.href = location.pathname;
  }

  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      lineItems: [{
        price: PRICE_ID,
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/success`,
      submitType: 'donate',
    });
    console.warn(error.message);
  }
 async function handleMenuOpen() {
   setMenustate(true);
 }
   async function handleMenuClose() {
   setMenustate(false);
 }
  return (
    <header className='fixed top-0 left-0 w-full h-28 flex justify-between items-center px-5 lg:px-20 z-50 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60'>
      <div className='flex-1 md:flex-auto items-center flex gap-2 md:gap-0'>
      <a href='/'>
        <h3 className='font-bold dark:text-white'>HHU</h3>
      </a>
        <div onClick={handleMenuOpen} className="menu-btn md:hidden"></div>
        </div>
      <div className={`w-[250px] md:w-auto ms-[-250px] md:ms-0 left-nav bg-black md:bg-transparent fixed md:relative top-0 bottom-0 left-0 right-0 px-[40px] md:px-0 py-[80px] md:py-0 flex flex1 md:items-center flex-col md:flex-row gap-[30px] md:gap-[2rem] md:justify-center lg:gap-[4rem] xl:gap-16 dark:text-white ${menustate ? 'open' : ''}`}>
        <div onClick={handleMenuClose} className="close md:hidden">X</div>
        <a onClick={handleMenuClose} href='/#about-us' className="text2 cursor-pointer">About Us</a>
        <a onClick={handleMenuClose} href='/#projects' className="text2 cursor-pointer">Projects</a>
        <a onClick={handleMenuClose} href='/#upcoming' className="text2 cursor-pointer">Upcoming</a>
        <a onClick={handleMenuClose} href='/#contact' className="text2 cursor-pointer">Contact</a>
      </div>
      <div className="flex-1 md:flex-auto flex items-center justify-end gap-2 xl:gap-8">
        <a href="https://buy.stripe.com/test_14kfZY1irclPbaofYY" className="flex items-center h-[38px] sm:h-14 px-4 sm:px-6 text3 sm:text2 rounded-[5px] sm:rounded-xl text-white dark:text-black bg-black dark:bg-white">
          Donation
        </a>
        <button onClick={changeTheme} className="h-[38px] flex sm:block items-center sm:h-14 w-[38px] sm:w-auto p-[5px] sm:px-4 rounded-[5px] sm:rounded-xl font-medium bg-black dark:bg-white stroke-white dark:stroke-black">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57141 15.9999C8.57141 20.1026 11.8973 23.4284 16 23.4284V8.57129C11.8973 8.57129 8.57141 11.8972 8.57141 15.9999Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9999 1.14258V3.42829" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9999 28.5713V30.857"  strokeLinecap="round" stroke-linejoin="round"/>
            <path d="M30.857 16H28.5713" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.42854 16H1.14282" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.5143 5.48535L24.8914 7.10821" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.1087 24.8906L5.48584 26.5135" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.5142 26.5135L24.8914 24.8906" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.10857 7.10821L5.48572 5.48535" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
