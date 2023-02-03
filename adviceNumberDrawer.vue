 <template>
  <div class="advice-number-container">
    <div class="advice-number-header">
      <div class="advice-number-text">Advice #602</div>
      <div class="drawer-close-icon">
        <close-outlined
          :style="{ fontSize: '25px', color: '#505050', cursor: 'pointer' }"
          @click="onCLickCrossIcon"
        />
      </div>
    </div>
    <div class="current-advice-status">
      <a-alert
        message="Current status of the advice."
        type="warning"
        show-icon
      />
    </div>
    <div class="chain-advice-section">
      <h3 class="chain-advice-title">Chain of advice</h3>
      <div class="chain-advice-content">
        <div class="chain-advice-icon">
          <align-right-outlined style="margin-left: 6px" />
        </div>
        <div class="chain-advice-text">#12384</div>
      </div>
      <div class="chain-advice-content">
        <div class="chain-advice-icon">
          <align-right-outlined style="margin-left: 6px" />
        </div>
        <div class="chain-advice-text">#12384</div>
      </div>
      <div class="chain-advice-content">
        <div class="chain-advice-icon">
          <align-right-outlined style="margin-left: 6px" />
        </div>
        <div class="chain-advice-text">#12384</div>
      </div>
    </div>
    <h3 class="advice-number-transactions-title">Transactions</h3>
    <div class="listing-tabs">
      <div class="advice-drawer-table-wrapper">
        <a-table
          :columns="adviceNumberDrawerColumnData"
          :data-source="adviceNumberDrawerData"
          :row-selection="rowSelection"
          :pagination="false"
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
            <div class="advice-number-drawer-child-table-filter-wrapper">
              <a-table
                :columns="adviceNumberDrawerInnerColumnData"
                :data-source="adviceNumberDrawerInnerData"
                :row-selection="innerTableRowSelection"
                :pagination="false"
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
            </div>
          </template>
        </a-table>
        <div class="advice-drawer-view-more-btn">
          <a-button class="advice-drawer-view-more-btn" style="margin: 0px 0px 0px 0px">
          View more</a-button>
        </div>
      </div>
    </div>
    <h3 class="advice-number-backoffice-transactions-title">
      Backoffice Transactions
    </h3>
    <backOfficeTransactionList />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  CloseOutlined,
  AlignRightOutlined,
  MoreOutlined,
} from '@ant-design/icons-vue';
// import clientTab from './clientTab.vue';
import backOfficeTransactionList from './backOfficeTransactionList.vue';

export default {
  components: {
    // clientTab,
    backOfficeTransactionList,
    // clientGroupTab,
    AlignRightOutlined,
    CloseOutlined,
    MoreOutlined,
  },

  setup(props, context) {
    const router = useRouter();
    const inviteClient = () => {
      router.push('/clients/create-client');
    };
    const onCLickCrossIcon = () => {
      context.emit('onCLickCrossIcon', false);
    };
    const adviceNumberDrawerColumnData = ref([
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
        dataIndex: 'qty',
        key: 'qty',
      },
      {
        title: 'Limit or Market Type',
        dataIndex: 'limitMarketType',
        key: 'limitMarketType',
      },
      {
        title: 'Validity Criteria',
        dataIndex: 'validCriteria',
        key: 'validCriteria',
      },
      {
        title: 'Advisor',
        dataIndex: 'advisor',
        key: 'advisor',
      },
      {
        title: 'Level of Conviction',
        dataIndex: 'levelOfConviction',
        key: 'levelOfConviction',
      },
      {
        title: 'Mode',
        dataIndex: 'mode',
        key: 'mode',
      },

      {
        title: '',
        dataIndex: 'moreOptions',
        key: 'moreOptions',
        slots: { customRender: 'moreOptions' },
      },
    ]);
    const adviceNumberDrawerData = [
      {
        key: 1,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 2,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 3,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 4,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 5,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 6,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 7,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 8,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 9,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
      {
        key: 10,
        name: 'Pawan Wagh',
        description: 'Lorem sit amet...',
        assetClass: 'Ipsum',
        qty: '100',
        limitMarketType: 'Dolor',
        validCriteria: 'Sit',
        advisor: 'Amet Sit',
        levelOfConviction: 'Amet Sit',
        mode: 'Email',
      },
    ];
    const adviceNumberDrawerInnerColumnData = [
      {
        title: 'Lorem',
        dataIndex: 'clientName',
        key: 'clientName',
      },
      {
        title: 'Vestibu',
        dataIndex: 'FRNum',
        key: 'FRNum',
      },
      {
        title: 'Maece',
        dataIndex: 'lorem',
        key: 'lorem',
      },
      {
        title: 'Sit',
        dataIndex: 'loremIpsum',
        key: 'loremIpsum',
      },
      {
        title: 'Vivam',
        dataIndex: 'ipsum',
        key: 'ipsum',
      },
      {
        title: 'Sugue',
        dataIndex: 'dolarSit',
        key: 'dolarSit',
      },
      {
        title: 'Nullam',
        dataIndex: 'ipsum',
        key: 'ipsum',
      },
      {
        title: 'Cras non',
        dataIndex: 'amet',
        key: 'amet',
      },
      {
        title: 'Suspen',
        dataIndex: 'amet1',
        key: 'amet',
      },
      {
        title: '',
        dataIndex: 'moreOptions',
        key: 'moreOptions',
        slots: { customRender: 'moreOptions' },
      },
    ];

    const adviceNumberDrawerInnerData = [
      {
        key: 1,
        clientName: 'Pawan Wagh',
        FRNum: 502,
        lorem: 'Donec',
        loremIpsum: 'Nullam',
        ipsum: 'Pellentesque',
        dolarSit: 'Fusce',
        amet: 'Vestibulam',
        amet1: 'Praesent',
        status: 'Aenean',
      },
      {
        key: 2,
        clientName: 'Vatsal Shah',
        FRNum: 502,
        lorem: 'Donec',
        loremIpsum: 'Nullam',
        ipsum: 'Pellentesque',
        dolarSit: 'Fusce',
        amet: 'Vestibulam',
        amet1: 'Praesent',
        status: 'Aenean',
      },
    ];
    return {
      activeKey: ref('1'),
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      inviteClient,
      onCLickCrossIcon,
      adviceNumberDrawerColumnData,
      adviceNumberDrawerData,
      adviceNumberDrawerInnerColumnData,
      adviceNumberDrawerInnerData,
    };
  },
};
</script>
<style lang='scss'>
@import "../styles/adviceNumberDrawer.scss";
</style>
