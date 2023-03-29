<template>
  <treemap-chart v-bind="config"/>
</template>
<script>
import { TreemapChart } from '@opd/g2plot-vue';
import { watch } from 'vue';

const check = [''];
export default {
  name: 'TreeMap',
  components: {
    TreemapChart,
  },
  // props: ['value'],
  setup() {
    watch(() => {
      // console.log('check', props.value);
    });
    return {
      config: {
        colorField: 'name',
        data: {
          name: 'root',
          children: [{ name: '30%', value: 80 }, { name: '70%', value: 100 }],
        },
      },
      check,
    };
  },
};
</script>
