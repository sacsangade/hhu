import { useLocation } from 'react-router-dom';
import getStripe, {PRICE_ID} from '../lib/getStripe';

function Header() {
  const location = useLocation()

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

  return (
    <header className='fixed top-0 left-0 w-full h-28 flex justify-between items-center px-5 lg:px-20 z-50 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60'>
      <a href='/' className='flex-1'>
        <h3 className='font-bold dark:text-white'>HHU</h3>
      </a>
      <div className="hidden md:flex items-center gap-16 dark:text-white">
        <a href='/#about-us' className="text2 cursor-pointer">About Us</a>
        <a href='/#projects' className="text2 cursor-pointer">Projects</a>
        <a href='/#upcoming' className="text2 cursor-pointer">Upcoming</a>
        <a href='/#contact' className="text2 cursor-pointer">Contact</a>
      </div>
      <div className="flex-1 flex items-center justify-end gap-2 md:gap-8">
        <button onClick={handleCheckout} className="h-[38px] sm:h-14 px-4 sm:px-6 text3 sm:text2 rounded-xl text-white dark:text-black bg-black dark:bg-white">
          Donation
        </button>
        <button onClick={changeTheme} className="h-[38px] sm:h-14 w-[38px] p-[10px] sm:px-4 rounded-xl font-medium bg-black dark:bg-white stroke-white dark:stroke-black">
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
