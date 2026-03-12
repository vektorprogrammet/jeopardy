import { ReactNode, useEffect, useState } from "react"
import Challenge from "../challenge/Challenge"
import Cover from "../cover/Cover"
import './Slot.css'

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

	useEffect(() => {
		window.localStorage.setItem(`${id}`, String(isChallengeVisible))
	}, [isChallengeVisible, id]);

	const hideCover = () => {
		setChallengeVisible(!isChallengeVisible);
	};

	return (
		<div className="slot-container" onClick={hideCover}>
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
						className="new-page-button2"
						onClick={() => window.open(field1, "_blank", "noopener,noreferrer")}
					>
						IMAGE
					</button>
				/>
			)}
		</div>
	)
}
