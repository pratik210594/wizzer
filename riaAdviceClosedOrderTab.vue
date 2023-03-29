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
        <!-- <a-button class='ria-back-office-filter-btn'>Bulk Actions</a-button> -->
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
      <div class='Lorem-ipsum-margin-text'>Profit</div>
      <div class='Dolorn-sit-color-code'></div>
      <div class='Dolorn-sit-margin-text'>No Profit/No Loss</div>
      <div class='Phasellus-color-code'></div>
      <div class='Phasellus-margin-text'>Loss</div>
      <!-- <div class='Nullam-odio-color-code'></div> -->
      <!-- <div class='Nullam-odio-margin-text'>Nullam odio</div> -->
    </div>
    <div class='ria-advice-tab-table-wrapper'>
      <div>
        <a-table
          :columns='fundRequestColumnData'
          :data-source='fundRequestData'
          :row-selection='rowSelection'
          :pagination='false'
          :expandIcon='customExpandIcon'
        >
          <template class="advice-tab-more-popover" #moreOptions>
            <a-popover v-model:visible='visible' trigger='click'>
              <more-outlined
                :style="{
                  fontSize: '20px',
                  color: '#505050',
                  cursor: 'pointer',
                }"
              />
              <template #content>
                <p>Add Clients</p>
                <p>Add Quantity</p>
                <p>Reduce Quantity</p>
                <p>Reduce Clients</p>
                <p @click="hide">Close</p>
              </template>
            </a-popover>
          </template>
          <template #statusIndicator>
            <div class='table-color-code'></div>
          </template>
          <template #expandedRowRender>
            <div class='advice-tab-child-table-filter-wrapper'>
              <div class='advice-tab-child-table-search-with-filter'>
                <div style='width: 464px'>
                  <div class='ria-advice-tab-child-table-fr'>A#602 details</div>
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
                  <!-- <a-button class='ria-back-office-filter-btn'>Bulk Actions</a-button> -->
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
                :columns='fundRequestInnerColumnData'
                :data-source='fundRequestInnerData'
                :row-selection='innerTableRowSelection'
                :pagination='false'
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
        <div class='ria-advice-tab-view-more-btn'>
          <a-button class='ria-advice-tab-view-more-btn'>View more</a-button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
        <a-drawer
          v-model:visible='showClientProfile'
          :placement='right'
          :closable='false'
          width='850'
          destroyOnClose
          ><clientProfile @onCLickCrossIcon='onCLickCrossIcon'
        /></a-drawer>
      </div> -->
  <!-- </div> -->
