import memesData from "../data/memesData"

export default function Meme() {

	function getRandomImage() {
        let arrayOfObjects = memesData.data.memes;
        let item = arrayOfObjects[Math.floor(Math.random()*arrayOfObjects.length)]        
        console.log(item.url);
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
        </main>
    )
}