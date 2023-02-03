<template>
  <div class="fund-request-container">
    <a-form layout="vertical">
      <a-row :gutter="32">
        <a-col style="padding-left: 16px;">
          <div
            class="request-fund-card"
          ><div class="fund-request-header-title">Request Fund</div>
            <div class="request-fund-card-content">
              <div class="listing-description">
              Nullam dictum ligula gravida mauris ullamcorper, id co a nvallis
              turpis gra vida. Nunc solli citudin elit in lacus egestas, eget auctor ante inte rdum.
               Utisus rhoncus conse ctetur. Suspe ndisse lorem tortor, mole stie non libero eg
et, eleifend cursus magna. Vestibu lum luctus gravida libero et male
Morbi vestibu lum orci in luctus imperdiet. Nam egestas arcu nec scele r
isque molestie. Curabitur ut mollis tellus, sagittis pellentesque lacus.
              </div>
              <div class="text-display-style">
                Client/ Client Group
              </div>
              <div class="card-content-first-row">
                <a-form-item
                  label=" "
                  :rules="[
                    {
                      required: false,
                      message: 'Please Client/Client Group!',
                    },
                  ]"
                >
                  <a-input
                    class="input-box-style"
                    placeholder="Select Client/ Client Group"
                  />
                </a-form-item>
              </div>
              <div class="card-content-first-row">
                <a-form-item
                  label=" "
                  :rules="[
                    {
                      required: false,
                      message: 'Please Client/Client Group!',
                    },
                  ]"
                >
                  <div class="radio-amount-details">
                    <a-radio-group v-model:value="amountDetails">
                      <a-radio value="1">Fixed Amount</a-radio>
                      <a-radio value="2">% of Amount</a-radio>
                    </a-radio-group>
                  </div>
                </a-form-item>
              </div>
              <div class="text-display-style">
                Requested Amount
              </div>
              <div v-if="amountDetails=== '1'" class="card-content-first-row">
                <a-form-item
                  label=" "
                  :rules="[
                    {
                      required: false,
                      message: 'Please Client/Client Group!',
                    },
                  ]"
                >
                  <a-input
                    class="input-box-style"
                    placeholder="Enter Requested Amount"
                  />
                </a-form-item>
              </div>
              <div v-else-if="amountDetails=== '2'" class="card-content-first-row">
                <a-form-item
                  label=" "
                  :rules="[
                    {
                      required: false,
                      message: 'Please Client/Client Group!',
                    },
                  ]"
                >
                  <a-input
                    class="input-box-style"
                    placeholder="Enter requested % of amount"
                  />
                </a-form-item>
              </div>
              <div class="text-display-style">
                Description
              </div>
              <div class="card-content-first-row">
                <a-form-item
                  label=" "
                  :rules="[
                    {
                      required: false,
                      message: 'Please Client/Client Group!',
                    },
                  ]"
                >
                  <a-textarea
                    class="input-box-style"
                    placeholder="Enter Description about the request"
                    style="height:74px"
                  />
                </a-form-item>
              </div>
            </div>
            <a-row>
              <a-col :span="12" :offset="9">
                <div class="fund-request-footer">
                  <div class="btn-section">
                    <a-button class="cancel-btn" @click="saveFund">
                      Cancel
                    </a-button>
                    <a-button class="save-btn" @click="saveFund">
                      Request Fund
                    </a-button>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { ref } from 'vue';
// import services from '../../../services/api';

export default {
  components: {},
  setup() {
    const amountDetails = ref('1');
    const router = useRouter();
    const saveFund = () => {
      message
        .success('Client Created Successfully!', 2.5)
        .then(() => message.success(
          'An Email has been sent to the client for On-Boarding Process',
          2.5,
        ));
      router.push('/dashboard');
    };
    return {
      saveFund,
      message,
      amountDetails,
    };
  },
};
</script>
<style lang="scss">
@import "../styles/fundRequest.scss";
</style>
