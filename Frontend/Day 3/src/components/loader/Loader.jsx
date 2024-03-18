import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
    return(
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <InfinitySpin
        visible={true}
        width={150}
        color="#19CDF1"
        ariaLabel="infinity-spin-loading"
        />
        </div>
    );
};
export default Loader;