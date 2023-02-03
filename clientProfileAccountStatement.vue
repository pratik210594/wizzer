<template>
  <div class='ria-client-profile-account-statement-tab-main-wrapper'>
    <div>
      <a-input
        class='common-search '
        v-model:value='accountStatementSearch'
        placeholder='Search'
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
          <a-select
            ref='select'
            v-model:value='reportType'
            style='width: 100%'
            :options='options'
            @focus='focus'
            @change='handleChange'
            placeholder='Report Type'
          >
          </a-select>
        </div>
      </div>
      <div class='filter-by-fields-wrapper'>
        <div style='width: 100%; margin-right: 15px'>
        <a-date-picker placeholder='Date Range' v-model:value="date"  />
        </div>
        <div style='width: 100%'>
          <a-select
            ref='select'
            v-model:value='tradeType'
            style='width: 100%'
            :options='options'
            @focus='focus'
            @change='handleChange'
            placeholder='Trade Type'
          >
          </a-select>
        </div>
      </div>
    <div class="ria-backoffice-apply-filter-button">
    <a-button class='ria-back-office-apply-btn'>Apply</a-button>
    </div>
    </div>
    <div class="account-statement-download-pdf-wrapper">
        <div class="account-statement-text">Statements</div>
        <div style="display:flex; flex-wrap:wrap">
        <div v-for="statement in statements" :key="statement.id"
         class="account-statement-file-with-download">
            <div><img  src="../../../assets/pdf.png" /></div>
            <div class="account-statement-file-name">{{ statement.name }}</div>
            <div style="margin-left:150px"><download-outlined
            :style="{ fontSize: '20px', color: '#CC4B4C', cursor: 'pointer' }" /></div>
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
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons-vue';
// import { useStore } from 'vuex';
import services from '../../../services/api';

export default {
  components: { SearchOutlined, DownloadOutlined },
  props: ['clientIdForTable'],
  setup(props) {
    let clientId = ref('');
    watch(() => {
      clientId = props.clientIdForTable;
    });
    const accountStatementData = reactive([]);
    const statements = ref({});
    const fetchAccountStatement = async () => {
      const emptyArray = [];
      await services
        .fetchClientAccountStatement(clientId)
        .then((response) => {
          const { data } = response;
          statements.value = data;
          // data.map((x) => {
          //   emptyArray.push({
          //     symbol: {
          //       symbol: x.symbol ? x.symbol : '-',
          //       type: x.exchange,
          //     },
          //     tradeTime: x.tradeTime ? x.tradeTime : '-',
          //     orderId: x.orderId ? x.orderId : '-',
          //     tradeId: x.tradeId ? x.tradeId : '-',
          //     quantity: x.quantity ? x.quantity : 0,
          //     averagePrice: x.averagePrice ? x.averagePrice : 0,
          //     contractNotes: x.contractNote ? x.contractNote : '-',
          //   });
          //   return emptyArray;
          // });
        })
        .catch(() => {});
      Object.assign(accountStatementData, emptyArray);
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchAccountStatement(clientId);
    });
    const accountStatementSearch = ref('');
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
    const accountStatementColumnData = reactive([
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
      accountStatementSearch,
      options,
      segment,
      tags,
      accountStatementColumnData,
      accountStatementData,
      clientId,
      statements,
    };
  },
};
</script>

<style lang='scss'>
@import '../styles/clientProfileAccountStatement.scss';
</style>
