import { useContext, useState } from "react"
import Nav from "../components/Nav"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setUser, user, ready} = useContext(UserContext)
  const navigate = useNavigate()

  const login = async () =>{
      try{
        const {data} = await axios.post('/login', { email, password })
        setUser(data);
        toast.success('Logged in successfully');
        navigate('/products')
      }catch(err){
        toast.error('Verify your informations!');
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
                        <label className=" py-2 text-2xl font-montserrat ">Email <span className=" text-red-500">*</span></label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="text" className="  xl:w-1/2 w-[80%] py-4 px-10 text-2xl font-montserrat border border-black" />
                    </div>
                    <div className=" w-full flex flex-col items-center justify-center ">
                        <label className=" py-2 text-2xl font-montserrat ">Password <span className=" text-red-500">*</span></label>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className=" xl:w-1/2 w-[80%] py-4 px-10 text-2xl font-montserrat border border-black" />
                    </div>
                    <div className="xl:w-1/2 w-[80%] flex justify-center items-center flex-col sm:flex-row gap-y-7 gap-2 ">
                      <button className="buttonStyle" onClick={login}>Sign In</button>
                      <Link to={'/register'} className=" w-[50%] border border-black text-xl font-bold text-black px-8 py-4">No Account? Create one</Link>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Login