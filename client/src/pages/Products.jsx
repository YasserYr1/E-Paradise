import { useState } from "react"
import Nav from "../components/Nav"
import PopularProductsCard from "../components/PopularProductsCard"
import { products } from "../constants"
import Cart from "../components/Cart"

const Products = () => {
    const [type, setType] = useState("All")
    
  return (
    <main className=' relative'>
        <Nav />
        <section className=" wide:padding-l padding-b">
            <section className=' w-full flex justify-center items-center flex-col min-h-screen max-container'>
                <div className=" pt-40 flex justify-center items-center md:gap-8 gap-3">
                    <button onClick={()=> setType("All")} className=" border border-dark text-dark text-xl font-semibold font-montserrat rounded-full px-4 py-2 hover:bg-dark hover:text-white ease-in-out transform transition duration-700">All</button>
                    <button onClick={()=> setType("Men")} className=" border border-dark text-dark text-xl font-semibold font-montserrat rounded-full px-4 py-2 hover:bg-dark hover:text-white ease-in-out transform transition duration-700">Men</button>
                    <button onClick={()=> setType("Women")} className=" border border-dark text-dark text-xl font-semibold font-montserrat rounded-full px-4 py-2 hover:bg-dark hover:text-white ease-in-out transform transition duration-700">Women</button>
                    <button onClick={()=> setType("Shoes")} className=" border border-dark text-dark text-xl font-semibold font-montserrat rounded-full px-4 py-2 hover:bg-dark hover:text-white ease-in-out transform transition duration-700">Shoes</button>
                    <button onClick={()=> setType("Fashion")} className=" border border-dark text-dark text-xl font-semibold font-montserrat rounded-full px-4 py-2 hover:bg-dark hover:text-white ease-in-out transform transition duration-700">fashion</button>
                    <button onClick={()=> setType("Winter")} className=" border border-dark text-dark text-xl font-semibold font-montserrat rounded-full px-4 py-2 hover:bg-dark hover:text-white ease-in-out transform transition duration-700">Winter</button>
                </div>
                <div className=" ml-[10px] sm:ml-0  mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                    {products.filter(item=> item.type.includes(type)).map(product=> (
                        <PopularProductsCard key={product.name} {...product} />
                    ))}
                </div>
            </section>
        </section>
        <Cart />
    </main>
  )
}

export default Products