import React, { Component } from 'react';
export const DataContext = React.createContext();
// export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
        products: [
            {
                "ODP_ID": "E2000020271202362150D356",
                "Kapasitas": 8,
                "lat": "-6.2773911",
                "long": "107.12830389999999",
                "href": "https://www.google.com/maps/?q=-6.2773911,107.12830389999999",
                "Tanggal_instalasi": "2020-08-01",
                "Optical_power": -19,
            },
            {
                "ODP_ID": "E2000020271202472150DF7B",
                "Kapasitas": 8,
                "lat": "-6.2773911",
                "long": "107.12830389999999",
                "href": "https://www.google.com/maps/?q=-6.2773911,107.12830389999999",
                "Tanggal_instalasi": "2020-11-04",
                "Optical_power": -19,
            },
            {
                "ODP_ID": "E20000202712023590JKU87U",
                "Kapasitas": 16,
                "lat": "-6.2773911",
                "long": "107.12830389999999",
                "href": "https://www.google.com/maps/?q=-6.2773911,107.12830389999999",
                "Tanggal_instalasi": "2020-12-01",
                "Optical_power": -19,
            },
        ]
    }

    render() {
        const {products} = this.state;
        return (
            <DataContext.Provider 
            value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
