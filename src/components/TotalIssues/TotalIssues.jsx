'use strict';

import React from 'react';
import Highcharts from 'highcharts';
import { Panel } from 'react-bootstrap';

class TotalIssues extends React.Component {
  componentDidMount() {
    let self = this;
    let pieChart = document.getElementById('pieChart');
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
         name: 'Total Issues',
         data: [
             { name: 'HTML', y: 5 },
             { name: 'CSS', y: 10 },
             { name: 'JavaScript', y: 15 }
         ]
      }]
    };

    // Note: (Open Issue) Highcharts cannot render on a div with 'display: none' set
    setTimeout(() => {
      self.chart = new Highcharts["Chart"](
        pieChart,
        options
      );
    }, 500);
  }

  render() {
    return (
      <Panel header="Issues separation">
        <div className="pie-chart-container text-center" id="pieChart"></div>
      </Panel>
    );
  }
};

export default TotalIssues;
