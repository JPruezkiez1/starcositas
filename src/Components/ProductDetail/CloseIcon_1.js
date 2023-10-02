import React from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import './view.css'

export function Xicon(props) {
    return (
        <div>
            <p></p>
            <BsFillBackspaceFill {...props} />
        </div>

    )

};




export function Inconplaceholder({ icon, text }) {
    return (
        <div className="testforicons_01">
            <b>{text}</b>
            <div>{icon}</div>
        </div>

    )

};