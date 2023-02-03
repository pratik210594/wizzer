<template>
  <div class="ria-advice-listing-main-wrapper">
    <div class="ria-advice-listing-title">
      RIA Advice
      <div class="ria-advice-listing-btn">
        <a-button class="ria-advice-listing-apply-btn">
        Create Advice
        </a-button>
      </div>
    </div>
    <div class="ria-advice-listing-widgets-wrapper">
      <div class="widgets-first-row-wrapper">
        <div class="widgets-common-wrapper" style="margin-right: 15px">
          <div>Total Sales</div>
          <areaChart />
        </div>
        <div class="widgets-common-wrapper" style="margin-right: 15px">
          <div>Visits</div>
          <areaChart />
        </div>
        <div class="widgets-common-wrapper">
          <div>Payments</div>
          <columnChart />
        </div>
      </div>
      <div class="widgets-first-row-wrapper">
        <div class="widgets-common-wrapper" style="margin-right: 15px">
          <div>Visits</div>
          <areaChart />
        </div>
        <div class="widgets-common-wrapper" style="margin-right: 15px">
          <div>Payments</div>
          <columnChart />
        </div>
        <div class="widgets-common-wrapper">
          <div>Operational Effect</div>
          <areaChart />
        </div>
      </div>
    </div>
    <div class="advice-listing-tabs">
      <a-tabs v-model:activeKey="activeKey" :animated="false">
        <a-tab-pane key="1" tab="Advices">
           <adviceTab />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Orders">
          <ordersTab />
        </a-tab-pane>
        <a-tab-pane key="3" tab="Closed Advices">
           <closedOrderTab />
        </a-tab-pane>
        <a-tab-pane key="4" tab="History">
           <historyTab />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
// import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { } from '@ant-design/icons-vue';
// import { useRouter } from 'vue-router';
import areaChart from '../../common/components/areaChart.vue';
import columnChart from '../../common/components/columnChart.vue';
import adviceTab from './riaAdviceTab.vue';
import ordersTab from './riaAdviceOrderTab.vue';
import closedOrderTab from './riaAdviceClosedOrderTab.vue';
import historyTab from './riaAdviceHistoryTab.vue';
// import { useStore } from 'vuex';
// import services from '../../../services/apis';
export default {
  components: {
    areaChart,
    columnChart,
    adviceTab,
    ordersTab,
    closedOrderTab,
    historyTab,
  },

  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    return {
      activeKey: ref('1'),
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    };
  },
};
</script>

<style lang='scss'>
@import "../styles/riaAdviceListing.scss";
</style>
