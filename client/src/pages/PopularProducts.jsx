import PopularProductsCard from "../components/PopularProductsCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-8">
      <div className=" flex flex-col justify-normal gap-5">
        <h2 className=" text-4xl font-palanquin font-bold text-dark">Our
        <span className="font-pacifico"> Popular
        </span> Products</h2>
        <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          quod in amet nulla consectetur. Nostrum eos impedit incidunt
          laudantium vel! Sequi animi voluptatem culpa autem harum debitis
        </p>
      </div>
      <div className=" ml-[10px] sm:ml-0  mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.filter(item=> item.type.includes("Popular")).map(product=> (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts