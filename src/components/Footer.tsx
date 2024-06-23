function Footer() {
  return (
    <footer className='w-full px-5 md:px-20 dark:bg-black dark:text-white'>
      <div className="w-full max-w-screen-2xl h-44 py-10 sm:py-auto mx-auto flex flex-col sm:flex-row  gap-8 sm:gap-0 items-center justify-between">
        <div className="">
          <h3>
            HHU @ 2024
          </h3>
          <p className="text2 font-['Roboto-thin'] mt-2 sm:mt-6 dark:text-[#909090]">
            Privacy Policy
          </p>
        </div>
        <div className="flex items-center gap-8 stroke-black dark:stroke-white">
          <button>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.5635 10.2779C32.1035 10.2779 31.7307 9.90507 31.7307 9.44512C31.7307 8.98517 32.1035 8.6123 32.5635 8.6123" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32.5635 10.2779C33.0236 10.2779 33.3964 9.90507 33.3964 9.44512C33.3964 8.98517 33.0236 8.6123 32.5635 8.6123" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 9.5714C1 4.83757 4.83754 1 9.57141 1H32.4286C37.1624 1 41 4.83757 41 9.5714V32.4286C41 37.1623 37.1624 40.9999 32.4286 40.9999H9.57141C4.83754 40.9999 1 37.1623 1 32.4286V9.5714Z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.0001 29.4924C25.6916 29.4924 29.4948 25.6892 29.4948 20.9977C29.4948 16.3062 25.6916 12.5029 21.0001 12.5029C16.3085 12.5029 12.5053 16.3062 12.5053 20.9977C12.5053 25.6892 16.3085 29.4924 21.0001 29.4924Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.42859 35.7144V4.28585C1.42859 3.52808 1.72961 2.80137 2.26543 2.26555C2.80125 1.72973 3.52796 1.42871 4.28573 1.42871H35.7143C36.472 1.42871 37.1989 1.72973 37.7346 2.26555C38.2703 2.80137 38.5714 3.52808 38.5714 4.28585V35.7144C38.5714 36.4721 38.2703 37.199 37.7346 37.7347C37.1989 38.2704 36.472 38.5716 35.7143 38.5716H27.1429V25.0287H29.1714C29.6337 25.0287 30.0769 24.8451 30.4037 24.5183C30.7306 24.1914 30.9143 23.7481 30.9143 23.2859V21.0859C30.9143 20.857 30.8692 20.6303 30.7817 20.4189C30.694 20.2074 30.5657 20.0153 30.4037 19.8535C30.242 19.6916 30.0497 19.5633 29.8383 19.4757C29.6269 19.3881 29.4003 19.343 29.1714 19.343H27.2572V16.6573C27.2572 14.2573 28.3429 14.2573 29.4286 14.2573H30.8286C31.0586 14.2668 31.2877 14.2256 31.5 14.1367C31.7123 14.0479 31.9026 13.9135 32.0572 13.743C32.2232 13.5849 32.3546 13.3941 32.4432 13.1827C32.5317 12.9712 32.5754 12.7437 32.5714 12.5144V10.4001C32.5792 10.1675 32.5409 9.9356 32.4586 9.71777C32.3766 9.49991 32.2526 9.30037 32.0932 9.13054C31.934 8.96074 31.7429 8.82394 31.5309 8.72803C31.3189 8.63211 31.0897 8.57894 30.8572 8.57157H27.5714C26.6127 8.53551 25.6576 8.70803 24.772 9.07717C23.8865 9.44628 23.0916 10.0033 22.4424 10.7096C21.7931 11.4159 21.3049 12.2547 21.0115 13.1682C20.718 14.0816 20.6264 15.0478 20.7429 16.0001V19.343H18.9143C18.683 19.3392 18.4533 19.3815 18.2386 19.4674C18.0238 19.5533 17.8283 19.681 17.6634 19.8433C17.4985 20.0055 17.3676 20.1989 17.2782 20.4122C17.1888 20.6256 17.1428 20.8546 17.1429 21.0859V23.2859C17.1428 23.5171 17.1888 23.7461 17.2782 23.9595C17.3676 24.1728 17.4985 24.3662 17.6634 24.5285C17.8283 24.6907 18.0238 24.8185 18.2386 24.9043C18.4533 24.9902 18.683 25.0325 18.9143 25.0287H20.7429V38.5716H4.28573C3.52796 38.5716 2.80125 38.2704 2.26543 37.7347C1.72961 37.199 1.42859 36.4721 1.42859 35.7144Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6087 39.3744C13.7178 40.5941 11.4645 41.1258 9.22775 40.88C6.99101 40.6338 4.90717 39.6252 3.32668 38.0233L1.94494 36.6723C1.33918 36.0526 1 35.2206 1 34.3541C1 33.4877 1.33918 32.6553 1.94494 32.036L7.8096 26.2326C8.42403 25.6288 9.25101 25.2905 10.1125 25.2905C10.9739 25.2905 11.801 25.6288 12.4154 26.2326C13.035 26.8384 13.8671 27.1776 14.7336 27.1776C15.6001 27.1776 16.4322 26.8384 17.0518 26.2326L26.2633 17.0211C26.5706 16.7183 26.8146 16.3574 26.9812 15.9594C27.1477 15.5614 27.2335 15.1343 27.2335 14.7029C27.2335 14.2714 27.1477 13.8443 26.9812 13.4463C26.8146 13.0484 26.5706 12.6875 26.2633 12.3846C25.6595 11.7702 25.3212 10.9432 25.3212 10.0818C25.3212 9.22031 25.6595 8.39332 26.2633 7.77889L32.0972 1.94494C32.7169 1.33917 33.5489 1 34.4154 1C35.2821 1 36.1141 1.33917 36.7338 1.94494L38.0849 3.32668C39.6864 4.90717 40.6951 6.99101 40.9412 9.22775C41.1874 11.4645 40.6557 13.7178 39.4357 15.6087C33.0797 24.976 24.9923 33.0424 15.6087 39.3744Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
