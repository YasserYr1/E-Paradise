import Nav from "../components/Nav"
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'
import { SlClose } from "react-icons/sl";
import axios from "axios";
import Cart from "../components/Cart";
import { Navigate, useNavigate } from "react-router";

const ShoppingCart = () => {
  const [total, setTotal] = useState(0)
  const {cart} = useContext(CartContext)
  const { user, ready } = useContext(UserContext);
  const navigate = useNavigate()

  const deleteItem = async (id) => {
    try {
        const response = await axios.delete('/deleteItem', { data: { id } });
        console.log(response);
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}


useEffect(() => {
    if (user) {
        let tot = 0;
        if (cart) {
          cart.map((data) => {
            tot = tot + parseFloat(data.price.replace(/[^0-9.]/g, "")) * data.quantity;
            setTotal(tot);
          });
        }
    }    
  }, [cart]);

  
  if (!ready) {
    return <div>Loading...</div>;
  }

  if(user === null){
    navigate('/login')
  }
  return (
    <main className=' relative'>
      <Nav />
      <section className=" wide:padding-l padding-b">
        <section className=' w-full flex xl:flex-row flex-col justify-start min-h-screen xl:gap-40 gap-8 max-container'>
          <div className=" flex xl:items-start flex-col xl:ml-0 ml-6 xl:w-[65%] w-full pt-48">
            <div className="flex gap-24 relative w-full ">
              <h1 className=" font-montserrat text-5xl text-dark font-bold">Shopping Bag</h1>
              <a href={'/order'} className="xl:hidden flex items-center justify-center buttonStyle min-w-[400px] absolute right-4">Buy Now</a>
            </div>
            <div className=" h-[60vh] w-full overflow-auto mt-10">
              {cart.length > 0 && cart.map(item => (
                <div key={item._id} className="relative m-2 flex items-start justify-start xl:w-full w-[93%] gap-12 border box-border overflow-hidden">
                  <img src={item.imgURL} width={250} height={250} alt="" />
                  <div className=" flex justify-start flex-col gap-10 mt-6">
                    <h2 className=" text-2xl text-dark font-bold">{item.name}</h2>
                    <p className="text-2xl">Free Delivery</p>
                    <p className=" text-2xl">Quantity: {item.quantity}</p>
                  </div>
                  <div className=" mt-6 absolute right-4 flex items-start justify-start gap-4">
                    <p className="text-2xl text-dark font-semibold ">{item.price}</p>
                    <SlClose className='text-3xl text-dark cursor-pointer xl:mr-4 mr-6' onClick={() => deleteItem(item._id)} />
                  </div>
                </div>
              ))}
            </div>
            <a href={'/order'} className="xl:flex hidden buttonStyle min-w-[400px] mt-8">Buy Now</a>
          </div>
          <div className=" xl:ml-0 ml-6 flex flex-1 justify-start flex-col gap-10 xl:pt-[250px]">
            <a href={'/order'} className="xl:flex hidden buttonStyle min-w-[400px] mt-8">Buy Now</a>
            <p className=" text-2xl font-semibold underline">BUY AS A GUEST</p>
            <div className="relative flex flex-col justify-start border-2 xl:w-full w-[90%] border-slate-200 gap-8 p-4 box-border">
              <h2 className="text-3xl font-bold">order summary</h2>
              <div className="flex justify-start">
                <p className=" text-2xl text-slate-800">1 Item</p>
                <p className=" text-2xl text-slate-800 absolute right-6">200$</p>
              </div>
              <div className="flex justify-start">
                <p className=" text-2xl text-slate-800">Reduction</p>
                <p className=" text-2xl text-slate-800 absolute right-6">0$</p>
              </div>
              <div className="flex justify-start">
                <p className=" text-2xl text-slate-800">Shipping</p>
                <p className=" text-2xl text-slate-800 absolute right-6">Free</p>
              </div>
            </div>
            <div className=" flex justify-start gap-72 overflow-hidden">
              <h2 className="text-3xl font-bold">TOTAL</h2>
              <h2 className="text-3xl font-bold">{total.toFixed(2)}</h2>
            </div>
            <a href={'/order'} className="xl:hidden flex items-center justify-center buttonStyle min-w-[400px] mt-8">Buy Now</a>
          </div>
        </section>
      </section>
      <Cart />
    </main>
  )
}

export default ShoppingCart