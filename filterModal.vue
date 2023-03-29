<template>
  <div class='main-container'>
    <div class='candidate-filter-header-text'>
      <a-button
        style='
          cursor: default;
          color: #4c5155;
          font-family: Poppins;
          font-weight: 400;
          font-size: 18px;
          line-height: 20px;
        '
        type='link'
        >Filter By</a-button
      >
      <a-button type='link' style='color: #FF0000;font-size: 12px;'>Reset Changes</a-button>
    </div>
    <div class='child-tag-section'>
      <p>Group<br></p>
          <a-checkable-tag v-model:checked="client" @change="handleChange" class="check-tag">
          Client
          </a-checkable-tag>
          <a-checkable-tag v-model:checked="clientGroups" @change="handleChange" class="check-tag">
          Client Groups
          </a-checkable-tag>
        <p>Lorem Ipsum</p>
          <a-checkable-tag v-model:checked="Lorem" @change="handleChange" class="check-tag">
          Lorem
          </a-checkable-tag>
          <a-checkable-tag v-model:checked="LoremIpsum" @change="handleChange" class="check-tag">
          Lorem Ipsum
          </a-checkable-tag>
          <p>Lorem Ipsum</p>
        <a-checkable-tag v-model:checked="Lorem1" @change="handleChange" class="check-tag">
        Lorem
        </a-checkable-tag>
        <a-checkable-tag v-model:checked="LoremIpsum1" @change="handleChange" class="check-tag">
        Lorem Ipsum
        </a-checkable-tag>
        <p>Lorem Ipsum</p>
        <a-checkable-tag v-model:checked="Lorem2" @change="handleChange" class="check-tag">
        Lorem
        </a-checkable-tag>
        <a-checkable-tag v-model:checked="LoremIpsum2" @change="handleChange" class="check-tag">
        Lorem Ipsum
        </a-checkable-tag>
    </div>
    <div class='footer'>
      <a-button
        key='submit'
        style='
          border-color: white;
          font-size: $font_size_12;
          font-family: Poppins;
          font-weight: 500;
        '
        @click='handleOk'
        >No, Exit
      </a-button>
      <a-button
        key='submit'
        style='
          background: #5C4E7A;
          color: #ffffff;
          font-size: $font_size_12;
          font-family: Poppins;
          font-weight: 500;
        '
        >Apply Filters
      </a-button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {

  setup() {
    const handleChange = (checked) => {
      console.log(checked);
    };
    const handleOk = (checked) => {
      console.log(checked);
    };
    return {
      client: ref(false),
      clientGroups: ref(false),
      Lorem: ref(false),
      LoremIpsum: ref(false),
      Lorem1: ref(false),
      LoremIpsum1: ref(false),
      Lorem2: ref(false),
      LoremIpsum2: ref(false),
      handleChange,
      handleOk,
    };
  },
};
</script>
<style scoped>
@import '../styles/filterModal.scss';
</style>
