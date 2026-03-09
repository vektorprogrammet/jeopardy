import './Challenge.css'
import { ReactNode } from 'react';
import data from "./../../assets/data.json"

interface ChallengeProps {
    tag: ReactNode;
}

export default function Challenge({ tag }: ChallengeProps) {

    return (
        <div className="challenge-container" style={{
            fontFamily: `${data.card["font-family"]}`,
            fontSize: `${data.card["font-size"]}`,
            color: `${data.card["text-color"]}`,
        }}>
            <div className="challenge-text">
                {tag}
            </div>
        </div>
    )
}