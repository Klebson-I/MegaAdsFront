import React, {useContext, useEffect} from "react";
import './Map.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import  'leaflet/dist/leaflet.css';
import {SearchContext} from "../../context/SearchContex";

export const Map = () => {

    const {search} = useContext(SearchContext);

    useEffect(()=> {

    },[search]);

    return <div className="map">
        <h1>Search for {search}</h1>
        <MapContainer center={[50,18]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[50,18]}>
                <Popup>

                </Popup>
            </Marker>
        </MapContainer>
    </div>
}