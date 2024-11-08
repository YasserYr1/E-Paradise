import Cart from "./components/Cart";
import Nav from "./components/Nav"
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, SuperQuality } from "./pages"

function Layout() {

  return (
    <main className=" relative">
      <Nav />
      <section className=" lg:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className=" padding">
        <PopularProducts />
      </section>
      <section className=" padding">
        <SuperQuality />
      </section>
      <section className=" padding-x py-10">
        <Services />
      </section>
      <section className=" padding">
        <SpecialOffer />
      </section>
      <section className=" padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className=" padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
      <Cart />
    </main>
  )
}

export default Layout;