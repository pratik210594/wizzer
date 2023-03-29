<template>
  <progress-chart v-bind="config3"/>
</template>
<script>
import { ProgressChart } from '@opd/g2plot-vue';

export default {
  name: 'AreaChartDemo',
  components: {
    ProgressChart,
  },
  setup() {
    const data1 = [
      {
        title: 'sss',
        ranges: [50],
        measures: [30],
        target: 50,
      },
    ];
    return {
      config3: {
        data1,
        measureField: 'measures',
        rangeField: 'ranges',
        targetField: 'target',
        xField: 'title',
        label: {
          measure: {
            position: 'middle',
            style: {
              fill: '#fff',
            },
          },
        },
        xAxis: {
          line: null,
        },
        yAxis: false,
        tooltip: {
          showMarkers: false,
          shared: true,
        },
        legend: {
          custom: true,
          position: 'bottom',
          items: [
            {
              value: '差',
              name: '差',
              marker: { symbol: 'square', style: { fill: '#FFbcb8', r: 5 } },
            },
          ],
        },
      },
    };
  },
};
</script>
