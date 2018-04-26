import {Bar, mixins, generateChart} from 'vue-chartjs';
import {ChartOptions} from "chart.js";

const {reactiveProp} = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      default: () => getDefaultBarConfiguration()
    },
    chartData: {
      type: Object,
      default:[]
    }
  },

  mounted() {
    let ctx: any = this;
    ctx.renderChart(ctx.chartData, ctx.options);
  },
}

export function getDefaultBarConfiguration(): ChartOptions {
  return {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          let value = data.datasets[0].data[tooltipItem.index];
          const label = data.labels[tooltipItem.index];
          if (value === 0.11) {
            value = 0;
          }
          return `${label}: ${value} %`;
        }
      }
    },

    scales: {
      xAxes: [{
        categoryPercentage: 1,
        barPercentage: 0.8,
        gridLines: {
          tickMarkLength: 0,
          offsetGridLines: false,
          display: true
        },
        ticks: {
          min: 0,
          fontSize: 20
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }]
    }
  }
}








