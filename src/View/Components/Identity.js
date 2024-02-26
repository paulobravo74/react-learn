export default function Identity() {
    return (
        <div className="forms bg_green">
            <p>Name:</p>
            <input type="text" id="name" className="button" placeholder="insert name"></input>
            <input type="text" id="surname" className="button" placeholder="insert surname"></input>
            <input type="submit" name="submit" className="button"/>
            <p>Result</p>
        </ div>
    )
}