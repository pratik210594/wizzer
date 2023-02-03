<template>
<div class="add-client-container">
  <a-layout class="layout-container">
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
        class="slider-container"
      >
        <div :class="collapsed ? 'close-logo' : 'open-logo'">
          <a-avatar>J</a-avatar>
          <span v-if="!collapsed" class="logo-text"> John Smith </span>
        </div>
        <LeftNavigation />
      </a-layout-sider>
      <a-layout class="header-content-container">
        <a-layout-header style="background: #fff; padding: 0">
          <div class="common-header-root-buttons-root">
            <span v-if="collapsed">
              <menu-unfold-outlined
                class="trigger"
                @click="() => (collapsed = !collapsed)"
              />
              <span class="common-header-text">WIZZER</span>
            </span>
            <span v-else>
              <menu-fold-outlined
                class="trigger"
                @click="() => (collapsed = !collapsed)"
              />
              <span class="common-header-text">WIZZER</span>
            </span>
            <Header />
          </div>
        </a-layout-header>
        <a-layout-content class="content-layout">
          <AddClient />
        </a-layout-content>
      </a-layout>
    </a-layout>
</div>
</template>
<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import LeftNavigation from '../../common/components/leftNavigation.vue';
import Header from '../../common/components/NewHeader.vue';
import AddClient from './createNewClient.vue';

export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LeftNavigation,
    Header,
    AddClient,
  },

  setup() {
    return {
      collapsed: ref(false),
    };
  },
};
</script>
<style lang="scss">
@import "../styles/addClient.scss"
</style>
