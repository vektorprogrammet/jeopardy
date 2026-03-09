import './ResetButton.css'
import data from "./../../assets/data.json"

export default function ResetButton() {

    const reset = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <button type='button' className='resetbutton-button' style={{
            backgroundColor: `${data.card['card-color']}`,
            fontFamily: `${data.card["font-family"]}`,
            fontSize: `${data.rest["font-size"]}`,
            color: `${data.card["text-color"]}`,
        }} onClick={reset}>
            RESET
        </button>
    )
}