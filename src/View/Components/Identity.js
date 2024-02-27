import React, { useState } from "react";


export default function Identity() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [displayText, setDisplayText] = useState("");

    

    function getName(e) {
        const newName = e.target.value;
        setName(newName);
    }

    function getSurname(e) {
        const newSurname = e.target.value;
        setSurname(newSurname);
    }

    function handleSubmission() {
        if(!name  && surname) {
            const text = `introduce your name`;
            setDisplayText(text);
        } else if(name && !surname) {
            const text = `introduce your surname`;
            setDisplayText(text);
        } else if(!name && !surname) {
            const text = `introduce your name and surname`;
            setDisplayText(text);
        } else {
            const text = `Your name is ${name} and surname is ${surname}`;
            setDisplayText(text);
        }
    }

    function reset() {
        setName("");
        setSurname("");
        setDisplayText("");
        
    }

    const array = ["person01", "person02", "person03"]

    function listArray() {
        return (
            <ol>
            <h1>Lista de Pessoas:</h1>
                {array.map((person, index) => (
                    <li key={index}>{person}</li>
                ))}
            </ol>
        )
        }

    return (
        <div className="forms bg_red">
            <h1 className="bg_green">Name:</h1>
            <div className="insName bg_green">
                <input type="text" id="name" className="button" placeholder="insert name" defaultValue={name} onChange={getName}></input>
            <input type="text" id="surname" className="button" placeholder="insert surname" defaultValue={surname} onChange={getSurname}></input>
            <button className="button" onClick={handleSubmission}>Submit</button>
            <button className="button" onClick={reset}>Reset</button>
            </div>
            {<p>{displayText}</p>} 
            {listArray()}
        </ div>
    )
}