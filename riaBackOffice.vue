<template>
  <div class='ria-back-office-dashboard-main-wrapper'>
    <div class='ria-back-offiec-title'>RIA Backoffice</div>
    <div class="ria-back-office-widgets-wrapper">
      <div class="widgets-first-row-wrapper">
        <div class="widgets-common-wrapper" style="margin-right:15px">
          <div>Total Aggregate</div>
          <areaChart/></div>
        <div class="widgets-common-wrapper" style="margin-right:15px">
          <div>Visits</div><areaChart/></div>
        <div class="widgets-common-wrapper">
          <div>Payments</div><columnChart/></div>
      </div>
      <div class="widgets-first-row-wrapper">
        <div class="widgets-common-wrapper" style="margin-right:15px">
          <div>Visits</div><areaChart/></div>
        <div class="widgets-common-wrapper" style="margin-right:15px">
          <div>Payments</div><columnChart/></div>
        <div class="widgets-common-wrapper">
          <div>Operational Effect</div><areaChart/></div>
      </div>
    </div>
    <div class='ria-back-office-search-with-table'>
      <div class='ria-back-office-search-with-btn-wrapper'>
        <div style='width: 464px'>
          <a-input
            class='common-search'
            v-model:value='userName'
            placeholder='Search'
          >
            <template #prefix>
              <search-outlined />
            </template>
          </a-input>
        </div>
        <div style='margin-left: auto'>
          <a-button class='ria-back-office-filter-btn'>Filters</a-button>
        </div>
        <div class='bulk-cation-select-input' style='margin-left: 15px'>
          <!-- <a-button class='ria-back-office-filter-btn'>Bulk Actions</a-button> -->
          <a-select
            ref='select'
            v-model:value='bulkAction'
            style='width: 100%; height: 37px'
            :options='options'
            @focus='focus'
            @change='handleChange'
            placeholder='Bulk Actions'
          >
          </a-select>
        </div>
        <div class='ria-back-office-more-content'>Lorem Ipsum</div>
        <div style='margin-left: 25px'>
          <more-outlined
            :style="{ fontSize: '20px', color: '#505050', cursor: 'pointer' }"
          />
        </div>
        <div style='margin-left: 15px'>
          <plus-outlined
            :style="{ fontSize: '20px', color: '505050', cursor: 'pointer' }"
          />
        </div>
      </div>
      <div class='ria-back-office-table-wrapper'>
        <div>
          <a-table
            :columns='clientColumns'
            :data-source='clientData'
            :row-selection='rowSelection'
            :pagination='false'
            :rowKey="(record) => record.client.id"
            :loading="loader"
          >
            <template #client="{ text }">
              <span @click='onClickClientName(text.id)' style='cursor: pointer'
                >{{ text.clientName }}</span
              >
            </template>
            <template #moreOptions>
              <more-outlined
                :style="{
                  fontSize: '20px',
                  color: '#505050',
                  cursor: 'pointer',
                }"
              />
            </template>
          </a-table>
          <div v-if="showViewMore" class='ria-backoffice-table-view-more-btn'>
            <a-button @click="onClickViewMore"
              class='ria-back-office-view-more-btn'>View more</a-button>
          </div>
        </div>
      </div>
      <div>
        <a-drawer
          v-model:visible='showClientProfile'
          :placement='right'
          :closable='false'
          width='850'
          destroyOnClose
          ><clientProfileDrawer
          :clientId='clientId'
          @onCLickCrossIcon='onCLickCrossIcon'
        /></a-drawer>
      </div>
    </div>
  </div>
</template>
<script>
// import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import {
  SearchOutlined,
  MoreOutlined,
  PlusOutlined,
} from '@ant-design/icons-vue';
import clientProfileDrawer from './clentProfileDrawer.vue';
import areaChart from '../../common/components/areaChart.vue';
import columnChart from '../../common/components/columnChart.vue';
// import { useStore } from 'vuex';
import services from '../../../services/api';

