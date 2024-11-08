import { Link } from "react-router-dom"
import { arrowDown, star } from "../assets/icons"
import { specialOffer } from "../assets/images"
import Nav from "../components/Nav"
import { motion } from "framer-motion"
import { HiShoppingBag } from "react-icons/hi2"
import Cart from "../components/Cart"

const Product3 = () => {
  return (
    <main className=' relative'>
        <Nav />
        <section className=" wide:padding-l padding-b">
            <section className=' w-full flex justify-center items-center min-h-screen max-container'>
                <div className="relative xl:w-[85%] w-[60%] xl:h-[70vh] h-auto rounded-3xl xl:mt-28 mt-48 flex flex-col xl:flex-row items-center justify-center shadow-md">
                    <Link to={'/'}><img src={arrowDown} width={50} height={50} alt="" className=' rotate-90 absolute top-6 left-6 bg-[#ffffff99] rounded-full px-3 py-3 text-2xl hover:scale-105 cursor-pointer'/></Link>
                    <div className="bg-[#dBdBdB74] xl:w-2/6 w-full h-2/6 xl:h-full xl:rounded-l-3xl rounded-t-3xl flex flex-wrap xl:flex-col flex-row justify-center items-center gap-2">
                        <img src={specialOffer} alt="Special Offer" className=" h-full w-full xl:rounded-l-3xl rounded-t-3xl"/>
                    </div>
                    <div className=" bg-[#f8f8f8e4] xl:w-2/3 w-full  xl:h-full h-2/3 xl:rounded-r-3xl rounded-b-3xl">
                        <div className="flex xl:flex-nowrap flex-wrap xl:gap-72 gap-8 ml-14 mt-10">
                            <h1 className=" text-3xl font-bold text-dark font-montserrat">New Balance 9060</h1>
                            <div className=" flex gap-2">
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                        </div>

                        <h3 className=" text-2xl text-gray-400 font-montserrat font-semibold ml-14 mt-2">Sport/Comfort</h3>
                        <p className=" text-2xl text-red-500 font-montserrat font-semibold ml-14 mt-2">$120<span className="ml-4 text-dark line-through">$300</span></p>

                        <div className=" flex flex-col gap-4 xl:mt-20 mt-10 xl:mb-0 mb-8">
                            <h1 className=" font-bold font-montserrat text-2xl text-dark ml-14">Description</h1>
                            <p className=" font-palanquin text-gray-400 ml-14">Sway bars, taken from the 990, are expanded and utilized throughout the entire upper for a sense of visible motion, while wavy lines and scaled up proportions on a sculpted pod midsole place an exaggerated emphasis on the familiar cushioning platforms of ABZORB and SBS.</p>
                        </div>
                        <div className=" ml-20 xl:mt-20 mt-8 xl:mb-0 mb-4">
                            <motion.button whileTap={{scale: 0.95}} className="buttonStyle flex items-center justify-center gap-4 bg-dark min-w-[300px]">
                                <HiShoppingBag className=" text-4xl text-white"/>
                                Add To Card    
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <Cart />
    </main>
  )
}

export default Product3