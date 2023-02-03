<template>
    <div class='dp-holding-search-with-table'>
      <div class='dp-holding-table-wrapper'>
        <div>
          <a-table
            :columns='clientListingColumnData'
            :data-source='clientListingData'
            :row-selection='rowSelection'
            :pagination='false'
            :locale="locale"
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
          <div class='ria-backoffice-table-view-more-btn'>
            <a-button class='dp-holding-view-more-btn'>View more</a-button>
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
    </div>
</template>

<script>
import { ref } from 'vue';
import {
  MoreOutlined,
} from '@ant-design/icons-vue';
// import { useRouter } from 'vue-router';

const clientListingData = [];
for (let i = 0; i < 10; i += 1) {
  clientListingData.push({
    key: i,
    creatingDate: '02th Jul 2022',
    groupName: 'Sodales in',
    lorem: 'Donec',
    loremIpsum: 'Nullam',
    ipsum: 'Pellentesque',
    dolarSit: 'Fusce',
    ipsum1: 'Vestibulum',
    amet: 'Praesent eu',
  });
}
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
    MoreOutlined,
  },

  setup() {
    // const router = useRouter();
    const locale = {
      emptyText: (
    <span class="dp-holding-listing-no-data-text">
    No Clients have been added yet. <u onClick={() => {
      // router.push('/clients/fundRequest');
    }}
     class="dp-holding-click-here-link">Click Here</u> to Add a New Client
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
        title: 'Group Name',
        dataIndex: 'groupName',
        key: 'groupName',
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
      clientListingData,
      searchValue,
      clientListingColumnData,
      onSelectChange,
      rowSelection,
      locale,
    };
  },
};
</script>
<style lang="scss">
@import "../styles/dpHoldingTab.scss";
</style>
