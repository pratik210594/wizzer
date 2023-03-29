<template>
  <div class="common-header-root">
    <div class="common-header-text">WIZZER</div>
    <div class="common-header-root-buttons-root">
      <a-button type="link" class="common-header-btn-links"
        >Lorem Ipsum</a-button
      >
      <a-button type="link" class="common-header-btn-links"
        >Lorem Ipsum</a-button
      >
      <a-button type="link" class="common-header-btn-links"
        >Lorem Ipsum</a-button
      >
      <a-button type="primary" class="signup-button" @click="onClickSignUp">Sign Up</a-button>
      <a-button class="login-button"
      @click="onClickLogin">Login</a-button>
    </div>
  </div>
</template>
<script>
// import { defineComponent } from '@vue'
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const onClickSignUp = () => {
      router.push('/register');
    };
    const onClickLogin = () => {
      router.push('/dashboard');
    };
    return {
      onClickSignUp,
      onClickLogin,
    };
  },
};
</script>

<style lang="scss">
@import "../styles/header.scss";
</style>
