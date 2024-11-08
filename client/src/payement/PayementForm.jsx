import { useContext, useEffect, useState } from "react"
import { wallet } from "../assets/images"
import Nav from "../components/Nav"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PayementForm = () => {
  const [fullName, setFullName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCVC] = useState('')
  const [total, setTotal] = useState(0)

  const {user, ready} = useContext(UserContext)
  const {cart} = useContext(CartContext)
  const navigate = useNavigate()
  
  const validation = () => {
    if( fullName.length > 6 && cardNumber.length > 15 && cardNumber.length < 17 && !isNaN(parseInt(cardNumber))
     && month.length > 1 && month.length < 3 && !isNaN(parseInt(month)) && year.length > 3 && year.length < 5 
      && !isNaN(parseInt(year)) && cvc.length > 2 && cvc.length < 4 && !isNaN(parseInt(cvc))){
        setFullName('')
        setCardNumber('')
        setMonth('')
        setYear('')
        setCVC('')
        setTotal(0)
        toast.success('Payement Approved')
      }else{
        toast.error('Verify your informations')
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
      <div className="flex justify-center items-center h-screen pt-9">
        <div className="w-full max-w-screen-lg bg-white rounded-xl overflow-hidden flex">
          <div className="w-2/5 p-8">
            <img src={wallet}alt="Wallet" width={200} height={200} className="mb-16" />
            <h1 className="text-4xl font-semibold mb-4">Transaction Details</h1>
            <p className="text-gray-600 text-2xl mb-8">Safe and secure payement</p>
            <p className="text-dark text-2xl font-semibold mb-20">John Doe</p>
            <div className=" flex gap-16 mb-4">
              <h2 className="text-2xl font-semibold">TOTAL</h2>
              <p className="text-dark text-2xl font-semibold mb-8">{total.toFixed(2)}</p>
            </div>
            <Link to={'/'} className=" py-2 px-5 bg-none border border-dark text-dark text-xl font-semibold rounded-3xl">Back to Home</Link>
          </div>
          <div className="w-3/5 p-8 bg-slate-100 rounded-2xl">
            <h1 className="text-3xl font-semibold mb-6">Credit Card Info</h1>
            <div className="mb-6">
              <label htmlFor="cardName" className="block text-2xl mb-4 text-gray-600">Full Name</label>
              <input
                type="text"
                id="cardName"
                className="w-full text-xl border rounded-2xl py-3 px-4 text-gray-700"
                placeholder="Enter name on card"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="cardNumber" className="block text-2xl mb-4 text-gray-600">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="w-full text-xl border rounded-2xl py-3 px-4 text-gray-700"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
              />
            </div>
            <div className="flex mb-6">
              <div className="w-1/2 mr-2">
                <label htmlFor="expMonth" className="block text-2xl mb-4 text-gray-600">Exp Month</label>
                <input
                  type="text"
                  id="expMonth"
                  className="w-full text-xl border rounded-2xl py-3 px-4 text-gray-700"
                  placeholder="MM"
                  value={month}
                  onChange={e => setMonth(e.target.value)}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="expYear" className="block text-2xl mb-4 text-gray-600">Exp Year</label>
                <input
                  type="text"
                  id="expYear"
                  className="w-full text-xl border rounded-2xl py-3 px-4 text-gray-700"
                  placeholder="YYYY"
                  value={year}
                  onChange={e => setYear(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="cvc" className="block mb-4 text-2xl text-gray-600">CVC</label>
              <input
                type="text"
                id="cvc"
                className="w-full text-xl border rounded-2xl py-3 px-4 text-gray-700"
                placeholder="Enter CVC"
                value={cvc}
                onChange={e => setCVC(e.target.value)}
              />
            </div>
            <div className=" flex items-center justify-center gap-48">
              <a href="/order" className=" text-dark underline text-xl font-semibold">Back To Shipping</a>
              <button
                onClick={validation}
                className=" w-48 text-white text-2xl bg-blue-400 rounded-3xl py-3 font-semibold hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 duration-500"
              >
                Proceed
              </button>
            </div>  
          </div>
        </div>
      </div>
    </main>
  )
}

export default PayementForm