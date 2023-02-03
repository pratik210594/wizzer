<template>
  <div class='ria-advice-tab-search-with-table'>
    <div class='ria-advice-tab-search-with-btn-wrapper'>
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
        <a-button class='ria-advice-tab-filter-btn'>Filters</a-button>
      </div>
      <div class='bulk-cation-select-input' style='margin-left: 15px'>
        <a-select
          ref='select'
          v-model:value='parentTableBulkAction'
          style='width: 100%; height: 37px'
          :options='parentTableOptions'
          @focus='focus'
          @change='handleChange'
          placeholder='Bulk Actions'
        >
        </a-select>
      </div>
      <div class='ria-advice-tab-more-content'>
        <a-button class='advice-tab-lorem-btn'> Lorem Ipsum </a-button>
      </div>
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
    <div class='status-indicator-details'>
      <div class='Lorem-ipsum-color-code'></div>
      <div class='Lorem-ipsum-margin-text'>Lorem ipsum</div>
      <div class='Dolorn-sit-color-code'></div>
      <div class='Dolorn-sit-margin-text'>Dolorn sit</div>
      <div class='Phasellus-color-code'></div>
      <div class='Phasellus-margin-text'>Phasellus et</div>
      <div class='Nullam-odio-color-code'></div>
      <div class='Nullam-odio-margin-text'>Nullam odio</div>
    </div>
    <div class='ria-advice-tab-table-wrapper'>
      <div>
        <a-table
          :columns='adviceColumnData'
          :data-source='adviceListData'
          :row-selection='rowSelection'
          :pagination='false'
          @expand= 'expandAdviceRow'
          :rowKey="(record,index) => record.adviceId"
        >
        <template #adviceId="{ text }">
              <span @click='onClickAdviceId(text)' style='cursor: pointer'
                >{{ text }}</span
              >
            </template>
            <template #moreOptions>
          <more-outlined
            :style="{
            fontSize: '20px',
            color: '#505050',
            cursor: 'pointer',
            }"/>
        </template>
          <template #statusIndicator>
            <div class='table-color-code'></div>
          </template>
          <template #expandedRowRender>
            <div class='advice-tab-child-table-filter-wrapper'>
              <div class='advice-tab-child-table-search-with-filter'>
                <div style='width: 464px'>
                  <div class='ria-advice-tab-child-table-fr'>{{ adviceHeader }} details</div>
                </div>
                <div style='margin-left: auto'>
                  <a-button class='advice-tab-child-table-filter-btn'
                    >Filters</a-button
                  >
                </div>
                <div
                  class='advice-tab-child-table-bulk-cation-select-input'
                  style='margin-left: 15px'
                >
                  <a-select
                    ref='select'
                    v-model:value='childTableBulkAction'
                    style='width: 100%; height: 37px'
                    :options='childTableOptions'
                    @focus='focus'
                    @change='handleChange'
                    placeholder='Bulk Actions'
                  >
                  </a-select>
                </div>
                <div class='advice-tab-child-table-more-content'>
                  <a-button class='advice-tab-lorem-btn'>
                    Lorem Ipsum
                  </a-button>
                </div>
                <div style='margin-left: 25px'>
                  <more-outlined
                    :style="{
                      fontSize: '20px',
                      color: '#505050',
                      cursor: 'pointer',
                    }"
                  />
                </div>
                <div style='margin-left: 15px'>
                  <plus-outlined
                    :style="{
                      fontSize: '20px',
                      color: '505050',
                      cursor: 'pointer',
                    }"
                  />
                </div>
              </div>
              <a-table
                :columns='adviceListingInnerColumnData'
                :data-source='adviceTransactionData'
                :row-selection='innerTableRowSelection'
                :pagination='false'
                :rowKey="(record) => record.id"
              >
                <template #moreOptions>
                  <more-outlined
                    :style="{
                      fontSize: '20px',
                      color: '#505050',
                      cursor: 'pointer',
                    }"
                  />
                </template>
                <template #statusIndicator>
                  <div class='table-color-code'></div>
                </template>
              </a-table>
            </div>
          </template>
        </a-table>
        <div v-if="showViewMore"
        class='ria-advice-tab-view-more-btn'>
          <a-button
          @click="onClickViewMore" style="margin:0px"
          class='ria-advice-tab-view-more-btn'>View more</a-button>
        </div>
      </div>
      <div>
        <a-drawer
          v-model:visible='showAdviceId'
          :placement='right'
          :closable='false'
          width='850'
          destroyOnClose
          ><adviceNumberDrawer
          @onCLickCrossIcon='onCLickCrossIcon'
        /></a-drawer>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from 'vue';
import {
  SearchOutlined,
  MoreOutlined,
  PlusOutlined,
} from '@ant-design/icons-vue';
import services from '../../../services/api';
import adviceNumberDrawer from './adviceNumberDrawer.vue';

