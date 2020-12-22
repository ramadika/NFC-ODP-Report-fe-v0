import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'components/Report-Page/Maps/index.css'

 
const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoicmFtYWRpa2ExMDUwIiwiYSI6ImNraXpkZzU4cTE2M3QycW15cnhrMG1ueXcifQ.s_vgxudeVqiQexpSPYsVHw'
  });

export default class reactMapbox extends Component {
    constructor(props) {
    super(props);
      this.state = {
        lng: 107.12830389999999,
        lat: -6.2773911,
        zoom: 13,
        style: "mapbox://styles/mapbox/streets-v9",
      };
    }

    render() {
        return (
            <div>
                <Map
                style= {this.state.style} 
                containerStyle= {{
                    height: '100vh',
                    width: '83.5vw'
                }} 
                center= {[this.state.lng, this.state.lat]}
                zoom= {[this.state.zoom]} 

                className="mapContainer"
                >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-6.2773911, 107.12830389999999]} />
                </Layer>
                </Map>
            </div>
        )
    }
}
