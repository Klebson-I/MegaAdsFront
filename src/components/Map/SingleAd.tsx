import React, {useEffect, useState} from "react";
import {AdEntity} from 'types';

interface Props {
    id:string;
}

export const SingleAd = (props:Props) => {
    const [ad,setAd] = useState<AdEntity|null>(null);
    useEffect(()=> {
        (async()=> {
            const res = await fetch(`http://localhost:3001/ad/${props.id}`);
            const ad = await res.json();
            setAd(ad);
        })();
    },[]);

    if(!ad) return <h2>Loading...</h2>
    return <>
        <h2>{ad.name}</h2>
        <p>{ad.description}</p>
        {ad.price && <p>{ad.price} zł</p>}
        <a href={ad.url} target="_blank">link do strony</a>
    </>

}