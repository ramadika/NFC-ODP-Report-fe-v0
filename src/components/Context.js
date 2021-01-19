import React, { Component } from 'react';
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
        post_found: true,
        Allodp: [],
        initialURL: 'http://localhost/backend-app/all-odp.php',
        headers: [
            // { name: "No#", field: "id", sortable: false },
            { name: "ODP ID", field: "odp id", sortable: true },
            { name: "Kapasitas", field: "kapasitas", sortable: true },
            { name: "Optical Power", field: "location", sortable: false },
            { name: "Location", field: "location", sortable: false },
            { name: "Tanggal Instalasi", field: "tanggal", sortable: false },
            { name: "Action", field: "action", sortable: false },
        ],
    }

    postShow = (show) => {
        this.setState({
            post_found:show
        })
    }
    
    fetchAllODP = () => {
        fetch(this.state.initialURL)
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        Allodp:data.odp.reverse(),
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
        this.fetchAllODP();
    }

    render() {
        const contextValue = {
            Allodp: this.state.Allodp,
            post_found: this.state.post_found,
            initialURL: this.state.initialURL,
            headers: this.state.headers,
            post_show: this.postShow
        }

        return (
            <DataContext.Provider value={contextValue}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
