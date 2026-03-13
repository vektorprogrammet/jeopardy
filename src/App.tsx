import Category from "./components/category/Category"
import ResetButton from "./components/resetButton/ResetButton"
import './App.css'
import data from "./assets/data.json"

export default function App() {
	function makeGlow(color: string, strength: number) {
		const layers = [
			`0 0 ${strength}px #fff`,
			`0 0 ${strength * 2}px #fff`,
			`0 0 ${strength * 3}px ${color}`,
			`0 0 ${strength * 4}px ${color}`,
			`0 0 ${strength * 5}px ${color}`,
			`0 0 ${strength * 6}px ${color}`,
			`0 0 ${strength * 7}px ${color}`,
		];
		return layers.join(", ");
	}

	return (
		<>
			<div className="header-container">
				<h1 className="header glow" style={{
					fontFamily: `${data.title["font-family"]}`,
					fontSize: `${data.title["font-size"]}`,
					color: `${data.title["text-color"]}`,
					textShadow: makeGlow(data.title["glow-color"], data.title["glow-strength"]),
				}}>{data.title.title}</h1>

				<div className="resetButton-container">
					<ResetButton />
				</div>
			</div>

			<div className="app-container">
				{data.categories.map((category) => (
					<Category
						name={category.name}
						questions={category.questions}
					/>
				))}
				<div className="points-category">
					<h2 style={{
						fontFamily: `${data.rest["font-family"]}`,
						fontSize: `${data.rest["font-size"]}`,
						color: `${data.rest["text-color"]}`,
						height: "3vw",
					}}>Poeng</h2>
					<div className="points-container">
						{[{
							id: 1,
						}, {
							id: 2,
						}, {
							id: 3,
						}, {
							id: 4,
						}].map((team) =>
							<div className="points-slots" style={{
								fontFamily: `${data.card["font-family"]}`,
								fontSize: `${data.card["font-size"]}`,
								color: `${data.card["text-color"]}`,
							}}>
								<h3>{data.teams[team.id - 1]}</h3>
								<input type="text" name={`team${team.id}`} id={`team${team.id}`} />
								<div className="points-buttons">
									<button className="points-button" onClick={(e) => {
										e.stopPropagation();
										const input = document.getElementById(`team${team.id}`) as HTMLInputElement;
										const currentValue = parseInt(input.value) || 0;
										input.value = String(currentValue - 100);
									}}>-100</button>
									<button className="points-button" onClick={(e) => {
										e.stopPropagation();
										const input = document.getElementById(`team${team.id}`) as HTMLInputElement;
										const currentValue = parseInt(input.value) || 0;
										input.value = String(currentValue + 100);
									}}>+100</button>
								</div>
							</div>)}
					</div>
				</div>
			</div>

		</>
	)
}
