import './Cover.css'
import data from "./../../assets/data.json"

interface CoverProps {
    text: string;
}

export default function Cover({ text }: CoverProps) {

    return (
        <div style={{
            backgroundColor: `${data.card['card-color']}`,
            fontFamily: `${data.card["font-family"]}`,
            fontSize: `${data.card["font-size"]}`,
            color: `${data.card["text-color"]}`,
        }} className="cover-container">
            <h3 className="cover">{text}</h3>
        </div>
    )
}