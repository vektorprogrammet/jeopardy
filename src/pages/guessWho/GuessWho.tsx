import "./GuessWho.css"
import Image from "./Components/image/Image"
import Image1 from "./Assets/Image1.jpg"
import Image2 from "./Assets/Image2.jpg"
import Image3 from "./Assets/Image3.jpg"

const images: string[] = ["1", "2", "3"]

export const GuessWho = () => {
	return (
		<>
			<div className='header-container'>
				<h1 className='header glow'>Guess Who</h1>
			</div>

			<div className="images-container">
				{images.map(
					(index, i) => {
						const image_list = [
							<img src={Image1} alt="Filip + Trump" className='face-image' />,
							<img src={Image2} alt="Sander + Haaland" className='face-image' />,
							<img src={Image3} alt="Eirik + Mona Lisa" className='face-image' />
						];
						return (
							<Image index={index} image={image_list[i]} />
						)
					}
				)}
			</div>
		</>
	)
}
