import '../Home.css'



const title = "Mad Science";
const src_img = "https://e7.pngegg.com/pngimages/88/896/png-clipart-rick-and-morty-text-overlay-rick-sanchez-the-art-of-rick-and-morty-rick-and-morty-season-3-the-rickshank-rickdemption-animated-series-others-television-blue.png"
const text = "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his grandson into hijinks."

const description = () => {
    return (
        <div className="description bg_blue">
            <h1>{title}</h1>
            <img src={src_img} className='img_name' alt=""></img>
            <p className='text_lines'>{text}</p>
        </div>
    )
}


export default description;