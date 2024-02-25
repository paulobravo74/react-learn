
const url = 'https://rickandmortyapi.com/api/character';


export default FetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}



console.log({FetchData})
//export default fetchData;