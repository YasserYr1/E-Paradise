import { useNavigate } from "react-router"
import { superQ } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  const navigate = useNavigate()
  const redirect = () => {
    navigate('/superQuality')
  }

  return (
    <section className=" flex justify-between items-center max-lg:flex-col gap-12
    w-full max-container">
     <div className=" flex-1 flex w-[300] h-[300] justify-center items-center bg-[#f5f5f5e0] rounded-full" >
       <img src={superQ} alt="tv" width={570} height={522} className="object-contain rotate-12 z-10"/>
     </div>
     <div className=" flex flex-1 flex-col lg:items-start lg:justify-start items-center justify-center lg:text-left text-center">
         <h2 className=" mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
           We Provide You
           <span className=" font-pacifico "> Super </span>
           <span className=" font-pacifico  ">Quality</span> shoe
         </h2>
         <p className=" mt-4 lg:max-w-lg info-text">Discover Our new Product 
           , New Balance 610,
           Comfort, Quality, and Style.
         </p>
         <div className=" mt-11"> 
           <Button label="View details" click={redirect}/>
         </div>
     </div>
   </section>
  )
}

export default SuperQuality