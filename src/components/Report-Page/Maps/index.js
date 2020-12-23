import React, { Component, PureComponent } from 'react'
import ReactMapGL, { Marker } from "react-map-gl";
import YIcon from 'assets/37995c2da2c65b263be837809ce1944c-removebg-preview.png'
import BIcon from 'assets/download-removebg-preview.png'
import RIcon from 'assets/262-2628212_gps-point-red-marker-svg-removebg-preview.png'
import 'components/Report-Page/Maps/index.css'

class Markers extends PureComponent {
    render() {
        const {data} = this.props;

        return data.map(obj => { 
            if (obj.Kapasitas_After < 8 && obj.Kapasitas_After >= 4) {
                return  <Marker key={obj.ODP_ID} latitude={Number(obj.Latitude)} longitude={Number(obj.Longitude)}>
                            <img src={YIcon} alt="Medium Icon" width="15px"/>
                        </Marker>;
            }else if (obj.Kapasitas_After >= 8) { 
                return  <Marker key={obj.ODP_ID} latitude={Number(obj.Latitude)} longitude={Number(obj.Longitude)}>
                            <img src={BIcon} alt="Full Icon" width="15px"/>
                        </Marker>;
            }else if (obj.Kapasitas_After < 4){
                return  <Marker key={obj.ODP_ID} latitude={Number(obj.Latitude)} longitude={Number(obj.Longitude)}>
                            <img src={RIcon} alt="Low Icon" width="15px"/>
                        </Marker>;
            }
        });
    }
  }

export default class Index extends Component {
    state = {
      viewport: {
        latitude: -7.090911,
        longitude: 107.668884,
        zoom: 5, 
        width: "70vw",
        height: "100vh",
      },
      style: "mapbox://styles/mapbox/dark-v10",
      token: "pk.eyJ1IjoicmFtYWRpa2ExMDUwIiwiYSI6ImNraXpkZzU4cTE2M3QycW15cnhrMG1ueXcifQ.s_vgxudeVqiQexpSPYsVHw",
      odpLatlang: [],
      data: [],
    //   selectedPark: null,
    };

    fetchODP = () => {
        fetch('http://localhost/backend-app/all-odp.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        odpLatlang:data.odp.reverse(),
                    });
                    // console.log(this.state.odpLatlang);
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
        var { odpLatlang, token, style, viewport } = this.state;

        return (
            <div className="mapContainer">
                <ReactMapGL
                    latitude= {viewport.latitude} 
                    longitude= {viewport.longitude}
                    width= {viewport.width} 
                    height= {viewport.height}
                    zoom= {viewport.zoom}
                    mapboxApiAccessToken= {token}
                    mapStyle= {style}
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                    {/* {
                        data.map(cnt =>(
                            <div key={cnt.id}>{cnt.value}</div>
                        )) 
                    } */}
                    {/* {
                        odpLatlang.map(latlang => (
                            <Marker key={latlang.ODP_ID} latitude={Number(latlang.Latitude)} longitude={Number(latlang.Longitude)}>
                                <img src={RIcon} alt="Skate Park Icon" width="15px"/>
                            </Marker>
                        ))
                    } */}
                    <Markers data={odpLatlang} />
                </ReactMapGL>
            </div>
        )
    }
}
