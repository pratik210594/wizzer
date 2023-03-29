<template>
  <a-layout-header
    class='common-header-main-wrapper'
  >
    <div class='header-native-world-logo-wrapper'>
      <span class='header-wizzer-logo'>WIZZER</span>
    </div>
    <div class="header-common-search-main-wrapper">
      <a-input
        class='header-common-search'
        placeholder='Search'
      >
        <template #prefix>
          <search-outlined :style="{ fontSize: '17px', color: '#969696' }" />
        </template>
      </a-input>
    </div>
    <div class='header-right'>
      <div><bell-outlined
      :style="{ fontSize: '25px', color: '#969696', cursor: 'pointer', marginRight: '18px' }" />
      </div>
      <div><setting-outlined
      :style="{ fontSize: '25px', color: '#969696', cursor: 'pointer', marginRight: '18px' }" />
      </div>
      <div><customer-service-outlined
      :style="{ fontSize: '25px', color: '#969696', cursor: 'pointer', marginRight: '20px' }" />
      </div>
    </div>
  </a-layout-header>
</template>

<script>
// import { ref } from 'vue';
import {
  BellOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  SearchOutlined,
} from '@ant-design/icons-vue';
import { onMounted } from 'vue';

export default {
  components: {
    BellOutlined,
    SettingOutlined,
    CustomerServiceOutlined,
    SearchOutlined,
  },
  setup() {
    onMounted(() => {});
    return {
    };
  },
};
</script>

<style lang='scss'>
@import '../styles/NewHeader.scss';
</style>
