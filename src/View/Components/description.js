import React, { useState} from "react";



function Description() {
    const [endpoint, setEndpoints] = useState("");
    const [container, setContainer] = useState([]);

    
    fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => {
        console.log(response.json());

    })
    .catch(error => {
        console.log(error);
    });

    

    return (
        <>
            <input type="input"></input>
            <button type="submit">Submit</button>
        </>
    )
}


export default Description;