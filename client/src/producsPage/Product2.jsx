import { HiShoppingBag } from "react-icons/hi2"
import { arrowDown, star } from "../assets/icons"
import { nLogo, superQ } from "../assets/images"
import Nav from "../components/Nav"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Cart from "../components/Cart"

const Product2 = () => {
  return (
    <main className=' relative'>
        <Nav />
        <section className=" wide:padding-l padding-b ">
            <section className=' w-full flex justify-center items-center min-h-screen max-container'>
                <div className="relative w-[85%] xl:h-[70vh] h-auto rounded-3xl xl:mt-28 mt-48 flex flex-col xl:flex-row items-center justify-center shadow-md">
                    <Link to={'/'}><img src={arrowDown} width={50} height={50} alt="" className=' rotate-90 absolute top-6 left-6 bg-[#ffffff99] rounded-full px-3 py-3 text-2xl hover:scale-105 cursor-pointer'/></Link>
                    <div className="bg-[#dBdBdB74] xl:w-2/6 w-full h-2/6 xl:h-full xl:rounded-l-3xl rounded-t-3xl flex flex-wrap xl:flex-col flex-row justify-center items-center gap-2">
                        <img src={nLogo} alt="New Balance" width={100} height={100} className=" xl:mt-0 mt-4"/>
                        <img src={superQ} alt="Super Quality" className="xl:rotate-[25deg] rotate-0 ml-8 xl:mb-0 mb-8"/>
                    </div>
                    <div className=" bg-[#f8f8f8e4] xl:w-2/3 w-full  xl:h-full h-2/3 xl:rounded-r-3xl rounded-b-3xl">
                        <div className="flex xl:flex-nowrap flex-wrap xl:gap-72 gap-8 ml-14 mt-10 ">
                            <h1 className=" text-3xl font-bold text-dark font-montserrat">New Balance 610</h1>
                            <div className=" flex gap-2">
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                        </div>

                        <h3 className=" text-2xl text-gray-400 font-montserrat font-semibold ml-14 mt-2">Sport</h3>
                        <p className=" text-2xl text-red-500 font-montserrat font-semibold ml-14 mt-2">$200</p>

                        <div className=" flex flex-col gap-4 xl:mt-20 mt-10 xl:mb-0 mb-8">
                            <h1 className=" font-bold font-montserrat text-2xl text-dark ml-14">Description</h1>
                            <p className=" font-palanquin text-gray-400 ml-14">New Balance propose ses sneakers 610, au design signature. Leur couleur noire intemporelle s'accorde facilement avec toutes vos tenues. Dotées d'une semelle amortissante et d'une tige en cuir de haute qualité, elles ne font aucun compromis sur le confort ou l'esthétique.</p>
                        </div>
                        <div className=" ml-20 xl:mt-20 mt-8 xl:mb-0 mb-4">
                            <motion.button whileTap={{scale: 0.95}} className="buttonStyle flex items-center justify-center gap-4 bg-dark min-w-[400px]">
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

export default Product2