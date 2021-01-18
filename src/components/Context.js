import React, { Component } from 'react';
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
        post_found:true,
        Allodp:[],
    }

    postShow = (show) => {
        this.setState({
            post_found:show
        })
    }
    
    fetchAllODP = () => {
        fetch('http://localhost/backend-app/all-odp.php')
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
        const {Allodp} = this.state;
        return (
            <DataContext.Provider 
            value={{Allodp}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
