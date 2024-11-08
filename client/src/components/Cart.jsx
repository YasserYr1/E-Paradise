import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'
import { SlClose } from "react-icons/sl";
import axios from 'axios';
import { motion } from 'framer-motion';

const Cart = () => {
    const [total, setTotal] = useState(0)
    const {cart, cartMenu} = useContext(CartContext)
    const { user } = useContext(UserContext);

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
  return (
    <>
            {!!cartMenu && (
                <div className='fixed bottom-0 right-0 min-w-[20%] h-[88vh] bg-dark rounded-t-3xl flex flex-col'>
                    <div className='overflow-auto max-h-[60vh] py-3 flex flex-col items-center justify-start mt-3'>
                        {cart.length > 0 && cart.map(item => (
                            <div key={item._id} className='bg-[#FFFFFF33] w-[95%] rounded-3xl mb-3 box-border'>
                                <div className='flex items-center justify-between p-2'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-20 h-16 px-2'>
                                            <img src={item.imgURL} alt="product" className='bg-white rounded-xl w-full h-full object-center aspect-square'/>
                                        </div>
                                        <h1 className='text-xl font-montserrat text-white w-32'>{item.name}</h1>
                                    </div>
                                    <div className='flex items-center gap-8'>
                                        <p className='text-2xl text-white mx-2'>{item.quantity}</p>
                                        <SlClose className='text-3xl text-white cursor-pointer xl:mr-4 mr-6' onClick={() => deleteItem(item._id)} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                <div className=' absolute bottom-4 right-2 bg-[#FFFFFF33] w-[95%] h-[20vh] rounded-3xl flex flex-col items-center justify-center px-3 gap-8'>
                    <div className=' flex items-center justify-center gap-8'>
                        <h1 className=' text-3xl text-white font-bold font-montserrat'>TOTAL: </h1>
                        <h2 className=' text-3xl text-white font-semibold font-montserrat'>{total.toFixed(2)} $</h2>
                    </div>
                    <motion.a href='/bag' whileTap={{scale:"0.95"}} className='text-2xl py-2 px-6 border border-white text-white rounded-3xl font-palanquin font-semibold'>View items</motion.a>
                </div>
            </div>
        )}
    </>
  )
}

export default Cart