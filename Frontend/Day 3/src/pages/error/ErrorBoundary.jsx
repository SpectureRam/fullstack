import { Component } from "react"
import Proptypes from "prop-types"
import GIF from "../../assets/404.gif"
export default class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {hasError:false}
    }

    static getDerivedStateFromError(){
        return {hasError:true}
    }

    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo);
    }

    render(){
        if(this.state.hasError){
            return(
                <div className="flex justify-center items-center h-screen bg-gray-200">
                    
                    <img src={GIF} alt="404 Error" className="max-w-full max-h-full" />
                </div>
            );
        }
        return this.props.children
    }
}
ErrorBoundary.propTypes = {
    children: Proptypes.node.isRequired
}