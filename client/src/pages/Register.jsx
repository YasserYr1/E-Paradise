import { useContext, useState } from "react"
import Nav from "../components/Nav"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../context/UserContext";


const Register = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {user, ready} = useContext(UserContext)

  const navigate = useNavigate()

  const register = (e) =>{
    e.preventDefault();
    try {
        axios.post('/register', { userName, email, password })
        toast.success('Account Created Successfully')
        navigate('/login')
    }catch(e) {
        toast.error('Account is already registered')
    }
      
  }

  if (!ready) {
    return <div>Loading...</div>;
  }

  if(user !== null){
    navigate('/')
  }


  return (
    <div>
        <Nav />
            <section className=" w-full padding-x pt-52">
                <div action="" className=" w-full flex items-center flex-col justify-center gap-8">
                    <div className=" w-full flex flex-col items-center justify-center ">
                        <label className=" py-2 text-2xl font-montserrat ">UserName <span className=" text-red-500">*</span></label>
                        <input value={userName} onChange={e=>setUserName(e.target.value)} type="text" className=" xl:w-1/2 w-[80%] py-4 px-10 text-2xl font-montserrat border border-black " />
                    </div>
                    <div className=" w-full flex flex-col items-center justify-center ">
                        <label className=" py-2 text-2xl font-montserrat ">Email <span className=" text-red-500">*</span></label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="text" className="  xl:w-1/2 w-[80%] py-4 px-10 text-2xl font-montserrat border border-black" />
                    </div>
                    <div className=" w-full flex flex-col items-center justify-center ">
                        <label className=" py-2 text-2xl font-montserrat ">Password <span className=" text-red-500">*</span></label>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className=" xl:w-1/2 w-[80%] py-4 px-10 text-2xl font-montserrat border border-black" />
                    </div>
                    <div className="xl:w-1/2 w-[80%] flex justify-center items-center flex-wrap gap-2 ">
                      <button className="buttonStyle" onClick={register}>Sign Up</button>
                      <Link to={'/login'} className=" w-[50%] border border-black text-xl font-bold text-black px-8 py-4">Already a member? Sign In</Link>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Register