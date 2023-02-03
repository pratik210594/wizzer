<template>
  <div class="client-listing-search-with-table">
    <div class="client-listing-search-with-btn-wrapper">
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
        <a-button class="client-listing-filter-btn">Filters</a-button>
      </div>
      <div class="bulk-cation-select-input" style="margin-left: 15px">
        <!-- <a-button class='client-listing-filter-btn'>Bulk Actions</a-button> -->
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
      <div class="client-listing-more-content">
        <a-button class="client-listing-lorem-btn"> Lorem Ipsum</a-button>
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
    <div class="client-listing-table-wrapper">
      <div>
        <a-table
          :columns="clientGroupListingColumnData"
          :data-source="clientGroupData"
          :row-selection="rowSelection"
          :pagination="false"
          :locale="locale"
          :filterConfirm="OK"
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
          <!-- <template #groupName>
            <span @click='onClickClientName' style="cursor: pointer">abc</span>
          </template> -->
        </a-table>
        <div v-if="showViewMore" class="ria-backoffice-table-view-more-btn">
          <a-button
            @click="onClickViewMore"
            class="client-listing-view-more-btn"
            >View more</a-button
          >
        </div>
      </div>
    </div>
    <div></div>
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
// import adviceNumberDrawer from './adviceNumberDrawer.vue';

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
  },

  setup() {
    // const router = useRouter();
    const pageCount = 1;
    const clientGroupData = reactive([]);
    const searchValue = ref('');
    const staticData = reactive([]);
    const showViewMore = ref(true);
    let selectedRowKey = ref([]);
    const locale = {
      emptyText: (
        <span class="client-group-listing-no-data-text">
          No Client groups have been added yet.{' '}
          <u
            onClick={() => {
              // router.push('/clients/fundRequest');
            }}
            class="client-group-click-here-link"
          >
            Click Here
          </u>{' '}
          to Add a New Client Group
        </span>
      ),
    };
    const fetchClientGroups = async () => {
      const emptyArray = [];
      const payload = {
        q: '',
        pageNo: pageCount,
      };
      await services
        .fetchClientGroups(payload)
        .then((response) => {
          const { data } = response;
          data.map((x) => {
            emptyArray.push({
              id: x.id,
              creatingDate: x.createdAt
                ? Utils.dispalyDateMonthYear(x.createdAt)
                : '-',

              groupName: x.name ? x.name : '-',
              lorem: 'Donec',
              loremIpsum: 'Nullam',
              ipsum: 'Pellentesque',
              dolarSit: 'Fusce',
              ipsum1: 'Vestibulum',
              amet: 'Praesent eu',
              amet1: 'Aenean',
              estibulum: 'Bandit bibendum',
            });
            return emptyArray;
          });
        })
        .catch(() => {});
      Object.assign(staticData, emptyArray);
      Object.assign(clientGroupData, emptyArray.slice(0, 10));
    };
    const onClickViewMore = () => {
      Object.assign(clientGroupData, staticData);
      showViewMore.value = false;
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchClientGroups();
    });
    const clientGroupListingColumnData = ref([
      {
        title: 'Creating Date',
        dataIndex: 'creatingDate',
        key: 'creatingDate',
      },
      {
        title: 'Group Name',
        dataIndex: 'groupName',
        key: 'groupName',
        // slots: { customRender: 'groupName' },
      },
      {
        title: 'Lorem',
        dataIndex: 'lorem',
        key: 'lorem',
      },
      {
        title: 'Lorem Ipsum',
        key: 'loremIpsum',
        dataIndex: 'loremIpsum',
      },
      {
        title: 'Ipsum',
        key: 'ipsum',
        dataIndex: 'ipsum',
      },
      {
        title: 'Dolor Sit',
        key: 'dolarSit',
        dataIndex: 'dolarSit',
      },
      {
        title: 'Ipsum',
        key: 'ipsum1',
        dataIndex: 'ipsum1',
      },
      {
        title: 'Amet',
        key: 'amet',
        dataIndex: 'amet',
      },
      {
        title: 'Amet',
        key: 'amet1',
        dataIndex: 'amet1',
      },
      {
        title: 'Estibulum',
        key: 'estibulum',
        dataIndex: 'estibulum',
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

    return {
      selectedRowKey,
      searchValue,
      clientGroupListingColumnData,
      onSelectChange,
      rowSelection,
      locale,
      clientGroupData,
      staticData,
      onClickViewMore,
      showViewMore,
    };
  },
};
</script>
<style lang="scss">
@import "../styles/clientGroupTab.scss";
</style>
