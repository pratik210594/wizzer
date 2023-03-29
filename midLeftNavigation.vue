 <template>
  <div class="mid-left-main-wrapper">
    <div class="logo-with-name-main-wrapper">
      <div>
        <a-avatar class="icon-text" :size="40"> R </a-avatar>
      </div>
      <div>
        <span class="logo-text"> Roshesh Rao </span
        ><down-outlined
          :style="{ fontSize: '12px', color: '#505050', cursor: 'pointer' }"
        />
        <div class="mid-navigation-profile-additional-text">A-58712</div>
      </div>
    </div>
    <div class="nav-panel-details-text">{{ headerTitle }}</div>
    <div class="midLeft-navigation-main-wrapper">
      <a-menu
        v-model:selectedKeys="dashboardSelectedKey"
        theme="light"
        mode="inline"
        @click="onChangeDashboardMenu"
        v-if="leftNavigationTitle == 'DASHBOARD'"
      >
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            dashboardSelectedKey == 'clientListing'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="clientListing" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            dashboardSelectedKey == 'riaPortfolio'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaPortfolio" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            dashboardSelectedKey == 'riaAdvice'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaAdvice" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            dashboardSelectedKey == 'assetClassManagement'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="assetClassManagement" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            dashboardSelectedKey == 'fundRequest'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="fundRequest" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            dashboardSelectedKey == 'riaBackoffice'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaBackoffice" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
      </a-menu>
      <a-menu
        v-model:selectedKeys="clientSelectedKey"
        theme="light"
        mode="inline"
        @click="onChangeClientMenu"
        v-if="leftNavigationTitle == 'ClientManagement'"
      >
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            clientSelectedKey == 'clientListing'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="clientListing" class="nav-text">
            Client Listing
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            clientSelectedKey == 'riaPortfolio'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaPortfolio" class="nav-text">
            RIA Portfolio
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            clientSelectedKey == 'riaAdvice'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaAdvice" class="nav-text">
            RIA Advice
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            clientSelectedKey == 'assetClassManagement'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="assetClassManagement" class="nav-text">
            Assset Class Management
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            clientSelectedKey == 'fundRequest'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="fundRequest" class="nav-text">
            Fund Request
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            clientSelectedKey == 'riaBackoffice'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaBackoffice" class="nav-text">
            RIA Backoffice
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
      </a-menu>
      <a-menu
        v-model:selectedKeys="portfolioSelectedKey"
        theme="light"
        mode="inline"
        @click="onChangePortfolioMenu"
        v-if="leftNavigationTitle == 'PORTFOLIOS'"
      >
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            portfolioSelectedKey == 'clientListing'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="clientListing" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            portfolioSelectedKey == 'riaPortfolio'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaPortfolio" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            portfolioSelectedKey == 'riaAdvice'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaAdvice" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            portfolioSelectedKey == 'assetClassManagement'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="assetClassManagement" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            portfolioSelectedKey == 'fundRequest'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="fundRequest" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            portfolioSelectedKey == 'riaBackoffice'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaBackoffice" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
      </a-menu>
      <a-menu
        v-model:selectedKeys="toolSelectedKey"
        theme="light"
        mode="inline"
        @click="onChangeToolMenu"
        v-if="leftNavigationTitle == 'TOOL'"
      >
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            toolSelectedKey == 'clientListing'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="clientListing" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            toolSelectedKey == 'riaPortfolio'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaPortfolio" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            toolSelectedKey == 'riaAdvice'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaAdvice" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            toolSelectedKey == 'assetClassManagement'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="assetClassManagement" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            toolSelectedKey == 'fundRequest'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="fundRequest" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
        <div
          class="mid-nav-sub-menu-item"
          :style="[
            toolSelectedKey == 'riaBackoffice'
              ? ' background-color : #FBFBFB'
              : ' background-color : white',
          ]"
        >
          <a-menu-item key="riaBackoffice" class="nav-text">
            Lorem Ipsum
          </a-menu-item>
          <div>
            <more-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
          <div>
            <plus-outlined
              :style="{
                fontSize: '15px',
                color: '#505050',
                cursor: 'pointer',
                marginRight: '5px',
              }"
            />
          </div>
        </div>
      </a-menu>
    </div>
  </div>
