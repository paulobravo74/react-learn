const ApiCall = async () => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);
        const character = await response.json();

        
        console.log(character);
    } catch(error) {
        console.log(error);
    }

    


};

export default ApiCall;
