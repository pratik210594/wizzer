<template>
  <div class="portfolio-container">
    <div class="portfolio-details" style="width: 80%">
      <span style="font-size: 16px; font-weight: 600; margin-top: 12px">
        Porfolio Details
      </span>
      <span style="font-size: 16px; padding-left: 3.9rem; color: #828282">
        Total Invested:
        <span style="font-size: 26px; font-weight: 600">  &#x24;
        7,000</span>
      </span>
      <span style="font-size: 16px; padding-left: 2.5rem; color: #828282">
        Current Value:
        <span style="font-size: 26px; font-weight: 600">
          &#x24; 9,000
        </span>
      </span>
      <div style="display: flex; margin-top: 5px">
        <a-button class="search-btns" style="left: 4.1rem"
          >Lorem Ipsum</a-button
        >
        <a-button class="search-btns" style="left: 5rem">
          <template #icon>
            <more-outlined />
          </template>
        </a-button>
      </div>
    </div>
    <div class="portfolio-details" style="width: 80%; margin-bottom: 15px">
      <a-button
        type="primary"
        shape="round"
         class="asset-button"
        style="
          width: 150px;
          left: 1rem;
          color: white;
          background-color: #5c4e7a;
          border: 0.5px solid #828282;
        "
      >
        Asset Class Filter
      </a-button>
      <a-button
        type="primary"
        shape="round"
        class="asset-button"
      >
        Asset Class Filter
      </a-button>
      <a-button
        type="primary"
        shape="round"
        class="asset-button"
      >
        Asset Class Filter
      </a-button>
      <a-button
        type="primary"
        shape="round"
        class="asset-button"
      >
        Asset Class Filter
      </a-button>
      <a-button
        type="primary"
        shape="round"
        class="asset-button"
      >
        Asset Class Filter
      </a-button>
    </div>
    <div class="treemap-main-wrapper">
        <div class="component1">
          <div v-for="value in ['Equity','Commodity','Forex','Bonds','Futures and Option',
          'Real Estate']"
          :key="value.id" style="width:31%;margin: 0px 10px 20px 0px;">
          <div class="equity">
            <span class="segment-text"> {{ value }}</span>
            <span class="segment-figure">
              &#x24; 1500
            </span>
          </div>
          <div class="portfolio-bar-equity">
            <tree />
          </div>
          </div>
        </div>
    </div>
    <div class="search-btn-table-wrapper">
      <div class="ria-portfolio-search-with-btn-wrapper">
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
          <a-button class="ria-portfolio-filter-btn">Filters</a-button>
        </div>
        <div class="bulk-cation-select-input" style="margin-left: 15px">
          <a-select
            ref="select"
            v-model:value="bulkAction"
            style="width: 100%; height: 37px"
            :options="options"
            @focus="focus"
            @change="handleChange"
            placeholder="Bulk Actions"
          >
          </a-select>
        </div>
        <div class="ria-portfolio-more-content">
          <a-button class="ria-portfolio-lorem-btn"> Lorem Ipsum</a-button>
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
      <div class="table-section">
        <a-table
          :pagination="false"
          :columns="columns"
          :data-source="portfolioDataDemo"
          :row-selection="rowSelection"
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

          <template #expandedRowRender>
            <a-table
              :columns="innerColumns"
              :data-source="clientDataDemo"
              :pagination="false"
            >
              <template #headerCell="{ column }">
                <template v-if="column.key === 'title'">
                  <span> Title </span>
                </template>
              </template>
              <template #bodyCell="{ column }">
                <template v-if="column.key === 'ellipsis'">
                  <span>
                    <more-outlined />
                  </span>
                </template>
              </template>
            </a-table>
          </template>
        </a-table>
        <div  v-if="showViewMore" class="ria-portfolio-table-view-more-btn">
          <a-button @click="onClickViewMore"
          class="client-listing-view-more-btn">View more</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import {
  PlusOutlined,
  MoreOutlined,
  SearchOutlined,
} from '@ant-design/icons-vue';
import tree from './treeMapChart.vue';
import services from '../../../services/api';
import Utils from '../../../utils';

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