export default {
  components: {
    SearchOutlined,
    MoreOutlined,
    PlusOutlined,
    adviceNumberDrawer,
  },

  setup() {
    const adviceListData = reactive([]);
    const adviceHeader = ref('');
    const adviceTransactionData = reactive([]);
    const pageCount = 1;
    const showAdviceId = ref(false);
    const staticData = reactive([]);
    const showViewMore = ref(true);
    const fetchAdvices = async () => {
      const emptyArray = [];
      const payload = {
        q: '',
        pageNo: pageCount,
      };
      await services
        .fetchAdvices(payload)
        .then((response) => {
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              adviceId: x.adviceId ? x.adviceId : '-',
              title1: 'Suspendisse ut',
              title2: 'Donec',
              title3: 'Nulam',
              title4: 'Pallentesque',
              title5: 'Fusce',
              title6: 'Vestibulam',
              title7: 'Praesent eu',
              title8: 'Aenean',
              status: {
                status: x.status ? x.status : '-',
              },
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(staticData, emptyArray);
      Object.assign(adviceListData, emptyArray.slice(0, 10));
    };
    const onClickViewMore = () => {
      Object.assign(adviceListData, staticData);
      showViewMore.value = false;
    };
    const fetchTransactionsUnderAnAdvice = async (adviceId) => {
      const emptyArray = [];
      // console.log(adviceHeader.value);
      const payload = {
        q: '',
        pageNo: pageCount,
        adviceId: adviceId.value,
      };
      await services
        .fetchTransactionsUnderAnAdvice(payload)
        .then((response) => {
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              adviceData: adviceId.value,
              name: x.client.name ? x.client.name : '-',
              description: x.description ? x.description : '-',
              assetClass: x.accessClass.name ? x.accessClass.name : '-',
              quantity: x.quantity ? x.quantity : '-',
              type: x.type ? x.type : '-',
              validity: x.validity ? x.validity : '-',
              advisor: x.advisor.name ? x.advisor.name : '-',
              convictionLevel: x.convictionLevel ? x.convictionLevel : '-',
              mode: x.mode ? x.mode : '-',
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(adviceTransactionData, emptyArray);
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchAdvices();
    });
    const expandAdviceRow = (expanded, rowKey) => {
      adviceHeader.value = rowKey.adviceId;
      if (expanded === true) { fetchTransactionsUnderAnAdvice(adviceHeader); }
      console.log('advice id', adviceHeader.value);
      console.log('rowkey', rowKey);
    };
    const onClickAdviceId = (adviceId) => {
      console.log('clientAdviceId', adviceId);
      showAdviceId.value = true;
    };
    const onCLickCrossIcon = () => {
      showAdviceId.value = false;
    };
    const adviceColumnData = reactive([
      {
        title: '#A',
        dataIndex: 'adviceId',
        key: 'adviceId',
        slots: { customRender: 'adviceId' },
      },
      {
        title: 'Title1',
        dataIndex: 'title1',
        key: 'title1',
      },
      {
        title: 'Title',
        dataIndex: 'title2',
        key: 'title2',
      },
      {
        title: 'Title',
        dataIndex: 'title3',
        key: 'title3',
      },
      {
        title: 'Title',
        dataIndex: 'title4',
        key: 'title4',
      },
      {
        title: 'Title',
        dataIndex: 'title5',
        key: 'title5',
      },
      {
        title: 'Title',
        dataIndex: 'title6',
        key: 'title6',
      },
      {
        title: 'Title',
        dataIndex: 'title7',
        key: 'title7',
      },
      {
        title: 'Title',
        dataIndex: 'title8',
        key: 'title8',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        slots: { customRender: 'statusIndicator' },
      },
      {
        title: '',
        dataIndex: 'moreOptions',
        key: 'moreOptions',
        slots: { customRender: 'moreOptions' },
      },
    ]);
    const adviceListingInnerColumnData = [
      {
        title: 'A#',
        dataIndex: 'adviceData',
        key: 'adviceData',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Asset Class',
        dataIndex: 'assetClass',
        key: 'assetClass',
      },
      {
        title: 'Qty',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Limit or Market Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Validity Criteria',
        dataIndex: 'validity',
        key: 'validity',
      },
      {
        title: 'Advisor',
        dataIndex: 'advisor',
        key: 'advisor',
      },
      {
        title: 'Level of Conviction',
        dataIndex: 'convictionLevel',
        key: 'convictionLevel',
      },
      {
        title: 'Mode',
        dataIndex: 'mode',
        key: 'mode',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        slots: { customRender: 'statusIndicator' },
      },
      {
        title: '',
        dataIndex: 'moreOptions',
        key: 'moreOptions',
        slots: { customRender: 'moreOptions' },
      },
    ];
    const childTableBulkAction = ref(undefined);
    const parentTableBulkAction = ref(undefined);
    const parentTableOptions = ref([
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
    const childTableOptions = ref([
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
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows,
        );
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    const openMoreOptions = (index) => {
      console.log('index :>> ', index);
    };
    // const visible = ref<boolean>(false);
    // const hide = () => {
    //   visible.value = false;
    // };
    const innerTableRowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows,
        );
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return {
      adviceColumnData,
      rowSelection,
      innerTableRowSelection,
      childTableBulkAction,
      parentTableBulkAction,
      childTableOptions,
      parentTableOptions,
      adviceListingInnerColumnData,
      openMoreOptions,
      adviceListData,
      adviceTransactionData,
      expandAdviceRow,
      adviceHeader,
      onClickAdviceId,
      onCLickCrossIcon,
      showAdviceId,
      staticData,
      onClickViewMore,
      showViewMore,
      // hide,
    };
  },
};
</script>
<style lang='scss'>
@import '../styles/riaAdviceTab.scss';
</style>
