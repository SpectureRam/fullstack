import Slider from 'react-infinite-logo-slider'
import Logo1 from '../../assets/company/blitz.svg'
import Logo2 from "../../assets/company/deloitte-1.svg"
import Logo3 from "../../assets/company/movistar.svg"
import Logo4 from "../../assets/company/maverik-lacrosse.svg"
import Logo5 from "../../assets/company/master-4.svg"
import Logo6 from "../../assets/company/jardine.svg"
import Logo7 from "../../assets/company/mts-2.svg"
import Logo8 from "../../assets/company/nvc.svg"
const Component = () => {
    
    return (
        <Slider
            width="300px"
            duration={10}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={Logo1} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Logo2} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Logo3} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Logo4} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Logo5} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Logo6} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Logo7} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Logo8} alt="any" className='w-36' />
            </Slider.Slide>
        </Slider>
    )
}              
                     
export default Component