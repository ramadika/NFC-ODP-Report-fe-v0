// Dependencies
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
// Internals
import "components/Report-Page/Summary/index.css";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "ODP",
          // data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 23, 13, 432],
          data: [],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Addition Trends by Date",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          // categories: [
          //   "Jan",
          //   "Feb",
          //   "Mar",
          //   "Apr",
          //   "May",
          //   "Jun",
          //   "Jul",
          //   "Aug",
          //   "Sep",
          //   "Okt",
          //   "Nov",
          //   "Dec",
          // ],
          categories: [],
        },
      },
      summary: [],
      sumDate: [],
    };
  }
  
  fetchSummary = () => {
      fetch('https://103.135.5.242/backend-app/addition-summary.php')
      .then(response => {
          response.json().then(function(data) {
              if(data.success === 1){
                this.setState({
                    summary:data.additionSummary,
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
      this.fetchSummary();
  }

  render() {
    var {summary, series, options, sumDate} = this.state;
    
    var i = 0;
    // eslint-disable-next-line array-callback-return
    summary.map((obj) => {

      sumDate[i] = obj.formatted_date;
      // eslint-disable-next-line array-callback-return
      series.map((jbo) => {
        jbo.data.push(obj.Installation)
      })
      i++;
    });
    console.log(sumDate);
    // var index = sumDate.length;
    // while (index >= 0) {
    //     index--;
    //     options.xaxis.categories.push(sumDate[index]);
    // }
    for(var y=0; y < sumDate.length+1; y++){
      options.xaxis.categories.push(sumDate[y]);
    }
    // options.xaxis.categories = options.xaxis.categories.slice(0, 10);
    console.log(this.state.options); 

    return (
        <div className="d-flex justify-content-center">
            <ReactApexChart
                options = {this.state.options}
                series = {series}
                type = "line"
                height = {350}
                width = {750}
            ></ReactApexChart>
      </div>
    );
  }
}