export default {
  components: {
    SearchOutlined,
    MoreOutlined,
    PlusOutlined,
    clientProfileDrawer,
    areaChart,
    columnChart,
  },
  setup() {
    const clientData = reactive([]);
    const staticData = reactive([]);
    const pageCount = 1;
    const showViewMore = ref(true);
    const loader = ref(false);
    const fetchClientListing = async () => {
      const emptyArray = [];
      const payload = {
        q: '',
        pageNo: pageCount,
      };
      loader.value = true;
      await services
        .fetchClients(payload)
        .then((response) => {
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              client: {
                clientName: x.name ? x.name : '-',
                id: x.id,
              },
              currentLedgerBalance: x.ledgerBalance ? x.ledgerBalance : 0,
              currentMarginHeld: x.marginHeld ? x.marginHeld : 0,
              openAvailableMargin: x.openAvailableMargin ? x.openAvailableMargin : 0,
              securitiesArrive: x.securitiesToArrive ? x.securitiesToArrive : 0,
              amountBlocked: x.amountBlocked ? x.amountBlocked : 0,
              rmsWarning: x.rmsWarning ? x.rmsWarning : '-',
              advanceExporeReduction: x.advancedExporeReduction ? x.advancedExporeReduction : '-',
              amet: '-',
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(staticData, emptyArray);
      Object.assign(clientData, emptyArray.slice(0, 10));
      loader.value = false;
    };
    const onClickViewMore = () => {
      Object.assign(clientData, staticData);
      showViewMore.value = false;
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchClientListing();
    });
    const clientColumns = reactive([
      {
        title: 'Client Name',
        dataIndex: 'client',
        key: 'client',
        slots: { customRender: 'client' },
      },
      {
        title: 'Current Ledger Balance',
        dataIndex: 'currentLedgerBalance',
        key: 'currentLedgerBalance',
      },
      {
        title: 'Current Margin Held',
        dataIndex: 'currentMarginHeld',
        key: 'currentMarginHeld',
      },
      {
        title: 'Open Available Margin',
        dataIndex: 'openAvailableMargin',
        key: 'openAvailableMargin',
      },
      {
        title: 'Securities to arrive in acc.',
        dataIndex: 'securitiesArrive',
        key: 'securitiesArrive',
      },
      {
        title: 'Amount Blocked',
        dataIndex: 'amountBlocked',
        key: 'amountBlocked',
      },
      {
        title: 'RMS Warning',
        dataIndex: 'rmsWarning',
        key: 'rmsWarning',
      },
      {
        title: 'Advanced Expore Reduction',
        dataIndex: 'advanceExporeReduction',
        key: 'advanceExporeReduction',
      },
      {
        title: 'Amet',
        dataIndex: 'amet',
        key: 'amet',
      },
      {
        title: 'Amet',
        dataIndex: 'amet',
        key: 'amet',
      },
      {
        title: '',
        dataIndex: 'moreOptions',
        key: 'moreOptions',
        slots: { customRender: 'moreOptions' },
      },
    ]);
    const bulkAction = ref(undefined);
    const options = ref([
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]);
    const rowSelection = {
      onChange: (selectedRowKeys) => {
        console.log('selectedRowKeys :>> ', selectedRowKeys);
      },
    };
    const showClientProfile = ref(false);
    const clientId = ref('');
    const onClickClientName = (props) => {
      clientId.value = props;
      showClientProfile.value = true;
    };
    const onCLickCrossIcon = () => {
      showClientProfile.value = false;
    };
    return {
      clientColumns,
      clientData,
      rowSelection,
      showClientProfile,
      onClickViewMore,
      onClickClientName,
      onCLickCrossIcon,
      bulkAction,
      options,
      fetchClientListing,
      pageCount,
      clientId,
      showViewMore,
      loader,
    };
  },
};
</script>

<style lang='scss'>
@import '../styles/riaBackOffice.scss';
</style>
