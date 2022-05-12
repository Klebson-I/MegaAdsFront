import React from "react";
import './Btn.css';

interface Props {
    children:React.ReactNode
}

export const Btn = (props:Props) => {
    return <button>
        {props.children}
    </button>
}