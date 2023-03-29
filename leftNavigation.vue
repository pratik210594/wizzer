 <template>
 <div class="left-navigation-main-wrapper">
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="light"
    mode="inline"
    style="height: 100%;padding-top:90px"
    @click="handleMenuClick"
  >
    <a-menu-item key="DASHBOARD" class="nav-text">
      <appstore-outlined
      :style="
              selectedKeys == 'DASHBOARD'
                ? 'color:#FFFFFF'
                : 'color:#969696'
            "
      class="left-navigation-menu-items-icon"
        />
    </a-menu-item>
    <a-menu-item key="Client Management" class="nav-text">
      <team-outlined
      :style="
              selectedKeys == 'Client Management'
                ? 'color:#FFFFFF'
                : 'color:#969696'
            "
      class="left-navigation-menu-items-icon" />
    </a-menu-item>
    <a-menu-item key="PORTFOLIOS" class="nav-text">
      <areaChart-outlined
      :style="
              selectedKeys == 'PORTFOLIOS'
                ? 'color:#FFFFFF'
                : 'color:#969696'
            "
      class="left-navigation-menu-items-icon" />
    </a-menu-item>
    <a-menu-item key="TOOL" class="nav-text">
      <setting-outlined
      :style="
              selectedKeys == 'TOOL'
                ? 'color:#FFFFFF'
                : 'color:#969696'
            "
      class="left-navigation-menu-items-icon"/>
    </a-menu-item>
  </a-menu>
  </div>
</template>
<script>
import {
  AppstoreOutlined,
  TeamOutlined,
  AreaChartOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  components: {
    AppstoreOutlined,
    TeamOutlined,
    AreaChartOutlined,
    SettingOutlined,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedKeys = ref(['Client Management']);
    // let openKeys = ref(['']);

    const handleMenuClick = (e) => {
      store.dispatch('commonStore/updateheaderTitle', e.key);
      if (e.key === 'DASHBOARD') {
        selectedKeys.value = ['DASHBOARD'];
        router.push('/dashboard');
      }
      if (e.key === 'Client Management') {
        selectedKeys.value = ['Client Management'];
        // openKeys = ['CLIENT'];
        router.push('/clients');
      }
      if (e.key === 'PORTFOLIOS') {
        selectedKeys.value = ['PORTFOLIOS'];
        // openKeys = ['PORTFOLIOS'];
        router.push('/portfolios/riaPortfolio');
      }
      if (e.key === 'TOOL') {
        selectedKeys.value = ['TOOL'];
        // openKeys = ['PORTFOLIOS'];
        // router.push('/portfolios/riaPortfolio');
      }
    };
    // const menuNavigation = () => {
    //   const currentRoute = router.currentRoute.value;
    //   const currentPath = currentRoute.path;
    //   if (currentPath === '/dashboard') {
    //     selectedKeys = ['DASHBOARD'];
    //     console.log(currentRoute);
    //   }
    //   if (currentPath === '/clients') {
    //     selectedKeys = ['Client Management'];
    //     console.log(currentRoute);
    //     // openKeys = ['CLIENT'];
    //   }
    //   if (currentPath === '/portfolios/riaPortfolio') {
    //     selectedKeys = ['PORTFOLIOS'];
    //     console.log(currentRoute);
    //   }
    // };
    const addClient = () => {
      router.push('/clients/create-client');
    };
    onMounted(() => {
      // menuNavigation();
    });
    return {
      selectedKeys,
      // openKeys,
      collapsed: ref(false),
      handleMenuClick,
      // menuNavigation,
      addClient,
    };
  },
};
</script>
<style lang="scss">
@import "../styles/leftNavigation.scss";
</style>
