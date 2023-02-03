<template>
  <div class='ria-client-profile-ledger-tab-main-wrapper'>
    <div>
      <a-input
        class='common-search '
        v-model:value='ledgerSearch'
        placeholder='Search'
        @pressEnter="enterPressed"
      >
        <template #prefix>
          <search-outlined :style="{ fontSize: '17px', color: '#969696' }" />
        </template>
      </a-input>
    </div>
    <div class='client-profile-filter-main-wrapper'>
      <div class='client-profile-filter-by-text'>Filter by</div>
      <div class='filter-by-fields-wrapper'>
        <div style='width: 100%; margin-right: 15px'>
          <a-select
            ref='select'
            v-model:value='segment'
            style='width: 100%'
            :options='options'
            @focus='focus'
            @change='handleChange'
            placeholder='Select Segment'
          >
          </a-select>
        </div>
        <div style='width: 100%'>
          <a-input v-model:value='value' placeholder='Enter Symbol' />
        </div>
      </div>
      <div class='filter-by-fields-wrapper'>
        <div style='width: 100%; margin-right: 15px'>
        <a-date-picker placeholder='Date Range' v-model:value="date"  />
        </div>
        <div style='width: 100%'>
          <a-select
            ref='select'
            v-model:value='tags'
            style='width: 100%'
            :options='options'
            @focus='focus'
            @change='handleChange'
            placeholder='Filter By tags'
          >
          </a-select>
        </div>
      </div>
    <div class="ria-backoffice-apply-filter-button">
    <a-button class='ria-back-office-apply-btn'>Apply</a-button>
    </div>
    </div>
    <div class="client-profile-table-wrapper">
        <div class='client-profile-download-xls-link'>
         <img style="margin-right:10px" src="../../../assets/excel.png" />
         <a @click="onClickLDownloadLedger" :href='downloadLink' download
          class="download-xls-link-text">Download.xls</a>
        </div>
        <div class="ledger-table-main-wrapper">
         <a-table
            :columns='ledgerColumnData'
            :data-source='ledgerData'
            :pagination='false'>
            <template #symbol="{ text }">
              <span>{{ text.symbol }}</span>
              <div class="symbol-type-text">{{ text.type }}</div>
            </template>
            <template #type="{ text }">
              <span class="ledger-table-order-type">{{ text }}</span>
            </template>
            <template #contractNotes>
              <img style="padding-left:15px" src="../../../assets/pdf.png" />
            </template>
            </a-table>
            <div v-if="showViewMore" class="ledger-table-view-more-btn">
        <a-button @click="onClickViewMore"
        class='ledger-view-more-btn'>View more</a-button>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
// import { useRouter } from 'vue-router';
import {
  onMounted,
  ref,
  reactive,
  watch,
} from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
// import { useStore } from 'vuex';
import services from '../../../services/api';

export default {
  components: { SearchOutlined },
  props: ['clientIdForTable'],
  setup(props) {
    let clientId = ref('');
    watch(() => {
      clientId = props.clientIdForTable;
    });
    const ledgerData = reactive([]);
    const staticData = reactive([]);
    const showViewMore = ref(true);
    const fetchClienLedger = async (query) => {
      const emptyArray = [];
      const payload = {
        q: query,
        clientId,
        pageNo: 1,
      };
      await services
        .fetchClientsLedger(payload)
        .then((response) => {
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              symbol: {
                symbol: x.symbol ? x.symbol : '-',
                type: x.exchange,
              },
              tradeTime: x.tradeTime ? x.tradeTime : '-',
              type: x.type ? x.type : '-',
              orderId: x.orderId ? x.orderId : '-',
              tradeId: x.tradeId ? x.tradeId : '-',
              quantity: x.quantity ? x.quantity : 0,
              averagePrice: x.averagePrice ? x.averagePrice : 0,
              contractNotes: x.contractNote ? x.contractNote : '-',
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(staticData, emptyArray);
      Object.assign(ledgerData, emptyArray.slice(0, 10));
    };
    const onClickViewMore = () => {
      Object.assign(ledgerData, staticData);
      showViewMore.value = false;
    };
    const downloadLink = ref('');
    const onClickLDownloadLedger = async () => {
      await services
        .downloadClientLedger(clientId)
        .then((response) => {
          const { data } = response;
          console.log('data :>> ', data);
          downloadLink.value = data.uri;
        })
        .catch(() => {});
    };
    const enterPressed = (value) => {
      const query = value.target.value;
      fetchClienLedger(query);
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchClienLedger();
    });
    // const onCLickCrossIcon = () => {
    //   context.emit('onCLickCrossIcon', false);
    // };
    const ledgerSearch = ref('');
    const segment = ref(undefined);
    const tags = ref(undefined);
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
    const ledgerColumnData = reactive([
      {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
        slots: { customRender: 'symbol' },
      },
      {
        title: 'Trade Time',
        dataIndex: 'tradeTime',
        key: 'tradeTime',
      },
      {
        title: 'Order ID',
        dataIndex: 'orderId',
        key: 'orderId',
      },
      {
        title: 'Trade ID',
        dataIndex: 'tradeId',
        key: 'tradeId',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        slots: { customRender: 'type' },
      },
      {
        title: 'Qty.',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Avg.Price',
        dataIndex: 'averagePrice',
        key: 'averagePrice',
      },
      {
        title: 'Contract Notes',
        dataIndex: 'contractNotes',
        key: 'contractNotes',
        slots: { customRender: 'contractNotes' },
      },
    ]);
    return {
      //   onCLickCrossIcon,
      //   activeKey: ref('ledger'),
      ledgerSearch,
      options,
      segment,
      tags,
      ledgerColumnData,
      ledgerData,
      clientId,
      onClickLDownloadLedger,
      downloadLink,
      enterPressed,
      showViewMore,
      onClickViewMore,
    };
  },
};
</script>

<style lang='scss'>
@import '../styles/clientProfileLedgerTab.scss';
</style>
