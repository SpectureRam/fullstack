import PropTypes from "prop-types"
import Footer from "../../pages/footer/Footer"
import Navbar from "../../pages/navbar/Navbar"
const Main = ({children}) => {
    return(
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
                <Footer/>
        </div>
    )
}
Main.propTypes = {
    children:PropTypes.node.isRequired
}
export default Main