<template>
    <div class='client-listing-search-with-table'>
      <div class='client-listing-search-with-btn-wrapper'>
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
          <a-button class='client-listing-filter-btn'>Filters</a-button>
        </div>
        <div class='bulk-cation-select-input' style='margin-left: 15px'>
          <!-- <a-button class='client-listing-filter-btn'>Bulk Actions</a-button> -->
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
        <div class='client-listing-more-content'>
          <a-button class='client-listing-lorem-btn'>
          Lorem Ipsum</a-button></div>
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
      <div class='client-listing-table-wrapper'>
        <div>
          <a-table
            :columns='clientListingColumnData'
            :data-source='clientDataDemo'
            :row-selection='rowSelection'
            :pagination='false'
            :locale="locale"
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
          </a-table>
          <div v-if="showViewMore" class='ria-backoffice-table-view-more-btn'>
            <a-button  @click="onClickViewMore"
            class='client-listing-view-more-btn'>View more</a-button>
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
// import { useRouter } from 'vue-router';
import services from '../../../services/api';
import Utils from '../../../utils';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
  },

  setup() {
    const pageCount = 1;
    const clientData = reactive([]);
    const staticData = reactive([]);
    const showViewMore = ref(true);
    const fetchClientListing = async () => {
      const emptyArray = [];
      const payload = {
        pageNo: pageCount,
      };
      await services
        .fetchClientListing(payload)
        .then((response) => {
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              id: x.id,
              creatingDate: x.createdAt
                ? Utils.dispalyDateMonthYear(x.createdAt)
                : '-',

              clientName: x.name ? x.name : '-',
              lorem: 'Donec',
              loremIpsum: 'Nullam',
              ipsum: 'Pellentesque',
              dolarSit: 'Fusce',
              ipsum1: 'Vestibulum',
              amet: 'Praesent eu',
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(staticData, emptyArray);
      Object.assign(clientData, emptyArray.slice(0, 10));
    };
    const clientDataDemo = [{
      key: '1',
      creatingDate: '1st December',
      clientName: 'Brown',
      lorem: '5',
      loremIpsum: 'QuestTrade',
      ipsum: 'Fredericton',
      dolarSit: ['nice', 'developer'],
      ipsum1: '123',
      amet: 'fff',
    }, {
      key: '2',
      creatingDate: '21st September',
      clientName: 'Aron',
      lorem: '11',
      loremIpsum: 'TD Direct Investing',
      ipsum: 'Moncton',
      dolarSit: ['nice', 'developer'],
      ipsum1: '123',
      amet: 'fff',
    }, {
      key: '3',
      creatingDate: '2nd June',
      clientName: 'Adrian',
      lorem: '2',
      loremIpsum: 'CIBC',
      ipsum: 'Oromocto',
      dolarSit: ['nice', 'developer'],
      ipsum1: '123',
      amet: 'fff',
    }, {
      key: '4',
      creatingDate: '5th Febrauary',
      clientName: 'Albert',
      lorem: '7',
      loremIpsum: 'WealthSimple',
      ipsum: 'Saint John',
      dolarSit: ['nice', 'developer'],
      ipsum1: '123',
      amet: 'fff',
    }];
    const onClickViewMore = () => {
      Object.assign(clientData, staticData);
      showViewMore.value = false;
    };
    const locale = {
      emptyText: (
    <span class="client-group-listing-no-data-text">
    No Clients have been added yet. <u onClick={() => {
      // router.push('/clients/fundRequest');
    }}
     class="client-group-click-here-link">Click Here</u> to Add a New Client
    </span>
      ),
    };
    let selectedRowKey = ref([]);
    const searchValue = ref('');
    const clientListingColumnData = ref([
      {
        title: 'Creating Date',
        dataIndex: 'creatingDate',
        key: 'creatingDate',
      },
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
        title: 'Address',
        key: 'ipsum',
        dataIndex: 'ipsum',
      },
      {
        title: 'Total Capital',
        key: 'dolarSit',
        dataIndex: 'dolarSit',
      },
      {
        title: 'Available Capital',
        key: 'ipsum1',
        dataIndex: 'ipsum1',
      },
      {
        title: 'Risk%',
        key: 'amet',
        dataIndex: 'amet',
      },
      {
        title: '',
        dataIndex: 'moreOptions',
        key: 'moreOptions',
        slots: { customRender: 'moreOptions' },
      },

    ]);
    const onSelectChange = (selectedRowKeys) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      selectedRowKey = selectedRowKeys;
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchClientListing();
    });
    return {
      selectedRowKey,
      searchValue,
      clientListingColumnData,
      onSelectChange,
      rowSelection,
      locale,
      clientData,
      clientDataDemo,
      staticData,
      onClickViewMore,
      showViewMore,
    };
  },
};
</script>
<style lang="scss">
@import "../styles/clientTab.scss";
</style>