</template>
<script>
import { MoreOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons-vue';
import {
  ref, computed, onUpdated, watch,
} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: {
    // PlusOutlined,
    // EllipsisOutlined,
    MoreOutlined,
    PlusOutlined,
    DownOutlined,
  },

  setup() {
    const store = useStore();
    const headerTitle = ref('Client Management');
    const clientSelectedKey = ref(['clientListing']);
    const portfolioSelectedKey = ref(['loremIpsum']);
    const toolSelectedKey = ref(['loremIpsum']);
    const dashboardSelectedKey = ref(['loremIpsum']);
    const leftNavigationTitle = ref('ClientManagement');
    const router = useRouter();
    watch(store.state, () => {
      leftNavigationTitle.value = store.state.commonStore.headerTitle;
      leftNavigationTitle.value = leftNavigationTitle.value.replaceAll(' ', '');
      headerTitle.value = computed(
        () => store.getters['commonStore/getHeaderTitle'],
      ).value;
    });

    const addClient = () => {
      router.push('/clients/create-client');
    };
    const onClickRiaBackOffice = () => {
      router.push('/clients/riabackoffice');
    };

    const fundRequest = () => {
      router.push('/clients/fundRequestDashboard');
    };
    const onChangeDashboardMenu = (e) => {
      if (e.key === 'loremIpsum') {
        dashboardSelectedKey.value = ['loremIpsum'];
        // router.push('/clients');
      }
      if (e.key === 'loremIpsum') {
        dashboardSelectedKey.value = ['loremIpsum'];
        // router.push('/clients');
      }
      if (e.key === 'loremIpsum') {
        dashboardSelectedKey.value = ['loremIpsum'];
        // router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'loremIpsum') {
        dashboardSelectedKey.value = ['loremIpsum'];
        // router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'loremIpsum') {
        dashboardSelectedKey.value = ['loremIpsum'];
        // router.push('/clients/fundRequestLedger');
      }
      if (e.key === 'loremIpsum') {
        dashboardSelectedKey.value = ['loremIpsum'];
        // router.push('/clients/riabackoffice');
      }
    };
    const onChangeClientMenu = (e) => {
      if (e.key === 'clientListing') {
        clientSelectedKey.value = ['clientListing'];
        router.push('/clients');
      }
      if (e.key === 'riaPortfolio') {
        clientSelectedKey.value = ['riaPortfolio'];
        router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'riaAdvice') {
        clientSelectedKey.value = ['adviceListing'];
        router.push('/clients/adviceListing');
      }
      if (e.key === 'assetClassManagement') {
        clientSelectedKey.value = ['assetClassManagement'];
        // router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'fundRequest') {
        clientSelectedKey.value = ['fundRequest'];
        router.push('/clients/fundRequestDashboard');
      }
      if (e.key === 'riaBackoffice') {
        clientSelectedKey.value = ['riaBackoffice'];
        router.push('/clients/riabackoffice');
      }
    };
    const onChangePortfolioMenu = (e) => {
      if (e.key === 'loremIpsum') {
        portfolioSelectedKey.value = ['loremIpsum'];
        // router.push('/clients');
      }
      if (e.key === 'loremIpsum') {
        portfolioSelectedKey.value = ['loremIpsum'];
        // router.push('/clients');
      }
      if (e.key === 'loremIpsum') {
        portfolioSelectedKey.value = ['loremIpsum'];
        // router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'loremIpsum') {
        portfolioSelectedKey.value = ['loremIpsum'];
        // router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'loremIpsum') {
        portfolioSelectedKey.value = ['loremIpsum'];
        // router.push('/clients/fundRequestLedger');
      }
      if (e.key === 'loremIpsum') {
        portfolioSelectedKey.value = ['loremIpsum'];
        // router.push('/clients/riabackoffice');
      }
    };
    const onChangeToolMenu = (e) => {
      if (e.key === 'loremIpsum') {
        toolSelectedKey.value = ['loremIpsum'];
        // router.push('/clients');
      }
      if (e.key === 'loremIpsum') {
        toolSelectedKey.value = ['loremIpsum'];
        // router.push('/clients');
      }
      if (e.key === 'loremIpsum') {
        toolSelectedKey.value = ['loremIpsum'];
        // router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'loremIpsum') {
        toolSelectedKey.value = ['loremIpsum'];
        // router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'loremIpsum') {
        toolSelectedKey.value = ['loremIpsum'];
        // router.push('/clients/fundRequestLedger');
      }
      if (e.key === 'loremIpsum') {
        toolSelectedKey.value = ['loremIpsum'];
        // router.push('/clients/riabackoffice');
      }
    };

    onUpdated(() => {});
    return {
      collapsed: ref(false),
      addClient,
      fundRequest,
      clientSelectedKey,
      portfolioSelectedKey,
      toolSelectedKey,
      dashboardSelectedKey,
      headerTitle,
      leftNavigationTitle,
      onClickRiaBackOffice,
      onChangeClientMenu,
      onChangePortfolioMenu,
      onChangeToolMenu,
      onChangeDashboardMenu,
    };
  },
};
</script>
<style lang='scss'>
@import "../styles/midLeftNavigation.scss";
</style>
