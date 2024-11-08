import { useNavigate } from "react-router"
import { arrowRight } from "../assets/icons"
import {fashion, puffer, survette } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
  const navigate = useNavigate()
  const heroButton = () => {
    navigate('/products')
  }

  return (
    <section id="home" className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className=" relative xl:w-2/5 flex flex-col justify-center xl:items-start items-center w-full max-xl:padding-x xl:pt-28 pt-48 m-auto">
        <p className=" text-xl font-montserrat border border-dark text-dark rounded-full px-4 py-2">Free Delivery</p>
        <h1 className=" xl:mt-10 mt-1 font-palanquin text-dark xl:text-7xl text-8xl md:text-left text-center leading-normal font-bold">
          <span >Welcome to </span>
          <br />
          <span className="font-pacifico inline-block mt-4">Pardise</span> store
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg md:text-left text-center leading-8 mt-6 mb-14 sm:max-w-sm">This store will
          provide you good quality and unique products,
          with good price.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} click={heroButton}/>
        <div className=" flex xl:justify-start xl:items-start justify-center items-center flex-wrap w-full xl:mr-0 mr-8 mt-20 gap-16">
          {statistics.map((stat,index)=>(
            <div key={index}>
              <p className=" text-4xl font-palanquin font-bold text-dark">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 xl:flex hidden justify-center items-center xl:max-h-screen max-xl:py-40 xl:ml-40 gap-4">
        <div className=" h-[500px] w-56 rounded-3xl shadow-lg">
          <img src={puffer} alt="products collection"
            className=" bg-center bg-cover object-fill w-full h-full z-10 rounded-3xl"
          />
        </div>
        <div className=" h-[500px] w-56 mb-8 rounded-3xl shadow-lg">
          <img src={fashion} alt="products collection"
            className=" bg-center bg-cover object-fill w-full h-full z-10 rounded-3xl"
          />
        </div>
        <div className=" h-[500px] w-56 rounded-3xl shadow-lg">
          <img src={survette} alt="products collection"
            className=" bg-center bg-cover object-fill w-full h-full z-10 rounded-3xl"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero