import React from "react";
import { useState } from "react";

const Card = ({style, english, spanish, showFront, setShowFront}) => {

    const s = spanish;
    const e = english;

    const handleClick = () => {
        setShowFront((prev) => !prev); //prev is parameter representing the previous state value of showFront, not a separate state variable
    }

    return (
        <div className="card" onClick={handleClick} style = {style}>
            {showFront ? <p>{s}</p> : <p>{e}</p>}
        </div>
    )
}

export default Card;