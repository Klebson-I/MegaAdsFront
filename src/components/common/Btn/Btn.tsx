import React from "react";
import './Btn.css';
import {Link} from "react-router-dom";

interface Props {
    children:React.ReactNode;
    to?:string;
}

export const Btn = (props:Props) => {

    if (props.to) {
        return <Link className="btn" to={props.to}>{props.children}</Link>
    }

    return <button>
        {props.children}
    </button>
}