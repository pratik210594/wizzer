<template>
  <div class='ria-advice-order-tab-search-with-table'>
    <div class='ria-advice-order-tab-search-with-btn-wrapper'>
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
        <a-button class='ria-advice-order-tab-filter-btn'>Filters</a-button>
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
      <div class='ria-advice-order-tab-more-content'>
        <a-button class='advice-order-tab-lorem-btn'> Lorem Ipsum </a-button>
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
    <div class='ria-advice-order-tab-table-wrapper'>
      <div>
        <a-table
          :columns='adviceOrderColumnData'
          :data-source='adviceOrderData'
          :row-selection='rowSelection'
          :pagination='false'
          :expandIcon='customExpandIcon'
        >
          <template #statusIndicator>
            <div class='table-color-code'></div>
          </template>
          <template #expandedRowRender>
            <div class='advice-order-tab-child-table-filter-wrapper'>
              <div class='advice-order-tab-child-table-search-with-filter'>
                <div style='width: 464px'>
                  <div class='ria-advice-order-tab-child-table-fr'>A#602 details</div>
                </div>
                <div style='margin-left: auto'>
                  <a-button class='advice-order-tab-child-table-filter-btn'
                    >Filters</a-button
                  >
                </div>
                <div
                  class='advice-order-tab-child-table-bulk-cation-select-input'
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
                <div class='advice-order-tab-child-table-more-content'>
                  <a-button class='advice-order-tab-lorem-btn'>
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
                :columns='adviceOrderInnerColumnData'
                :data-source='adviceOrderInnerData'
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
        <div v-if="showViewMore"
        class='ria-advice-order-tab-view-more-btn'>
          <a-button @click="onClickViewMore" style="margin:0px"
          class='ria-advice-order-view-more-btn'>View more</a-button>
        </div>
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

export default {
  components: {
    SearchOutlined,
    MoreOutlined,
    PlusOutlined,
  },

  setup() {
    const showViewMore = ref(true);
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    const onClickViewMore = () => {
      // Object.assign(adviceListData, staticData);
      showViewMore.value = false;
    };
    // const router = useRouter();
    const adviceOrderColumnData = reactive([
      {
        title: '#A',
        dataIndex: 'A',
        key: 'A',
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
    const adviceOrderData = [
      {
        key: 1,
        A: 489,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 2,
        A: 502,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 3,
        A: 602,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 4,
        A: 332,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 5,
        A: 331,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 6,
        A: 402,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 7,
        A: 302,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 8,
        A: 401,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 9,
        A: 154,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
      {
        key: 10,
        A: 589,
        title1: 'Suspendisse ut',
        title2: 'Donec',
        title3: 'Nulam',
        title4: 'Pallentesque',
        title5: 'Fusce',
        title6: 'Vestibulam',
        title7: 'Praesent eu',
        title8: 'Aenean',
        status: 'Pellentesque',
      },
    ];
    const adviceOrderInnerColumnData = [
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

    const adviceOrderInnerData = [
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
    return {
      adviceOrderColumnData,
      adviceOrderData,
      rowSelection,
      innerTableRowSelection,
      childTableBulkAction,
      parentTableBulkAction,
      childTableOptions,
      parentTableOptions,
      adviceOrderInnerColumnData,
      adviceOrderInnerData,
      showViewMore,
      onClickViewMore,
    };
  },
};
</script>
<style lang='scss'>
@import '../styles/riaAdviceOrderTab.scss';
</style>
