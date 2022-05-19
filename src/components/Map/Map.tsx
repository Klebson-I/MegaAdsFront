import React, {useContext, useEffect, useState} from "react";
import './Map.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import  'leaflet/dist/leaflet.css';
import {SearchContext} from "../../context/SearchContex";
import {SimpleAdEntity} from 'types';
import {SingleAd} from "./SingleAd";


export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads,setAds] = useState<SimpleAdEntity[]>()
    useEffect(()=> {
        (async() => {
            const res = await fetch("http://localhost:3001/ad/search");
            const ads = await res.json();
            setAds(ads);
        })();
    },[]);

    useEffect(()=> {
        (async() => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const ad = await res.json();
            setAds(ad);
        })();
    },[search]);

    return <div className="map">
        <h1>Search for {search}</h1>
        <MapContainer center={[50,18]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                ads?.map(ad =>(
                    <Marker position={[ad.lat,ad.lon]} key={ad.id}>
                        <Popup>
                            <SingleAd id={ad.id}/>
                        </Popup>
                    </Marker>
                ))
            }

        </MapContainer>
    </div>
}