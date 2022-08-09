import React, { useState } from 'react';
import memesData from "../data/memesData"

function Meme() {


	const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    });

	const [allMemeImages, setaAllMemeImages] = useState(memesData); 


	function getRandomImage() {
        let memesArray = memesData.data.memes;
        let memeImg = memesArray[Math.floor(Math.random()*memesArray.length)]        
        // console.log(item.url);
		setMemeImage(memeImg.url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button 
                    className="form-button"
					onClick={getRandomImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
			<img src={memeImage} className="meme-image" alt="meme"/>
        </main>
    )
}

export default Meme;