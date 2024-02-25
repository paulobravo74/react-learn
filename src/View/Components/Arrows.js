const leftArrow = "<<<";
const rightArrow = ">>>";

const arrows = () => {
    return (
        <div className="arrows">
            <button className="left bg_grey">{ leftArrow }</button>
            <button className="rigth">{ rightArrow }</button>
        </div>
    )
}

export default arrows;