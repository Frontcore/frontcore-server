'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Highcharts from 'highcharts';

let options = {
   chart: {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false,
       type: 'pie'
   },
   title: {
       text: ''
   },
   tooltip: {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   },
   plotOptions: {
       pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           dataLabels: {
               enabled: true,
               format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f} %)',
               style: {
                   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
               }
           },
           showInLegend: true
       }
   },
   series: [{
       name: 'Shards',
       data: [
           { name: 'Active Shards', y: 10 },
           { name: 'Relocating Shards', y: 8 },
           { name: 'Initializing Shards', y: 6 },
           { name: 'Unassigned Shards', y: 4 },
           { name: 'Delayed unassigned Shards', y: 2 },
           { name: 'Active Primary Shards', y: 1 }
       ]
   }]
};

class SharesStatistics extends React.Component {
  componentDidMount() {
    let pieChart = document.getElementById('pieChart');
    this.chart = new Highcharts["Chart"](
        pieChart,
        options
    );
  }

  componentWillUnmount() {
      this.chart.destroy();
  }

  render() {
    return (
      <div className="pie-chart-container text-center" id="pieChart"></div>
    );
  }
}

export default SharesStatistics;
