import './Home.css'
import Banner from './Components/Banner';
import Arrows from './Components/Arrows';
import FetchData from '../services/api'


const home = () => {
    
    console.log({FetchData});
    
    return (
        <div>
            <Banner />
            <Arrows />
        </div>
        );
}

export default home;