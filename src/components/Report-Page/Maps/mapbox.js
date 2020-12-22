import React from 'react';
// import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
// import ReactMapboxGl from 'react-mapbox-gl';
import 'components/Report-Page/Maps/index.css'

mapboxgl.accessToken = 'pk.eyJ1IjoicmFtYWRpa2ExMDUwIiwiYSI6ImNraXpkZzU4cTE2M3QycW15cnhrMG1ueXcifQ.s_vgxudeVqiQexpSPYsVHw';

export default class Application extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      lng: 107.12830389999999,
      lat: -6.2773911,
      zoom: 15
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}
// const Map = ReactMapboxGl({
//     accessToken:
//       'pk.eyJ1IjoicmFtYWRpa2ExMDUwIiwiYSI6ImNraXpkZzU4cTE2M3QycW15cnhrMG1ueXcifQ.s_vgxudeVqiQexpSPYsVHw'
//   });

// ReactDOM.render(<Application />, document.getElementById('app'));