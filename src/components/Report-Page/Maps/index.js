// Dependencies
import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
// Internals

function Map(){
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: -6.175110, lng: 106.865036 }} 
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Reactgooglemaps() {
    return (
        <div style={{width: '100vw', height: '75vh'}}>
            <WrappedMap 
            // AIzaSyAd2myu5NPRMQYGwtXfflLzj_U-A8sn3TI
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAd2myu5NPRMQYGwtXfflLzj_U-A8sn3TI&callback=initMap`} 
                loadingElement={<div style={{ height: "75%" }} />}
                containerElement={<div style={{ height: "75%" }} />}
                mapElement={<div style={{ height: "75%" }} />}
            />
        </div>
    )
}
