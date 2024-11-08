import { useNavigate } from "react-router-dom"
import Nav from "../components/Nav"
import { useContext, useEffect, useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

const ShippingForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [postal, setPostal] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')

  const [total, setTotal] = useState(0)

  const {user , ready} = useContext(UserContext)
  const {cart} = useContext(CartContext)
  const navigate = useNavigate()

  const validation = () => {
    if(firstName.length >= 3 && lastName.length >= 3 && address.length > 10 && postal.length > 3 && country.length > 3 && city.length > 3 && phone.length > 9 && phone.length < 11 && !isNaN(parseInt(phone)) && !isNaN(parseInt(postal))){
      navigate('/payement')
    }else{
      toast.error('Verify your informations!');
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
        <section className=' w-full flex xl:flex-row flex-col justify-start min-h-screen xl:gap-24 gap-8 max-container'>
          <div className=" flex xl:items-start flex-col xl:ml-0 ml-6 xl:w-[60%] w-full gap-y-5 pt-48">
            <h1 className=" font-montserrat text-3xl text-dark font-bold">Shipping Informations</h1>
            <p className=" text-2xl font-palanquin mb-4">L'adresse sélectionnée sera utilisée à la fois comme adresse personnelle (pour la facturation) et comme adresse de livraison. </p>
            <div className=" flex flex-col justify-start w-full gap-4">
                <label className=" text-2xl">First Name <span className=" text-red-500">*</span></label>
                <input type="text" className=" w-[98%] h-16 border border-dark text-2xl px-8" value={firstName} onChange={e=> setFirstName(e.target.value)}/>
            </div>
            <div className=" flex flex-col justify-start w-full gap-4">
                <label className=" text-2xl">Last Name <span className=" text-red-500">*</span></label>
                <input type="text" className=" w-[98%] h-16 border border-dark text-2xl px-8" value={lastName} onChange={e=> setLastName(e.target.value)}/>
            </div>
            <div className=" flex flex-col justify-start w-full gap-4">
                <label className=" text-2xl">Address <span className=" text-red-500">*</span></label>
                <input type="text" className=" w-[98%] h-16 border border-dark text-2xl px-8" value={address} onChange={e=> setAddress(e.target.value)}/>
            </div>
            <div className=" flex flex-col justify-start w-full gap-4">
                <label className=" text-2xl">Postal Code <span className=" text-red-500">*</span></label>
                <input type="text" className=" w-[98%] h-16 border border-dark text-2xl px-8" value={postal} onChange={e=> setPostal(e.target.value)}/>
            </div>
            <div className=" flex flex-col justify-start w-full gap-4">
                <label className=" text-2xl">Country <span className=" text-red-500">*</span></label>
                <input type="text" className=" w-[98%] h-16 border border-dark text-2xl px-8" value={country} onChange={e=> setCountry(e.target.value)}/>
            </div>
            <div className=" flex flex-col justify-start w-full gap-4">
                <label className=" text-2xl">City <span className=" text-red-500">*</span></label>
                <input type="text" className=" w-[98%] h-16 border border-dark text-2xl px-8" value={city} onChange={e=> setCity(e.target.value)}/>
            </div>
            <div className=" flex flex-col justify-start w-full gap-4">
                <label className=" text-2xl">Phone Number <span className=" text-red-500">*</span></label>
                <input type="text" className=" w-[98%] h-16 border border-dark text-2xl px-8" value={phone} onChange={e=> setPhone(e.target.value)}/>
            </div>
            <div className=" w-full">
                <button className="flex items-center justify-center buttonStyle min-w-[98%]" onClick={validation}>Continue</button>
            </div>
          </div>
          <div className=" xl:ml-0 ml-6 flex flex-1 w-96 justify-start flex-col gap-10 xl:pt-[200px]">
            <div className="relative flex flex-col justify-start border-2 xl:w-full w-[93%] border-slate-200 gap-8 p-4 box-border">
                <h2 className="text-3xl font-bold">order summary</h2>
                <div className="flex justify-start gap-96">
                  <p className=" text-2xl text-slate-800">{cart.length} Item</p>
                  <p className=" text-2xl text-slate-800 absolute right-6">{total.toFixed(2)}</p>
                </div>
                <div className="flex justify-start">
                  <p className=" text-2xl text-slate-800">Shipping</p>
                  <p className=" text-2xl text-slate-800 absolute right-6">Free</p>
                </div>
                <div className="flex justify-start">
                    <h2 className="text-2xl font-bold">TOTAL</h2>
                    <p className=" text-2xl font-bold absolute right-6">{total.toFixed(2)}</p>
                </div>
            </div>
          </div>
        </section>
      </section>  
    </main>
  )
}

export default ShippingForm