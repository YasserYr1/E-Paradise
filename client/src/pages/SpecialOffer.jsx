import { useNavigate } from "react-router"
import { specialOffer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  const navigate = useNavigate()
  const redirectS = () => {
    navigate('/specialOffer')
  }
  return (
    <section id="discount" className=" flex flex-wrap items-center max-xl:flex-col gap-10 max-container">
    <div className=" flex flex-1 flex-col lg:ml-20">
        <h2 className=" mt-10 font-palanquin text-dark text-4xl capitalize font-bold lg:max-w-lg"> Up To
          <span className=" font-pacifico text-red-500 "> 30% </span> discount on New balance 9060
        </h2>
        <p className=" mt-6 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque aspernatur dicta unde officia placeat inventore aut iure itaque, dignissimos.
        </p>
        <p className=" mt-6 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque aspernatur dicta unde officia placeat inventore aut iure.
        </p>
        <div className=" mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" backgroundColor=" bg-red-500" textColor="text-white" click={redirectS}/>
          <Button label="Learn more" backgroundColor=" bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" click={redirectS}/>

        </div>
    </div>
    <div className=" flex-1">
      <img src={specialOffer} alt="offer" className=" object-contain h-[700px] rounded-[20px] "/>
    </div>
  </section>
  )
}

export default SpecialOffer