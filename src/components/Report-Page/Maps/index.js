// Dependencies
import React, { Component, PureComponent } from 'react'
import L from 'leaflet'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet' 
// Internals
import BIcon from 'assets/blueIcon.png'
import YIcon from 'assets/yellowIcon.png'
import RIcon from 'assets/redIcon.png'
import 'components/Report-Page/Maps/index.css'

var blueIcon = L.icon({
    iconUrl: BIcon,
    iconSize: [28, 35],
    iconAnchor: [22, 34],
    popupAnchor: [-7, -34]
})

var yellowIcon = L.icon({
    iconUrl: YIcon,
    iconSize: [28, 35],
    iconAnchor: [22, 34],
    popupAnchor: [-7, -34]
})

var redIcon = L.icon({
    iconUrl: RIcon,
    iconSize: [28, 35],
    iconAnchor: [22, 34],
    popupAnchor: [-7, -34]
})

class Markers extends PureComponent {
    render() {
        const {data} = this.props;

        // eslint-disable-next-line array-callback-return
        return data.map(obj => { 
            const position = [Number(obj.Latitude), Number(obj.Longitude)]
            if (obj.Kapasitas_After < 8 && obj.Kapasitas_After >= 4) {
                return  <Marker key={obj.ODP_ID} position={position} icon={yellowIcon}>
                            <Popup>
                                ODP ID: {obj.ODP_ID} <br /> Kapasitas: {obj.Kapasitas_After}
                            </Popup>
                        </Marker>;
            }else if (obj.Kapasitas_After >= 8) { 
                return  <Marker key={obj.ODP_ID} position={position} icon={blueIcon}>
                            <Popup>
                                ODP ID: {obj.ODP_ID} <br /> Kapasitas: {obj.Kapasitas_After}
                            </Popup>
                        </Marker>;
            }else if (obj.Kapasitas_After < 4){
                return  <Marker key={obj.ODP_ID} position={position} icon={redIcon}>
                            <Popup>
                                ODP ID: {obj.ODP_ID} <br /> Kapasitas: {obj.Kapasitas_After}
                            </Popup>
                        </Marker>; 
            }
        });
    }
}

export default class index extends Component { 

    state = {
        viewport: {
          latitude: -7.090911,
          longitude: 107.668884,
        },
        zoom: 6,
        odpLatlang: [],
        data: [],
    }
    
    fetchODP = () => {
        fetch('http://localhost/backend-app/all-odp.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        odpLatlang:data.odp.reverse(),
                    });
                } 
                else{
                    this.context.post_show(false);
                }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.fetchODP();
    }


    render() {
        var { odpLatlang, viewport } = this.state;
        const position = [viewport.latitude, viewport.longitude]
        return (
            <MapContainer className="map" center={position} zoom={this.state.zoom} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Markers data={odpLatlang} />
            </MapContainer>
        )
    }
}
