<template>
<div class="ria-client-profile-main-wrapper">
    <div style="padding:20px">
    <div class="drawer-close-icon">
     <close-outlined :style="{ fontSize: '25px', color: '#505050', cursor: 'pointer' }"
      @click="onCLickCrossIcon" />
    </div>
    <div class="ria-client-avatar-with-name">
     <div class="ria-client-avatar-wrapper">
    <a-avatar :size="64">
    <template #icon><user-outlined /></template>
    </a-avatar>
     </div>
     <div>
        <span class="ria-profile-client-name">{{ name }}</span> <down-outlined
        :style="{ fontSize: '17px', color: '#505050', cursor: 'pointer' }"/>
     <div class="ria-profile-client-more-details">{{ shortName }}</div>
     </div>
    </div>
    <div class="ria-client-profile-tag-wrapper">
       <a-tag v-for="asset in assetClass" :key="asset.id" closable @close.prevent>
         {{asset.name}}</a-tag>
    </div>
</div>
<div class="ria-client-profile-tabs-main-wrapper">
    <a-tabs v-model:activeKey="activeKey" :animated="false">
    <a-tab-pane key="ledger" tab="Ledger">
    <ledgerTab :clientIdForTable='clientIdForTable' class="tabs-content-main-wrapper"/>
    </a-tab-pane>
    <a-tab-pane key="accountStatement" tab="Account Statement">
        <accountProfileTab :clientIdForTable='clientIdForTable' class="tabs-content-main-wrapper"/>
    </a-tab-pane>
    <a-tab-pane key="tradeBook" tab="Trade Book">
        <tradeBookTab :clientIdForTable='clientIdForTable'
         class="tabs-content-main-wrapper"/></a-tab-pane>
    <a-tab-pane key="dpHolding" tab="DP Holdings">
        <dpHoldingTab :clientIdForTable='clientIdForTable'
        class="tabs-content-main-wrapper"/></a-tab-pane>
    <a-tab-pane key="dpTransactions" tab="DP Transactions">
        <dpTransactions :clientIdForTable='clientIdForTable'
        class="tabs-content-main-wrapper"/></a-tab-pane>
  </a-tabs>
</div>
</div>
</template>
<script>
// import { useRouter } from 'vue-router';
import {
  onMounted,
  ref,
  watch,
  // reactive,
} from 'vue';
import {
  CloseOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons-vue';
import ledgerTab from './clientProfileLedgerTab.vue';
import accountProfileTab from './clientProfileAccountStatement.vue';
import tradeBookTab from './clientProfileTradeBookTab.vue';
import dpHoldingTab from './clientDpHoldingTab.vue';
import dpTransactions from './clientDpTransactionsTab.vue';
// import { useStore } from 'vuex';
import services from '../../../services/api';

export default {
  components: {
    CloseOutlined,
    UserOutlined,
    DownOutlined,
    ledgerTab,
    accountProfileTab,
    tradeBookTab,
    dpHoldingTab,
    dpTransactions,
  },
  props: ['clientId'],
  setup(props, context) {
    let clientIdForTable = ref('');
    watch(() => {
      clientIdForTable = props.clientId;
    });
    // const clientIds = ref('');
    const name = ref('');
    const shortName = ref('');
    const assetClass = ref([]);
    const fetchClienProfile = async () => {
      await services
        .fetchClientShortProfile(clientIdForTable)
        .then((response) => {
          const { data } = response;
          name.value = data.name;
          shortName.value = data.shortName;
          assetClass.value = data.assetClasses;
          console.log('data :>> ', assetClass);
        })
        .catch(() => {});
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchClienProfile(clientIdForTable);
    });
    const onCLickCrossIcon = () => {
      context.emit('onCLickCrossIcon', false);
    };
    return {
      onCLickCrossIcon,
      activeKey: ref('ledger'),
      clientIdForTable,
      fetchClienProfile,
      // clientId,
      name,
      shortName,
      assetClass,
    };
  },
};
</script>

<style lang='scss'>
@import '../styles/clientProfileDrawer.scss';
</style>
