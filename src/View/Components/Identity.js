import React, { useState } from "react";


export default function Identity() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [displayList, setDisplayList] = useState([]);
    

    function getName(e) {
        const newName = e.target.value;
        setName(newName);
    }

    function getSurname(e) {
        
        setSurname(e.target.value);
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

    const [array, setArray] = useState([]);

    function listArray() {
        return (
            <ol>
            <h1>List of people:</h1>
                {array.map((person, index) => (
                    <li key={index}>{person}</li>
                ))}
            </ol>
            )   
    }

    function addPerson() {
        console.log("Add person");
        console.log(array);
        const newPerson = `person${array.length + 1}`;
        setArray([...array, newPerson]);
    }

    function cleanList() {
        setArray([])
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
            <button className="button" onClick={addPerson}>Add Person</button>
            <button className="button" onClick={cleanList}>Clean</button>
        </ div>
    )
}