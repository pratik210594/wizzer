<template>
  <div class="ria-fund-request-dashboard-main-wrapper">
    <div class="ria-fund-request-title">
      Fund Request
      <div class="ria-fund-request-btn">
        <a-button
          class="ria-fund-request-apply-btn"
          @click="onClickFundRequest"
        >
          Request Fund
        </a-button>
      </div>
    </div>

    <div class="ria-fund-request-widgets-wrapper">
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
    <div class="ria-fund-request-search-with-table">
      <div class="ria-fund-request-search-with-btn-wrapper">
        <div style="width: 464px">
          <a-input
            class="common-search"
            v-model:value="userName"
            placeholder="Search"
          >
            <template #prefix>
              <search-outlined />
            </template>
          </a-input>
        </div>
        <div style="margin-left: auto">
          <a-button class="ria-fund-request-filter-btn">Filters</a-button>
        </div>
        <div class="bulk-cation-select-input" style="margin-left: 15px">
          <!-- <a-button class='ria-back-office-filter-btn'>Bulk Actions</a-button> -->
          <a-select
            ref="select"
            v-model:value="parentTableBulkAction"
            style="width: 100%; height: 37px"
            :options="parentTableOptions"
            @focus="focus"
            @change="handleChange"
            placeholder="Bulk Actions"
          >
          </a-select>
        </div>
        <div class="ria-fund-request-more-content">
          <a-button class="fund-request-lorem-btn"> Lorem Ipsum </a-button>
        </div>
        <div style="margin-left: 25px">
          <more-outlined
            :style="{ fontSize: '20px', color: '#505050', cursor: 'pointer' }"
          />
        </div>
        <div style="margin-left: 15px">
          <plus-outlined
            :style="{ fontSize: '20px', color: '505050', cursor: 'pointer' }"
          />
        </div>
      </div>
      <div class="status-indicator-details">
        <div class="backoffice-color-code"></div>
        <div class="backoffice-margin-text">Back office margin updated</div>
        <div class="client-exchange-color-code"></div>
        <div class="client-exchange-margin-text">
          Client exchange margin updated
        </div>
      </div>
      <div class="ria-fund-request-table-wrapper">
        <div>
          <a-table
            :columns="fundRequestColumnData"
            :data-source="fundRequestData"
            :row-selection="rowSelection"
            :pagination="false"
            :rowKey="(record) => record.key"
             @expand="setFundRequestHeader"
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
            <template #date="{ text }">
              <span>{{ text.date }}</span>
            </template>
            <template #fundRequestStatusIndicator ="{ text }">
              <div class="backoffice-color-code"></div>
              <div v-if="text.status == 'BO MARGIN UPDATED'"
                    class="backoffice-color-code"></div>
                    <div v-if="text.status== 'EXCHANGE MARGIN UPDATED'"
                    class="client-exchange-color-code">
                    </div>
                    <div v-if="text.status== 'REQUEST SENT'">
                    </div>
            </template>
            <template #expandedRowRender>
              <div class="fund-request-child-table-filter-wrapper">
                <div class="fund-request-child-table-search-with-filter">
                  <div style="width: 464px">
                    <div class="fund-request-child-table-fr">
                      {{ fundRequestNumber }} Details
                    </div>
                  </div>
                  <div style="margin-left: auto">
                    <a-button class="fund-request-child-table-filter-btn"
                      >Filters</a-button
                    >
                  </div>
                  <div
                    class="fund-request-child-table-bulk-cation-select-input"
                    style="margin-left: 15px"
                  >
                    <!-- <a-button class='ria-back-office-filter-btn'>Bulk Actions</a-button> -->
                    <a-select
                      ref="select"
                      v-model:value="childTableBulkAction"
                      style="width: 100%; height: 37px"
                      :options="childTableOptions"
                      @focus="focus"
                      @change="handleChange"
                      placeholder="Bulk Actions"
                    >
                    </a-select>
                  </div>
                  <div class="fund-request-child-table-more-content">
                    <a-button class="fund-request-lorem-btn">
                      Lorem Ipsum
                    </a-button>
                  </div>
                  <div style="margin-left: 25px">
                    <more-outlined
                      :style="{
                        fontSize: '20px',
                        color: '#505050',
                        cursor: 'pointer',
                      }"
                    />
                  </div>
                  <div style="margin-left: 15px">
                    <plus-outlined
                      :style="{
                        fontSize: '20px',
                        color: '505050',
                        cursor: 'pointer',
                      }"
                    />
                  </div>
                </div>
                <div class="child-table-status-indicator-details">
                  <div class="completed-color-code"></div>
                  <div class="completed-margin-text">Completed</div>
                  <div class="partially-completed-color-code"></div>
                  <div class="partially-completed-margin-text">
                    Partially Completed
                  </div>
                  <div class="incompleted-color-code"></div>
                  <div class="incompleted-margin-text">Incompleted</div>
                </div>
                <a-table
                  :columns="fundRequestInnerColumnData"
                  :data-source="fundListDataDemo"
                  :row-selection="innerTableRowSelection"
                  :pagination="false"
                  :rowKey="(record) => record.key"
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
                  <template #clientName="{ text }">
                    <span>{{ text.clientName }}</span>
                  </template>
                  <template #innerStatus="{ text }">
                    <div class="completed-color-code-data"></div>
                    <div v-if="text.status== 'COMPLETED'" class="completed-color-code-data"></div>
                    <div v-if="text.status== 'PARTIALLY_COMPLETED'"
                    class="partially-completed-color-code-data">
                    </div>
                    <div v-if="text.status== 'INCOMPLETED'" class="incompleted-color-code-data">
                    </div>
                  </template>
                </a-table>
              </div>
            </template>
          </a-table>
          <div  v-if="showViewMore" class="ria-fund-request-view-more-btn">
            <a-button  @click="onClickViewMore" style="margin:0px"
               class="ria-fund-request-view-more-btn"
              >View more</a-button
            >
          </div>
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
import { useRouter } from 'vue-router';
import areaChart from '../../common/components/areaChart.vue';
import columnChart from '../../common/components/columnChart.vue';
// import { useStore } from 'vuex';
import services from '../../../services/api';
import Utils from '../../../utils';

