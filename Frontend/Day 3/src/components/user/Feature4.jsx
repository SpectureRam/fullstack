import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger"
export const Feature4 = () => {
    const[counter,setcounter] = useState(false);
    return (
        <ScrollTrigger onEnter={()=>setcounter(true)} onExit={()=>setcounter(false)}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{counter && <CountUp start={100} end={5000} duration={1} delay={0}/>}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Downloads
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{counter && <CountUp start={12020} end={19303} duration={1} delay={0}/>}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Subscribers
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{counter && <CountUp start={43085} end={48325} duration={1} delay={0}/>}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{counter && <CountUp start={58410} end={74852} duration={1} delay={0}/>}</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Cookies
            </p>
          </div>
        </div>
      </div>
      </ScrollTrigger>
    );
  };
  export default Feature4;