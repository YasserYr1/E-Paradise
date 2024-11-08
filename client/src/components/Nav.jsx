import { useContext, useEffect, useState } from "react";
import { arrowDown, hamburger } from "../assets/icons"
import { logo } from "../assets/images"
import { navLinks } from "../constants"
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { HiShoppingBag } from "react-icons/hi2";
import { CartContext } from "../context/CartContext";
import { SlClose } from "react-icons/sl";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [resNav, setResNav] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { cartMenu, setCartMenu } = useContext(CartContext);

  const navigate = useNavigate();


  const showMenu = () => {
    setIsMenu(true)
  }

  const cart_menu = () => {
    if (user) {
      setCartMenu(!cartMenu)
    }
  }

  async function logout(){
    await axios.post('/logout');
    navigate('/');
    setUser(null);
    setCartMenu(false);
    toast.success('Logged out')

}

useEffect(() => {
  // Add or remove the 'overflow-hidden' class to the body based on isNavbarOpen
  if (resNav) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  // Cleanup the effect
  return () => {
    document.body.classList.remove('overflow-hidden');
  };
}, [resNav]);




  return (
    <header className=" padding-x pt-8 pb-0 fixed w-full bg-white z-20 ">
      <nav className=' flex justify-between items-center max-container'>
        <a href="/" className=' font-bold text-3xl font-montserrat'>
          <img src={logo} alt="logo" width={260} height={260}  />
        </a>
        <ul className=' flex-1 flex justify-center items-center xl:gap-16 gap-4  mr-3 max-lg:hidden'>
          {navLinks.map(item=> (
            <li key={item.label}>
              <a href={`/${item.href}`} className=' font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block' onClick={()=>setResNav(true)}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} className=' cursor-pointer' />
        </div>

        <div className=" flex items-center justify-center max-lg:hidden">
          <button onClick={cart_menu} className=" relative box-border">
            <HiShoppingBag className=" text-4xl text-slate-700"/>
          </button>
          <div onClick={showMenu} onMouseLeave={() => setIsMenu(false)}  className='relative flex cursor-pointer items-center gap-2 py-3 px-7 '>
            <div className="bg-slate-700 text-white rounded-full border border-slate-700 overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 relative top-1 bg-slate-700">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
            {!!user && (
              <h1 className=" text-xl capitalize font-montserrat text-dark">{user.userName}</h1>
            )}
            <img src={arrowDown} alt="arrowDown" width={20} height={20}  />
            {isMenu && (
                  <motion.div
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    end={{opacity:0, y:30}}
                    onMouseEnter={showMenu}
                    onMouseLeave={()=>setIsMenu(false)}
                    className=" px-6 py-4 w-48 bg-[#FAFAFAAA] backdrop-blur-md rounded-md shadow-md absolute top-12 right-8 flex flex-col gap-4"
                  >
                    {!!user && (
                      <>
                        <a
                          className=" text-xl text-dark"          
                        >
                          Dashboard
                        </a>

                        <a
                          className=" text-xl text-dark"
                        >
                          My Profile
                        </a>
                        <a
                          className=" text-xl text-dark"
                        >
                          Orders
                        </a>
                        <hr />
                      </>
                    )}
                    {!!user? (
                      <div className=" flex flex-col gap-3">
                        <button onClick={logout} className=" text-xl py-1 px-4 bg-dark text-white rounded-2xl font-montserrat cursor-pointer flex items-center justify-center">Log out</button>
                      </div>
                    ): (
                      <div className=" flex flex-col gap-3">
                        <Link to={'/login'} className=" text-xl py-1 px-4 bg-dark text-white rounded-2xl font-montserrat cursor-pointer flex items-center justify-center">Sign In</Link>
                      </div>
                    )}
                  </motion.div>
                )}
          </div>
        </div>
      </nav>
      {!!resNav && (
        <nav className='fixed top-0 right-0 w-full bg-dark h-[90%]'>
          <SlClose className='absolute top-8 left-8 text-5xl text-white cursor-pointer' onClick={() => setResNav(false)} /> 
          <motion.a whileHover={{ scale: 1.1 }} href={'/login'} className=" absolute top-8 right-8 bg-slate-50 px-12 py-4 rounded-3xl font-pacifico text-dark text-2xl font-semibold">
              Sign In
            </motion.a>  
          <ul className=' mt-36 flex-1 flex flex-col justify-center items-center gap-16  mr-3'>
            {navLinks.map(item=> (
              <li key={item.label}>
                <a onClick={() => setResNav(false)} href={`/${item.href}`} className=' font-pacifico leading-normal text-4xl text-white underline hover:opacity-90 duration-300'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Nav