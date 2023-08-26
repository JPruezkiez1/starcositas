import './Styles.css'
export default function Button({ text, btn_action }) {
    return (
        <button onClick={btn_action} className="button_1">{text}</button>

    )

}