export default {
  components: {
    SearchOutlined,
    MoreOutlined,
    PlusOutlined,
    areaChart,
    columnChart,
  },

  setup() {
    const router = useRouter();
    const pageCount = 1;
    const fundRequestNumber = ref('');
    const fundListData = reactive([]);
    const clientListFundData = reactive([]);
    const staticData = reactive([]);
    const showViewMore = ref(true);
    const fundsListing = async () => {
      const emptyArray = [];
      const payload = {
        q: '',
        pageNo: pageCount,
      };
      await services
        .fundsListing(payload)
        .then((response) => {
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              date: {
                date: x.date
                  ? Utils.dispalyDateMonthYear(x.date)
                  : '-',
                id: x.id,
              },
              FRId: x.fundId ? x.fundId : '-',
              amount: x.amount ? x.amount : 0,
              description: x.description ? x.description : '-',
              status: {
                status: x.status ? x.status : '-',
              },
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(staticData, emptyArray);
      Object.assign(fundListData, emptyArray.slice(0, 10));
    };
    const onClickViewMore = () => {
      Object.assign(fundListData, staticData);
      showViewMore.value = false;
    };
    const clientsLinkedToFundRequest = async (rowKey) => {
      const emptyArray = [];
      const payload = {
        q: '',
        pageNo: 1,
        fundId: rowKey.FRId,
      };
      console.log('on click', payload.fundId);
      await services
        .clientsLinkedToFundRequest(payload)
        .then((response) => {
          console.log('fundid', payload.fundId);
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              id: x.id,
              clientName: {
                clientName: x.name ? x.name : '-',
                id: x.clientId,
              },
              FRId: payload.fundId,
              lorem: 'lorem',
              loremIpsum: 'lorem',
              ipsum: 'lorem',
              amet: '-',
              amet1: '-',
              status: {
                status: x.status ? x.status : '-',
              },
              dolarSit: '-',
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(clientListFundData, emptyArray);
    };
    const fundRequestData = [{
      key: '1',
      date: '21st July 2019',
      FRId: 'A121',
      amount: '5000',
      description: 'For setting up new asset',
      status: '+11%',
    }, {
      key: '2',
      date: '12th May 2020',
      FRId: 'B875',
      amount: '7000',
      description: 'For setting up new asset',
      status: '+11%',
    }, {
      key: '3',
      date: '20th April 2020',
      FRId: 'C999',
      amount: '15000',
      description: 'For setting up new asset',
      status: '+11%',
    }, {
      key: '4',
      date: '15th June 2021',
      FRId: 'D432',
      amount: '3000',
      description: 'For setting up new asset',
      status: '+11%',
    },
    {
      key: '5',
      date: '10th September 2021',
      FRId: 'D500',
      amount: '6500',
      description: 'For setting up new asset',
      status: '+11%',
    },
    {
      key: '6',
      date: '30th October 2021',
      FRId: 'E321',
      amount: '9000',
      description: 'For setting up new asset',
      status: '+11%',
    },
    {
      key: '7',
      date: '22nd November 2022',
      FRId: 'J987',
      amount: '5500',
      description: 'For setting up new asset',
      status: '+11%',
    },
    ];
    onMounted(() => {
      window.scrollTo(0, 0);
      fundsListing();
    });
    const setFundRequestHeader = (expanded, rowKey) => {
      fundRequestNumber.value = rowKey.FRId;
      // console.log(expanded);
      if (expanded === true) { clientsLinkedToFundRequest(rowKey); }
    };
    const fundRequestColumnData = reactive([
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        // slots: { customRender: 'date' },
      },
      {
        title: 'FR#',
        dataIndex: 'FRId',
        key: 'FRId',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        slots: { customRender: 'fundRequestStatusIndicator' },
      },
      {
        title: '',
        dataIndex: 'moreOptions',
        key: 'moreOptions',
        slots: { customRender: 'moreOptions' },
      },
    ]);
    const fundRequestInnerColumnData = [
      {
        title: 'Client Name',
        dataIndex: 'clientName',
        key: 'clientName',
      },
      {
        title: 'FR#',
        dataIndex: 'FRId',
        key: 'FRId',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        slots: { customRender: 'innerStatus' },
      },
    ];
    const fundListDataDemo = [
      {
        key: '1',
        clientName: 'Adrian',
        FRId: 'A87854',
        status: 'aaa',
      },
      {
        key: '2',
        clientName: 'Matt',
        FRId: 'M752215',
        status: 'aaa',
      },
      {
        key: '3',
        clientName: 'Cindy',
        FRId: 'C763115',
        status: 'aaa',
      },
      {
        key: '4',
        clientName: 'Allen',
        FRId: 'A22222',
        status: 'aaa',
      },
      {
        key: '5',
        clientName: 'Zack',
        FRId: 'Z111258',
        status: 'aaa',
      },
      {
        key: '6',
        clientName: 'Ross',
        FRId: 'R236890',
        status: 'aaa',
      },
      {
        key: '7',
        clientName: 'Melissa',
        FRId: 'M102938',
        status: 'aaa',
      },
    ];
    const childTableBulkAction = ref(undefined);
    const parentTableBulkAction = ref(undefined);
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
    const onClickFundRequest = () => {
      router.push('/clients/fundRequest');
    };

    return {
      fundRequestColumnData,
      rowSelection,
      innerTableRowSelection,
      childTableBulkAction,
      parentTableBulkAction,
      fundRequestInnerColumnData,
      onClickFundRequest,
      fundListData,
      fundListDataDemo,
      clientListFundData,
      clientsLinkedToFundRequest,
      fundRequestNumber,
      setFundRequestHeader,
      staticData,
      onClickViewMore,
      showViewMore,
      fundRequestData,
    };
  },
};
</script>

<style lang='scss'>
@import "../styles/fundRequestDashboard.scss";
</style>
