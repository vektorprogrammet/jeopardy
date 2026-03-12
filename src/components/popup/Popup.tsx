import './Popup.css'
import data from "./../../assets/data.json"

interface PopupProps {
    message: string;
    onClose: () => void;
}

export default function Popup({ message, onClose }: PopupProps) {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div 
                className="popup-container" 
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="popup-title" style={{
                    color: 'white',
                    fontFamily: `${data.card['font-family']}`,
                }}>Svar:</h2>
                <div className="popup-content">
                    <p style={{
                        color: 'white',
                        fontFamily: `${data.card['font-family']}`,
                    }}>{message}</p>
                </div>
                <button 
                    className="popup-close" 
                    style={{
                        backgroundColor: `${data.card['card-color']}`,
                        color: 'white',
                    }}
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}
