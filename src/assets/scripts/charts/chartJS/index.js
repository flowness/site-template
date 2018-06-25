import Chart from 'chart.js';
import { COLORS } from '../../constants/colors';

export default (function () {

  // ------------------------------------------------------
  // @Bar Charts
  // ------------------------------------------------------

  const barChartBox = document.getElementById('bar-chart');

  if (barChartBox) {
    const barCtx = barChartBox.getContext('2d');

    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['With AquaSafe', 'Without AquaSafe'],
        datasets: [{
          label           : 'Avrg. claim cost EOW',
          backgroundColor : [COLORS['deep-purple-500'],COLORS['indigo-500']],
          borderColor     : '#4527a0',
          borderWidth     : 1,
          data            : [10, 50],
        }],
      },

      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
        }
      },
    });
  }

  // ------------------------------------------------------
  // @pie Charts
  // ------------------------------------------------------

  const pieChartBox = document.getElementById('pie-chart');
  if (pieChartBox) {
    const pieCtx = pieChartBox.getContext('2d');

    new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: ['No claim EOW', 'Claimed EOW'],
        datasets: [{
          label           : 'System savings',
          backgroundColor : [COLORS['deep-purple-500'],COLORS['indigo-500']],
          borderColor     : '#4527a0',
          borderWidth     : 1,
          data            : [10, 50],
        }],
      },

      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        }
      },
    });
  }
}())
