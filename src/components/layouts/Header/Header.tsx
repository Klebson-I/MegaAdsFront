import React, {FormEvent, FormEventHandler, useContext, useState} from "react";
import './Header.css';
import {Btn} from "../../common/Btn/Btn";
import {SearchContext} from "../../../context/SearchContex";

export const Header = () => {
    const {search,setSearch} = useContext(SearchContext);
    const [inputVal,setInputVal] = useState<string>("");

    const setSearchFromState = (e:FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }

    return <header>
        <h1>
            <strong>Mega</strong>Ogłoszenia
        </h1>

        <Btn>Dodaj ogłoszenie</Btn>

        <form className="search" onSubmit={setSearchFromState}>
            <input type="text"
                   value={inputVal}
                   onChange={(e)=>setInputVal(e.target.value)}
            />
            <Btn>Szukaj</Btn>
        </form>
    </header>
}