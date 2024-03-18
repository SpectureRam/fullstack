import { useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'; // Import the hamburger menu icon
import { useNavigate ,Link } from 'react-router-dom';
const Navbar = () => {
  
  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [logoutTrigger, setLogoutTrigger] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('name');
    setLogoutTrigger(prevState => !prevState);
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem('name');

    if (token) {
      try {
        setUsername(token);
      } catch (error) {
        console.log('Error decoding token:', error);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup by removing the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [logoutTrigger]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click is outside of the dropdown, so close it
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <svg height="116.79180864705171" viewBox="0 0 369.8947368421052 104.98851971851263" className="looka-1j8o68f" width="160px"><defs id="SvgjsDefs2108"></defs><g id="SvgjsG2109" transform="matrix(1.1489222380011028,0,0,1.1489222380011028,-12.159427749310092,-4.951850397252375)" fill="#256ae6"><path xmlns="http://www.w3.org/2000/svg" d="M89.9395142,47.5261612c-3.7366638,18.2685776-19.9030838,32.0092392-39.2736893,32.0092392  c-19.3689251,0-35.5285912-13.7406616-39.271656-32.0092392c-0.5273972,2.6113396-0.8108349,5.3151321-0.8108349,8.0796661  c0,22.1405411,17.9456596,40.0841751,40.0824928,40.0841751c22.138855,0,40.0841751-17.943634,40.0841751-40.0841751  C90.75,52.8412933,90.4733124,50.1375008,89.9395142,47.5261612"></path><path xmlns="http://www.w3.org/2000/svg" d="M32.2457428,14.7985439c-1.8055687,1.1860523-3.5058575,2.5752354-5.0941219,4.1601257  c-12.6733799,12.6764164-12.6733799,33.2286911,0,45.9034195c6.3399067,6.3382111,14.64361,9.5066452,22.9540768,9.5066452  c8.308773,0,16.6158676-3.1684341,22.9527206-9.5066452c1.5848923-1.5831985,2.9686737-3.2936096,4.1550674-5.0944519  c-5.3974686,3.5655785-11.6287155,5.3481979-17.8599586,5.3481979c-8.3054008,0-16.6158638-3.1667404-22.9523849-9.5049515  C25.3129883,44.5210457,23.9288769,27.3993797,32.2457428,14.7985439"></path><path xmlns="http://www.w3.org/2000/svg" d="M59.3076401,4.3099961C44.57967,4.3116832,32.5126457,16.1182175,32.2622757,30.9035473  C32.0054932,45.8488159,43.9041443,58.16959,58.852787,58.41996c0.161293,0.0033722,0.3195457,0.0067482,0.4811707,0.0067482  c1.7002907,0,3.3675117-0.1582527,4.9756813-0.4599113C40.8727112,30.0863018,65.2257538,4.9592037,65.2257538,4.9592037  c-1.7532654-0.3920889-3.575367-0.61479-5.4436951-0.6458335C59.623806,4.3116832,59.4655533,4.3099961,59.3076401,4.3099961"></path></g><g id="SvgjsG2110" transform="matrix(1.0027467944811104,0,0,1.0027467944811104,95.23557757876124,32.746566745972075)" fill="#256ae6"><path d="M23.281 16.875 l0 -15.547 l-6.5625 0 l0 37.344 l6.5625 0 l0 -21.797 z M47.2656 12.5 c0.9375 -2.2916 2.2916 -4.2447 4.0624 -5.8593 c1.6146 -1.6146 3.698 -2.9167 6.2501 -3.9063 s5.2344 -1.4844 8.0469 -1.4844 l8.6719 0 l0 5.9375 l-8.5938 0 c-2.0313 0 -3.8281 0.33852 -5.3906 1.0156 c-1.6666 0.67711 -3.0208 1.5625 -4.0624 2.6563 c-1.0938 1.0416 -1.9791 2.3958 -2.6563 4.0624 c-0.625 1.5104 -0.9375 3.2031 -0.9375 5.0781 s0.3125 3.5677 0.9375 5.0781 c0.625 1.5625 1.5104 2.9166 2.6563 4.0625 c1.0416 1.0416 2.3958 1.901 4.0624 2.5781 c1.6666 0.625 3.4635 0.9375 5.3906 0.9375 l8.5938 0 l0 5.9375 l-8.6719 0 c-2.9166 0 -5.5729 -0.46875 -7.9688 -1.4063 c-2.5 -1.0416 -4.6094 -2.3698 -6.3281 -3.9844 c-1.7709 -1.6666 -3.125 -3.6458 -4.0625 -5.9374 c-0.98961 -2.3959 -1.4844 -4.8438 -1.4844 -7.3438 c0 -2.6563 0.49477 -5.1302 1.4844 -7.4219 z M91.094 16.875 l0 -15.547 l-6.5625 0 l0 37.344 l6.5625 0 l0 -21.797 z M108.98400000000001 1.328000000000003 l0 15.547 l-11.406 0 l0 6.0938 l11.406 0 l0 15.703 l6.4844 0 l0 -37.344 l-6.4844 0 z M150.703 38.5937 l7.0313 0 l-13.594 -37.266 l-7.1094 0 l7.8906 22.266 z M121.9531 38.5937 l6.875 0 l8.125 -19.844 l-3.3594 -8.9063 z M195.781 38.5937 l-10.078 -14.063 c1.3541 -0.41664 2.552 -0.91141 3.5937 -1.4843 c1.1459 -0.72914 2.0834 -1.5364 2.8125 -2.4218 c0.83336 -0.98961 1.4323 -2.0573 1.797 -3.2032 c0.46875 -1.25 0.70313 -2.6563 0.70313 -4.2188 c0 -1.8229 -0.3125 -3.4635 -0.9375 -4.9219 c-0.625 -1.4063 -1.5365 -2.6302 -2.7344 -3.6719 c-1.1459 -0.98961 -2.6042 -1.7709 -4.3751 -2.3438 c-1.8229 -0.57289 -3.75 -0.85938 -5.7813 -0.85938 l-16.563 0 l0 5.9375 l16.016 0 c2.4479 0 4.3489 0.52086 5.703 1.5625 s2.0313 2.6041 2.0313 4.6875 c0 1.9271 -0.67711 3.4375 -2.0313 4.5313 c-1.3541 1.1459 -3.2291 1.7188 -5.625 1.7188 l-16.094 0 l0 18.75 l6.4844 0 l0 -12.969 l8.2031 0 l9.1406 12.969 l7.7344 0 l0 0 z M221.875 22.891 l13.828 0 l0 -5.7813 l-13.828 0 l0 5.7813 z M235.703 27.422 l-5.7813 0.000076294 l0 5.3125 l-5.7031 0 c-1.9791 0 -3.75 -0.3125 -5.3125 -0.9375 c-1.5625 -0.57289 -2.9427 -1.4323 -4.1406 -2.5781 c-1.0938 -1.1979 -1.9531 -2.552 -2.5781 -4.0624 c-0.625 -1.4584 -0.9375 -3.1511 -0.9375 -5.0782 c0 -1.8229 0.3125 -3.5156 0.9375 -5.0781 c0.67711 -1.6666 1.5365 -3.0208 2.5781 -4.0624 c1.1459 -1.1459 2.5261 -2.0573 4.1407 -2.7345 c1.5625 -0.625 3.3334 -0.9375 5.3125 -0.9375 l11.406 0.078125 l0 -5.9375 l-11.406 -0.078125 c-2.9166 0 -5.5989 0.46875 -8.0469 1.4063 c-2.3959 0.9375 -4.4792 2.2396 -6.2501 3.9063 c-1.7188 1.6666 -3.099 3.6458 -4.1406 5.9374 c-0.9375 2.2396 -1.4063 4.6875 -1.4063 7.3438 s0.46875 5.1302 1.4063 7.4219 c1.0416 2.3959 2.4219 4.375 4.1406 5.9375 c1.5625 1.5625 3.6459 2.8906 6.25 3.9844 c2.5 0.9375 5.1823 1.4063 8.0469 1.4063 l11.484 0 l0 -11.25 z M246.0938 1.4059999999999988 l27.813 0 l0 5.9375 l-27.813 0 l0 -5.9375 z M246.0938 32.6562 l27.734 0 l0 5.9375 l-27.734 0 l0 -5.9375 z M246.0938 16.875 l25.078 0 l0 5.8594 l-25.078 0 l0 -5.8594 z"></path></g></svg>
            </a>
          </div>

          {/* Hamburger menu button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={faBars} className="h-8 w-8 fill-current" />
          </button>

          <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/user/home"> Home </a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/user/recharge"> Recharge and Bill Payment </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
            </li>
          </ul>
          </nav>
          
            <button className="ml-6" onClick={handleToggle}>
            <FontAwesomeIcon icon={faUserCircle} size='lg'/>
            </button>
          <div className="flex items-center gap-4">
          {isOpen && (
  <div className="absolute right-0 mt-40 w-48 bg-white border border-gray-200 rounded shadow-lg z-10" ref={dropdownRef}>
    {username ? ( // Check if username is available
      <div>
        <p className="block w-full py-2 px-4 text-left text-gray-800">
          Hello, {username}
        </p>
        <button
  className="block w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200 focus:outline-none"
>
  <Link to="/user/profile">Profile</Link>
</button>
        <button
          className="block w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200 focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    ) : (
      <div>
        <p className="block w-full py-2 px-4 text-left text-gray-800">
          Please login
        </p>
        <button
          className="block w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    )}
  </div>
)}

          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
