import Description from "./description";
import Img from "./image";

import fetchData from "../../services/api";

const Banner = () => {
    return (
        <div className='banner'>
            <Img />
            <Description />
        </div>
    )
}

export default Banner;