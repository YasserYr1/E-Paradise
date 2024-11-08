import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";


export const CartContext = createContext({})

const CartContextProvider = ({children}) => {
    const { user } = useContext(UserContext);
    const [cart, setCart] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [cartMenu, setCartMenu] = useState(false);


    useEffect(()=>{
      if(user){
        axios.get('/user-cart').then(({data})=>{
          setCartData(data);
      });
      }
    },[user, cart])

    useEffect(() => {
      setCart(cartData);
    }, [cartData]);
  return (
    <CartContext.Provider value={{cart, setCart, cartMenu, setCartMenu}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;