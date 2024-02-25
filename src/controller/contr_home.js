import React from 'react';

import Home from '../View/Home.js'
import fetchData from '../services/api.js';

const character = fetchData;
console.log(character[0]);

const contr_Home = () => {
    return (
        <>
            <Home />
            
        </>
    )
}

export default contr_Home;