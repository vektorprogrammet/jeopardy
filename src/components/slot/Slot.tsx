import { ReactNode, useEffect, useState } from "react"
import Challenge from "../challenge/Challenge"
import Cover from "../cover/Cover"
import Popup from "../popup/Popup"
import './Slot.css'
import data from "../../assets/data.json"

interface SlotProps {
	id: string,
	type: string;
	coverText: string;
	field1: string;
	field2: ReactNode;
}

export default function Slot({ id, type, coverText, field1, field2 }: SlotProps) {

	const [isChallengeVisible, setChallengeVisible] = useState<boolean>(() => {
		const cache = window.localStorage.getItem(id);
		return cache === "true";
	})

	const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

	useEffect(() => {
		window.localStorage.setItem(`${id}`, String(isChallengeVisible))
	}, [isChallengeVisible, id]);

	const hideCover = () => {
		setChallengeVisible(!isChallengeVisible);
	};

	const handleClick = (e: React.MouseEvent) => {
		if (e.shiftKey && isChallengeVisible) {
			e.stopPropagation();
			setPopupVisible(true);
		} else {
			hideCover();
		}
	};

	return (
		<div className="slot-container" onClick={handleClick}>
			{!isChallengeVisible && <Cover text={coverText} />}
			{isChallengeVisible && type == "Text" && (
				<Challenge tag={field1} />
			)}
			{isChallengeVisible && type == "Link" && (
				<Challenge tag=
					<button
						className="new-page-button"
						onClick={() => window.open(field1, "_blank", "noopener,noreferrer")}
					>
						{field2}
					</button>
				/>
			)}
			{isChallengeVisible && type == "Image" && (
				<Challenge tag=
					<button
						className="new-image-button"
						style={{
							backgroundColor: `${data.card['card-color']}`,
							fontFamily: `${data.card["font-family"]}`,
						}}
						onClick={(e) => {
							e.stopPropagation();
							if (e.shiftKey) {
								setPopupVisible(true);
							} else {
								window.open(field1, "_blank", "noopener,noreferrer");
							}
						}}
					>
						IMAGE
					</button>
				/>
			)}
			{isPopupVisible && (
				<Popup 
					message={String(field2)} 
					onClose={() => setPopupVisible(false)} 
				/>
			)}
		</div>
	)
}
