import React, { Component } from 'react';
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
        products: [
            {
                "id": 1,
                "ODP_ID": "E2000020271202362150D356",
                "Kapasitas": 8,
                "lat": -6.2773911,
                "long": 107.12830389999999,
                "href": "https://www.google.com/maps/?q=-6.2773911,107.12830389999999",
                "Tanggal_instalasi": "2020-08-01",
                "Optical_power": -19,
                "Port":[{
                    "Port_ID": 1, 
                    "ID_Pelanggan": "Cust1-1",
                    "Alamat": "Jababeka XIV",
                    "Tanggal_Berlangganan": "2020-10-10",
                    "Layanan": "Triple Play",
                },
                {
                    "Port_ID": 2, 
                    "ID_Pelanggan": "Cust2-1",
                    "Alamat": "Mekarmukti",
                    "Tanggal_Berlangganan": "2020-10-12",
                    "Layanan": "Single Play",
                },
                {
                    "Port_ID": 3, 
                    "ID_Pelanggan": "Cust3-1",
                    "Alamat": "Harja Mekar",
                    "Tanggal_Berlangganan": "2020-11-10",
                    "Layanan": "Triple Play",
                }]
            },
            {
                "id": 2,
                "ODP_ID": "E2000020271202472150DF7B",
                "Kapasitas": 8,
                "lat": -6.175110,
                "long": 106.865036,
                "href": "https://www.google.com/maps/?q=-6.2773911,107.12830389999999",
                "Tanggal_instalasi": "2020-11-04",
                "Optical_power": -19,
                "Port":[{
                    "Port_ID": 1, 
                    "ID_Pelanggan": "Cust1-2",
                    "Alamat": "Pavilion",
                    "Tanggal_Berlangganan": "2020-11-14",
                    "Layanan": "Triple Play",
                }]
            },
            {
                "id": 3,
                "ODP_ID": "E20000202712023590JKU87U",
                "Kapasitas": 16,
                "lat": -6.917464,
                "long": 107.619125,
                "href": "https://www.google.com/maps/?q=-6.2773911,107.12830389999999",
                "Tanggal_instalasi": "2020-12-01",
                "Optical_power": -19,
                "Port":[{
                    "Port_ID": 1, 
                    "ID_Pelanggan": "Cust1-3",
                    "Alamat": "Cikarang Utara",
                    "Tanggal_Berlangganan": "2020-12-10",
                    "Layanan": "Single Play",
                },
                {
                    "Port_ID": 2, 
                    "ID_Pelanggan": "Cust2-3",
                    "Alamat": "Cikarang Barat",
                    "Tanggal_Berlangganan": "2020-12-11",
                    "Layanan": "Triple Play",
                }]
            },
        ],
        standByPort: 18,
    }

    render() {
        const {products, klasifikasiODP, standByPort} = this.state;
        return (
            <DataContext.Provider 
            value={{products, klasifikasiODP, standByPort}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
