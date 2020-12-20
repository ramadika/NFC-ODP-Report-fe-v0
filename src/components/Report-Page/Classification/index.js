// Dependencies
import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Internals
import {DataContext} from 'components/Context'

export default class indexClass extends Component {
    static contextType = DataContext;

    state = {
        data: [],
    }

    render() {
        const {klasifikasiODP, products} = this.context;
        var {data} = this.state;

        var ODPcount = products.length;

        klasifikasiODP.map((obj) => {
          var randomColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
          });
          
          var newNum = obj.Jumlah_ODP / ODPcount * 100;
      
          let insert = {
            color: randomColor,
            title: obj.Klasifikasi_Nama,
            value: newNum,
          };
      
          data.push(insert); 
        });

        return (
            <div>
                <Row>
                    <Col>
                        <PieChart
                            animate
                            animationDuration={500}
                            animationEasing="ease-out"
                            center={[50, 50]}
                            lengthAngle={360}
                            paddingAngle={0}
                            radius={50}
                            startAngle={0}
                            viewBoxSize={[100, 100]}
                            label={(data) => data.dataEntry.title}
                            labelPosition={70}
                            labelStyle={{
                              fontSize: "4px",
                              fontColor: "FFFFFA",
                              fontWeight: "400",
                            }}
                            data = {data}
                        />
                    </Col>
                    <Col>
                        <table className="table table-borderless">
                            <tbody>
                                {
                                    klasifikasiODP.map(klasifikasi =>(
                                        <tr key={klasifikasi.KlasifikasiODP_ID}>
                                            <th scope="row">{klasifikasi.Klasifikasi_Nama}</th>
                                            <td>{klasifikasi.Jumlah_ODP} ODP</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        )
    }
}
