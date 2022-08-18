import React, { useState } from 'react';
import memesData from "../data/memesData"

function Meme() {


	const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    });

	const [allMemeImages] = useState(memesData); 


	function getRandomImage() {
        const memesArray = allMemeImages.data.memes;
        const memeImg = memesArray[Math.floor(Math.random() * memesArray.length)]   
		let url = memeImg.url;

		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}));
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
					name="topText"
					value={meme.topText}
					// onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
					name="bottomText"
					value={meme.bottomText}
					// onChange={handleChange}
                />
                <button 
                    className="form-button"
					onClick={getRandomImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
			<img src={meme.randomImage} className="meme-image" alt="meme"/>
        </main>
    )
}

export default Meme;