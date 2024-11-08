import { star } from "../assets/icons"
import { Link } from "react-router-dom";

const PopularProductsCard = ({imgURL, name, price, id}) => {
  return (
    <Link to={`/product/${id}`} className=' flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[320px] h-[280px] p-2 rounded-3xl shadow-xl bg-white-400'/>
        <div className=' mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="rating" width={24} height={24} />
            <p className=' font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 className=' mt-2 text-2xl leading-normal text-dark font-bold font-palanquin'>{name}</h3>
        <p className=' mt-2 font-semibold font-montserrat text-dark text-2xl leading-normal'>{price}</p>
    </Link> 
  )
}

export default PopularProductsCard