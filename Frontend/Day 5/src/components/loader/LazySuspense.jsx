import PropTypes from "prop-types"
import { Suspense } from "react"
import Loader from "./Loader";
import ErrorBoundary from "../../pages/error/ErrorBoundary";
const LazySuspense = ({component:Component, ...rest}) => {
  return (
    <ErrorBoundary>
    <Suspense fallback={<Loader/>}>
        <Component {...rest}/>
    </Suspense>
    </ErrorBoundary>
  )
};

LazySuspense.propTypes = {
    component: PropTypes.elementType.isRequired,
  };

export default LazySuspense