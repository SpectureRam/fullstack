import PropTypes from "prop-types"
import Sidebar from "../../pages/sidebar/Sidebar"
const Main = ({children}) => {
    return(
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <header>
                <Sidebar />
            </header>
            <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {children}
            </main>
        </div>
    )
}
Main.propTypes = {
    children:PropTypes.node.isRequired
}
export default Main