</template>
<script>
// import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import {
  SearchOutlined,
  MoreOutlined,
  PlusOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    SearchOutlined,
    MoreOutlined,
    PlusOutlined,
  },

  setup() {
    const visible = ref(false);
    const hide = () => {
      visible.value = false;
    };
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    // const router = useRouter();
    const fundRequestColumnData = reactive([
      {
        title: 'Aging',
        dataIndex: 'aging',
        key: 'aging',
      },
      {
        title: 'Entry Price',
        dataIndex: 'entryPrice',
        key: 'entryPrice',
      },
      {
        title: 'Current Price',
        dataIndex: 'currentPrice',
        key: 'currentPrice',
      },
      {
        title: 'Company',
        dataIndex: 'mtm',
        key: 'mtm',
      },
      {
        title: '%Up/Down',
        dataIndex: 'upDown',
        key: 'upDown',
      },
      {
        title: '# Shares',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Invested Amount',
        dataIndex: 'title1',
        key: 'title1',
      },
      {
        title: 'Profit/Loss',
        dataIndex: 'title2',
        key: 'title2',
      },
      {
        title: 'Instrument Type',
        dataIndex: 'title3',
        key: 'title3',
      },
      {
        title: ' ',
        dataIndex: 'moreInfo',
        key: 'moreInfo',
        slots: { customRender: 'moreOptions' },
      },
    ]);
    const fundRequestData = [
      {
        key: '1',
        aging: '1st June 2019',
        entryPrice: '51.5',
        currentPrice: '59',
        mtm: 'NVIDIA',
        upDown: '+11%',
        title: '10',
        title1: '515',
        title2: '+75',
        title3: 'Equity',
      }, {
        key: '2',
        aging: '21st July 2020',
        entryPrice: '10',
        currentPrice: '12',
        mtm: 'Amazon',
        upDown: '+20%',
        title: '20',
        title1: '200',
        title2: '+40',
        title3: 'Equity',
      }, {
        key: '3',
        aging: '5th March 2021',
        entryPrice: '5',
        currentPrice: '7',
        mtm: 'Microsoft',
        upDown: '+8%',
        title: '5',
        title1: '25',
        title2: '+10',
        title3: 'Equity',
      }, {
        key: '4',
        aging: '1st December 2021',
        entryPrice: '25',
        currentPrice: '30',
        mtm: 'Apple',
        upDown: '+20%',
        title: '10',
        title1: '250',
        title2: '+50',
        title3: 'Equity',
      },
    ];
    const fundRequestInnerColumnData = [
      {
        title: 'A#',
        dataIndex: 'A',
        key: 'A',
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
        dataIndex: 'assetclass',
        key: 'assetclass',
      },
      {
        title: 'Qty',
        dataIndex: 'qty',
        key: 'qty',
      },
      {
        title: 'Limit or Market Type',
        dataIndex: 'lmt',
        key: 'lmt',
      },
      {
        title: 'Validity Criteria',
        dataIndex: 'validitycriteria',
        key: 'validitycriteria',
      },
      {
        title: 'Advisor',
        dataIndex: 'advisor',
        key: 'advisor',
      },
      {
        title: 'Level of Conviction',
        dataIndex: 'lc',
        key: 'lc',
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

    const fundRequestInnerData = [
      {
        key: 1,
        A: 602,
        name: 'Pawan Wagh',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'SMS',
        status: 'Aenean',
      },
      {
        key: 2,
        A: 602,
        name: 'Vatsal Shah',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'Whatsapp',
        status: 'Aenean',
      },
      {
        key: 3,
        A: 602,
        name: 'Pawan Wagh',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'Email',
        status: 'Aenean',
      },
      {
        key: 4,
        A: 602,
        name: 'Vatsal Shah',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'Whatsapp',
        status: 'Aenean',
      },
      {
        key: 5,
        A: 602,
        name: 'Pawan Wagh',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'Whatsapp',
        status: 'Aenean',
      },
      {
        key: 6,
        A: 602,
        name: 'Vatsal Shah',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'Email',
        status: 'Aenean',
      },
      {
        key: 7,
        A: 602,
        name: 'Pawan Wagh',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'Email',
        status: 'Aenean',
      },
      {
        key: 8,
        A: 602,
        name: 'Vatsal Shah',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'SMS',
        status: 'Aenean',
      },
      {
        key: 9,
        A: 602,
        name: 'Pawan Wagh',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'SMS',
        status: 'Aenean',
      },
      {
        key: 10,
        A: 602,
        name: 'Vatsal Shah',
        description: 'Vulputate eget...',
        assetclass: 'Pellentesque',
        qty: 500,
        lmt: 'Fusce',
        validitycriteria: 'Vestibulam',
        advisor: 'Praesent eu',
        lc: 'aenean',
        mode: 'SMS',
        status: 'Aenean',
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
    // const onClickFundRequest = () => {
    // router.push('/clients/fundRequest');
    // };
    return {
      fundRequestColumnData,
      fundRequestData,
      rowSelection,
      innerTableRowSelection,
      // onClickViewMore,
      childTableBulkAction,
      parentTableBulkAction,
      childTableOptions,
      parentTableOptions,
      fundRequestInnerColumnData,
      fundRequestInnerData,
      // customExpandIcon,
      // onClickFundRequest,
      visible,
      hide,
    };
  },
};
</script>
<style lang='scss'>
@import '../styles/riaAdviceTab.scss';
</style>