export default {
  components: {
    PlusOutlined,
    MoreOutlined,
    SearchOutlined,
    tree,
  },

  setup() {
    const pageCount = 1;
    let selectedRowKey = ref([]);
    const portfolioData = reactive([]);
    const staticData = reactive([]);
    const showViewMore = ref(true);
    const searchValue = ref('');
    const visible = ref(false);
    const widgetVisible = ref(false);
    const bulkAction = ref(undefined);
    const fetchRIAPortfolio = async () => {
      const emptyArray = [];
      const payload = {
        q: '',
        pageNo: pageCount,
      };
      await services
        .fetchRIAPortfolio(payload)
        .then((response) => {
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              id: x.id,
              aging: x.aging ? x.aging : 0,
              entryPrice: x.entryPrice ? x.entryPrice : 0,
              currentPrice: x.currentPrice ? x.currentPrice : 0,
              mtm: x.mtm ? x.mtm : 0,
              upDown: x.upDown ? x.upDown : 0,
              title: 'Vestibulum',
              title1: 'Praesent eu',
              title2: 'Praesent eu',
              title3: 'Praesent eu',
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(staticData, emptyArray);
      Object.assign(portfolioData, emptyArray.slice(0, 10));
    };
    const portfolioDataDemo = [{
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
    }];
    const onClickViewMore = () => {
      Object.assign(portfolioData, staticData);
      showViewMore.value = false;
    };
    const portfolioWidgetData = reactive({});
    const fetchRIAPortfolioStatisticsWidgets = async () => {
      const payload = {
        assetsClasses: ['abc'],
        pageNo: pageCount,
      };

      const { data } = await services.fetchRIAPortfolioStatisticsWidgets(payload);
      const assetClasses = data.assetClasses.map((assetClass) => {
        const assets = {
          name: assetClass.name,
          totalInvested: assetClass.totalInvested,
          distributions: assetClass.distribution.map((distribution) => ({
            name: distribution.name,
            value: distribution.totalInvested,
          })),
        };
        return assets;
      });

      Object.assign(portfolioWidgetData, {
        assetClasses,
        totalInvested: data.totalInvested,
        currentValue: data.currentValue,
      });
      portfolioWidgetData.totalInvested = Utils
        .currencyFormat(portfolioWidgetData.totalInvested);
      portfolioWidgetData.currentValue = Utils.currencyFormat(portfolioWidgetData.currentValue);
      widgetVisible.value = true;
    };
    const columns = ref([
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
    const innerColumns = [
      {
        title: 'Name',
        dataIndex: 'clientName',
        key: 'clientName',
      },
      {
        title: '# Open Trades',
        dataIndex: 'lorem',
        key: 'lorem',
      },
      {
        title: 'Broker',
        key: 'loremIpsum',
        dataIndex: 'loremIpsum',
      },
      {
        title: 'Risk%',
        key: 'amet',
        dataIndex: 'amet',
      }];
    const clientDataDemo = [{
      key: '1',
      clientName: 'Brown',
      lorem: '5',
      loremIpsum: 'QuestTrade',
      ipsum: 'Fredericton',
      dolarSit: ['nice', 'developer'],
      ipsum1: '123',
      amet: '3%',
    }, {
      key: '2',
      creatingDate: '21st September',
      clientName: 'Aron',
      lorem: '11',
      loremIpsum: 'TD Direct Investing',
      ipsum: 'Moncton',
      dolarSit: ['nice', 'developer'],
      ipsum1: '123',
      amet: '1%',
    }];
    const innerData = [];

    const onSelectChange = (selectedRowKeys) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      selectedRowKey = selectedRowKeys;
    };
    const showModal = () => {
      visible.value = true;
    };
    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchRIAPortfolio();
      fetchRIAPortfolioStatisticsWidgets();
    });

    return {
      selectedRowKey,
      innerData,
      searchValue,
      columns,
      showModal,
      onSelectChange,
      innerColumns,
      visible,
      handleOk,
      rowSelection,
      portfolioData,
      portfolioWidgetData,
      widgetVisible,
      bulkAction,
      staticData,
      onClickViewMore,
      showViewMore,
      portfolioDataDemo,
      clientDataDemo,
    };
  },
};
</script>
<style lang="scss">
@import "../styles/riaPortfolio.scss";
</style>
