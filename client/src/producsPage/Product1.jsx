import React, { useContext } from 'react'
import { products } from '../constants'
import Nav from '../components/Nav'
import { useParams } from 'react-router'
import { motion } from "framer-motion"
import { arrowDown, arrowRight } from '../assets/icons'
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cart from '../components/Cart'
import { UserContext } from '../context/UserContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product1 = () => {
    const { id } = useParams()
    const product = products.find(product => product.id === id)
    const { user } = useContext(UserContext)


    const sendToCart = () => {
        try {
            if(user){
                axios.post('/addToCart', { product })
                toast.success('Item added to cart successfully')
            }else{
                toast.error('You Should be a member')
            }
        }catch(err){
            toast.error('Something went wrong')
            console.error(err)
        }
    }


  return (
    <main className=' relative'>
        <Nav />
        <section className=" wide:padding-l padding-b">
            <section className=' w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
                <div className=' mt-40 relative xl:h-[70vh] h-[60vh] xl:w-1/2 flex flex-col justify-center items-center max-lg:items-center w-[90%] md:ml-8 max-xl:padding-x m-auto bg-[#f5f5f5e4] rounded-3xl'>
                    <Link to={'/products'}><img src={arrowDown} width={50} height={50} alt="" className=' rotate-90 absolute top-8 left-8 z-10 bg-white rounded-full px-3 py-3 text-2xl hover:scale-105 cursor-pointer'/></Link>
                    <img src={product.imgURL} alt="product" className=' w-full h-full object-center aspect-square transition ease-in-out duration-500' />
                </div>
                <div className='relative flex-1 xl:flex flex-col justify-start items-start xl:max-h-screen max-xl:py-40 xl:ml-40 m-auto md:m-28 gap-4'>
                    <h3 className='mt-8 font-montserrat text-xl'>Meteroite • Codepromo</h3>
                        <div className=' flex gap-x-24 items-start justify-start xl:flex-col flex-row'>
                            <h1 className=' text-4xl font-palanquin font-bold text-dark leading-normal'>{product.name}</h1>
                            <p className='mt-12 font-semibold font-montserrat text-dark text-2xl leading-normal'>{product.price}</p>
                        </div>
                    <div className='mt-6 flex flex-col'>
                        <span className='font-semibold font-montserrat text-dark text-2xl leading-normal'>choose a size</span>
                        <div className='mt-6 flex flow-row gap-4'>
                            {product.type.includes("Shoes")? (
                                <>
                                    <label>
                                        <input type="radio" id="radio-1" name="radio-group" className=" hidden" />
                                        <label className="cursor-pointer border border-dark bg-dark text-white text-xl font-semibold  w-12 h-12 flex items-center justify-center rounded-lg">
                                            39
                                        </label>
                                    </label>
                                    <label>
                                        <input type="radio" id="radio-1" name="radio-group" className=" hidden" />
                                        <label className="cursor-pointer border border-dark bg-white text-dark text-xl font-semibold  w-12 h-12 flex items-center justify-center rounded-lg hover:bg-dark hover:text-white transition duration-500">
                                            41
                                        </label>
                                    </label>
                                </>
                            ): (
                                <>
                                    <label>
                                        <input type="radio" id="radio-1" name="radio-group" className=" hidden" />
                                        <label className="cursor-pointer border border-dark bg-dark text-white text-xl font-semibold  w-12 h-12 flex items-center justify-center rounded-lg">
                                            S
                                        </label>
                                    </label>
                                    <label>
                                        <input type="radio" id="radio-1" name="radio-group" className=" hidden" />
                                        <label className="cursor-pointer border border-dark bg-white text-dark text-xl font-semibold  w-12 h-12 flex items-center justify-center rounded-lg hover:bg-dark hover:text-white transition duration-500">
                                            M
                                        </label>
                                    </label>
                                    <label>
                                        <input type="radio" id="radio-1" name="radio-group" className=" hidden" />
                                        <label className="cursor-pointer border border-dark bg-white text-dark text-xl font-semibold  w-12 h-12 flex items-center justify-center rounded-lg hover:bg-dark hover:text-white transition duration-500">
                                            L
                                        </label>
                                    </label>
                                </>
                            )}
                        </div>
                    </div>
                    <motion.button onClick={sendToCart} whileTap={{scale: 0.95}} className="buttonStyle ml-14 mt-12 flex items-center justify-center gap-4 bg-dark min-w-[250px]">
                        Add To Card 
                        <img src={arrowRight} alt="arrow right" className=' ml-2  w-8 h-8'/>
                    </motion.button>
                    <div className=' flex items-start justify-center flex-col mt-12 gap-2'>
                        <div className=' flex items-center justify-center gap-2'>
                            <TbTruckDelivery className='h-8 w-8 text-dark'/>
                            <p className=' text-xl underline'>Delivery</p>
                        </div>
                        <div className=' flex items-start justify-center gap-2'>
                            <HiOutlineArrowPathRoundedSquare className='h-8 w-8 text-dark'/>
                            <p className=' text-xl underline'>Return and refund</p>
                        </div>
                        <div className=' flex items-start justify-center gap-2'>
                            <AiOutlineCheck className='h-8 w-8 text-dark'/>
                            <p className=' text-xl underline'>Help and customer service</p>
                        </div>
                    </div>
                </div>
                <Cart />
            </section>
        </section>
    </main>
  )
}

export default Product1