import Feature from "./Feature"
import Feature2 from "./Feature2"
// import Feature3 from "./Feature3"
import Feature4 from "./Feature4"
import Feature5 from "./Feature5"
import Feature6 from "./Feature6"

const Home = () => {
  return (
    <div>
      <section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Recharge with Cashback Offers
        <strong className="font-extrabold text-primary sm:block"> Increase Conversion. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-black shadow hover:text-primary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
  <div>
  </div>
</section>
<Feature/>
<Feature6/>
<Feature5/>
<Feature4/>
<Feature2/>
    </div>
  )
}

export default Home
