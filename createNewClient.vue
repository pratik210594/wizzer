<template>
  <div class="create-client-container">
    <div class="text-section">
      <div class="top-section">
        <div class="header">
          <arrow-left-outlined />
          <span style="margin-left: 17px"> Add Client</span>
        </div>
        <div class="top-section-buttons">
          <a-button>
            <template #icon><ellipsis-outlined :rotate="90" /></template>
          </a-button>
        </div>
      </div>
      <p class="listing-description">
        Nullam dictum ligula gravida mauris ullamcorper, id co a nvallis turpis
        gra vida. Nunc solli citudin elit in lacus egestas, eget auctor ante
        inte rdum. Ut risus rhoncus conse ctetur. Suspe ndisse lorem tortor,
        mole stie non libero eget, eleifend cursus magna. Vestibu lum luctus
        gravida libero et male Morbi vestibu lum orci in luctus imperdiet. Nam
        egestas arcu nec scele risque molestie. Curabitur ut mollis tellus,
        sagittis pellentesque lacus.
      </p>
      <p></p>
    </div>
    <a-form
      layout="vertical"
      ref="formRef"
      :model="dynamicValidateForm"
      @finish="onFinish"
    >
      <a-row :gutter="32" style="margin: 2rem 0">
        <a-col style="padding-left: 0; width: 100%">
          <div class="client-details-card" :bordered="false">
            <div class="card-header-title">Basic Information</div>
            <div class="basic-information-card-content">
              <div style="margin-bottom: 9px">Enter Mobile No</div>
              <div class="card-content-first-row">
                <a-form-item
                  name="mobile"
                  label="Mobile"
                  :rules="[
                    {
                      required: false,
                      message: 'Please Enter Correct Mobile No',
                    },
                  ]"
                  ><div style="margin-right: 24px">
                    <a-input
                      class="input-box-style"
                      v-model:value="dynamicValidateForm.mobile"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </a-form-item>
                <a-form-item
                  label=" "
                  :rules="[
                    {
                      required: false,
                      message: 'Please input your relation with family member!',
                    },
                  ]"
                  ><div style="margin-left: 24px">
                    <a-select
                      v-model:value="value"
                      placeholder="Specify your relation with family member"
                      style="width: 100%; height: 44px"
                      :options="options"
                      :filter-option="filterOption"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      @change="handleChange"
                    ></a-select>
                  </div>
                </a-form-item>
              </div>
              <div class="checkbox-text" style="margin-bottom: 24px">
                <a-checkbox checkboxValue="true" @change="handleCheckboxChange">
                  Its already linked to a trading account. Would you like to
                  open a trading account for a family member using the same
                  number?
                </a-checkbox>
              </div>
              <div class="card-content-second-row">
                <a-form-item
                  name="email"
                  label="Email ID"
                  :rules="[
                    {
                      required: true,
                      message: 'Please Enter Email Number',
                      type: 'email',
                    },
                  ]"
                  ><div style="margin-right: 24px">
                    <a-input
                      class="input-box-style"
                      placeholder="Enter Email ID"
                      v-model:value="dynamicValidateForm.email"
                    />
                  </div>
                </a-form-item>
                <a-form-item
                  label=" "
                  :rules="[
                    {
                      required: false,
                      message: 'Please input your relation with family member!',
                    },
                  ]"
                  ><div style="margin-left: 24px">
                    <a-select
                      v-model:value="value"
                      placeholder="Specify your relation with family member"
                      style="width: 100%; height: 44px"
                      :options="options"
                      :filter-option="filterOption"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      @change="handleChange"
                    ></a-select>
                  </div>
                </a-form-item>
              </div>
              <div class="checkbox-text">
                <a-checkbox checkboxValue="true" @change="handleCheckboxChange">
                  Its already linked to a trading account. Would you like to
                  open a trading account for a family member using the same
                  number?
                </a-checkbox>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="32" style="margin: 2rem 0">
        <a-col style="padding-left: 0; width: 100%">
          <div class="client-details-card" :bordered="false">
            <div class="card-header-title">Add Personal Details</div>
            <div class="basic-information-card-content">
              <div class="card-content-first-row" style="margin-bottom: 27px">
                <a-form-item
                  label=" "
                  :rules="[
                    {
                      required: false,
                      message: 'Please input your Marital Status!',
                    },
                  ]"
                >
                  <div class="marital-gender-text" style="display: flex">
                    <div style="margin-right: 24px; font-weight: 400">
                      Marital Status
                    </div>
                    <div>
                      <a-radio-group
                        v-model:value="maritalStatus"
                        @change="maritalStatusChange"
                      >
                        <a-radio value="Single" style="font-size: 16px"
                          >Single</a-radio
                        >
                        <a-radio value="Married" style="font-size: 16px">
                          Married</a-radio
                        >
                      </a-radio-group>
                    </div>
                  </div>
                </a-form-item>
              </div>
              <div style="margin-bottom: 9px">Select Gender</div>
              <div class="card-content-first-row" style="margin-bottom: 24px">
                <a-form-item
                  :rules="[
                    { required: false, message: 'Please Enter Gender Details' },
                  ]"
                  ><div style="margin-right: 24px">
                    <a-select
                      v-model:value="value"
                      placeholder="Select Gender"
                      style="width: 100%; height: 44px"
                      :options="gender"
                      :filter-option="filterOption"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      @change="handleGender"
                    ></a-select>
                  </div>
                </a-form-item>
                <a-form-item
                  name="fatherName"
                  label="Father"
                  :rules="[
                    { required: false, message: 'Please Enter Fathers Details' },
                  ]"
                  ><div style="margin-left: 24px">
                    <a-input
                      class="input-box-style"
                      v-model:value="dynamicValidateForm.fatherName"
                      placeholder="Father"
                    />
                  </div>
                </a-form-item>
              </div>
              <div class="checkbox-text"></div>
              <div class="card-content-second-row" style="margin-bottom: 24px">
                <a-form-item
                  name="annualIncome"
                  label="Annual Income"
                  :rules="[
                    { required: false, message: 'Please Enter Annual Income' },
                  ]"
                  ><div style="margin-right: 24px">
                    <a-input
                      class="input-box-style"
                      placeholder="Enter Annual income"
                      v-model:value="dynamicValidateForm.annualIncome"
                    />
                  </div>
                </a-form-item>
                <a-form-item
                  name="occupation"
                  label="Occupation"
                  :rules="[{ required: false, message: 'Please Enter Occupation' }]"
                  ><div style="margin-left: 24px">
                    <a-input
                      class="input-box-style"
                      placeholder="Enter Occupation"
                      v-model:value="dynamicValidateForm.occupation"
                    />
                  </div>
                </a-form-item>
              </div>
              <div class="checkbox-text"></div>
              <div class="card-content-second-row" style="width: 48.4%">
                <a-form-item
                  name="tradingExperience"
                  label="Years of Experience"
                  :rules="[
                    { required: false, message: 'Please Enter Experience Details' },
                  ]"
                  ><div>
                    <a-input
                      class="input-box-style"
                      placeholder="Enter Years of Trading Experience"
                      v-model:value="dynamicValidateForm.tradingExperience"
                    />
                  </div>
                </a-form-item>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="32" style="margin: 2rem 0">
        <a-col style="padding-left: 0; width: 100%">
          <div class="client-details-card" :bordered="false">
            <div class="card-header-title">Client Code</div>
            <div class="basic-information-card-content">
              <div style="margin-bottom: 9px">Enter Client Code</div>
              <div class="card-content-first-row">
                <a-form-item
                  name="clientId"
                  label="Client Code"
                  :rules="[{ required: false, message: 'Please Enter Client Code' }]"
                  ><div>
                    <a-input
                      class="input-box-style"
                      v-model:value="dynamicValidateForm.clientId"
                      placeholder="#FR20152"
                    />
                  </div>
                </a-form-item>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="32" style="margin: 2rem 0">
        <a-col style="padding-left: 0; width: 100%">
          <div class="client-details-card" :bordered="false">
            <div class="card-header-title">Add Advisor and RM Details</div>
            <div class="basic-information-card-content">
              <div
                class="card-content-first-row"
                style="display: block; width: 100%"
              >
                <a-space
                  v-for="(user, index) in dynamicValidateForm.advisors"
                  :key="user.id"
                  style="display: block; margin-bottom: 8px"
                  align="baseline"
                >
                  <div style="display: flex">
                    <a-form-item
                      :name="['advisors', index, 'name']"
                      :rules="{
                        required: true,
                        message: 'Please Enter advisors Name',
                      }"
                    >
                      <a-input
                        v-model:value="user.name"
                        placeholder="Advisor Name"
                      />
                    </a-form-item>
                    <div
                      style="
                        margin-top: 10px;
                        font-size: 21px;
                        margin: 10px 17px 0px 17px;
                      "
                    >
                      <MinusCircleOutlined @click="removeUser(user)" />
                    </div>
                    <a-form-item
                      :name="['advisors', index, 'coordinates']"
                      :rules="{
                        required: true,
                        message: 'Please Enter advisors Cordinates',
                      }"
                    >
                      <a-input
                        v-model:value="user.coordinates"
                        placeholder="Co-ordinates"
                      />
                    </a-form-item>
                  </div>
                </a-space>
                <a-form-item>
                  <a-button
                    style="
                      background: #ffffff;
                      width: 48.4%;
                      height: 44px;
                      border: 1px solid #6a3c87;
                      border-radius: 8px;
                      margin-top: 16px;
                      margin-bottom: 16px;
                    "
                    block
                    @click="addAdvisor"
                  >
                    <PlusOutlined />
                    Add user
                  </a-button>
                </a-form-item>
              </div>
              <div
                class="card-content-first-row"
                style="display: block; width: 100%"
              >
                <a-space
                  v-for="(user, index) in dynamicValidateForm.rm"
                  :key="user.id"
                  style="display: block; margin-bottom: 8px"
                  align="baseline"
                >
                  <div style="display: flex">
                    <a-form-item
                      :name="['rm', index, 'email']"
                      :rules="{
                        required: true,
                        message: 'Please Enter Advisors Name',
                      }"
                    >
                      <a-input
                        v-model:value="user.email"
                        placeholder="Advisor Name"
                      />
                    </a-form-item>
                    <div
                      style="
                        margin-top: 10px;
                        font-size: 21px;
                        margin: 10px 17px 0px 17px;
                      "
                    >
                      <MinusCircleOutlined @click="removeUser1(user)" />
                    </div>
                    <a-form-item
                      :name="['rm', index, 'coordinates']"
                      :rules="{
                        required: true,
                        message: 'Please Enter last name',
                      }"
                    >
                      <a-input
                        v-model:value="user.coordinates"
                        placeholder="Co-ordinates"
                      />
                    </a-form-item>
                  </div>
                </a-space>
                <a-form-item>
                  <a-button
                    style="
                      background: #ffffff;
                      width: 48.4%;
                      height: 44px;
                      border: 1px solid #6a3c87;
                      border-radius: 8px;
                      margin-top: 16px;
                    "
                    block
                    @click="addRM"
                  >
                    <PlusOutlined />
                    Add user
                  </a-button>
                </a-form-item>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="32" style="margin: 2rem 0">
        <a-col style="padding-left: 0; width: 100%">
          <div class="client-details-card" :bordered="false">
            <div class="card-header-title">Select Asset Classes</div>
            <div class="basic-information-card-content">
              <div style="margin-bottom: 9px">Search and Enter Asset Class</div>
              <div v-if="showAsset" class="card-content-first-row">
                <a-form-item
                  name="assetClass"
                  label="Asset Class"
                  :rules="{
                    required: false,
                    message: 'Please Enter Asset Class',
                  }"
                  ><div>
                    <a-select
                      v-model:value="dynamicValidateForm.assetClass"
                      mode="multiple"
                      placeholder="Asset Classes"
                      style="width: 100%"
                      :options="localAssetData"
                      @change="handleAssetChange"
                    ></a-select>
                  </div>
                </a-form-item>
              </div>
              <div class="create-client-tag-wrapper">
                <a-tag
                  color="error"
                  closable
                  style="margin-top: 8px"
                  @close="handleAssetClose(asset)"
                  v-for="asset in selectedAssetClasses"
                  :key="asset.value"
                >
                  {{ asset.label }}
                </a-tag>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12" :offset="8">
          <div class="create-client-header">
            <div class="btn-section">
              <a-button @click="clearFields" class="cancel-btn">
                Cancel
              </a-button>
              <a-button class="save-btn" html-type="Submit"> Save </a-button>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script>
// import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import {
  ref, reactive, onMounted,
} from 'vue';
import {
  MinusCircleOutlined,
  PlusOutlined,
  EllipsisOutlined,
  ArrowLeftOutlined,
  // CloseCircleOutlined,
} from '@ant-design/icons-vue';
import services from '../../../services/api';

// const { useForm } = Form;

export default {
  components: {
    MinusCircleOutlined,
    PlusOutlined,
    EllipsisOutlined,
    ArrowLeftOutlined,
    // CloseCircleOutlined,
  },
  setup() {
    const maritalStatus = ref('Single');
    const checkboxValue = ref('');
    const error = ref(false);
    const showAsset = ref(false);
    const formRef = ref();
    const localAssetData = ref([]);
    const selectedAssetClasses = ref([]);
    const dynamicValidateForm = reactive({
      mobile: '',
      sameMobileRelation: '',
      email: '',
      sameEmailRelation: '',
      maritalStatus: '',
      gender: '',
      fatherName: '',
      annualIncome: '',
      occupation: '',
      tradingExperience: '',
      clientId: '',
      advisors: [{}],
      rm: [{}],
      assetClass: ref([]),
    });

    const removeUser = (item) => {
      const index = dynamicValidateForm.advisors.indexOf(item);

      if (index !== -1) {
        dynamicValidateForm.advisors.splice(index, 1);
      }
    };
    const removeUser1 = (item) => {
      const index = dynamicValidateForm.rm.indexOf(item);

      if (index !== -1) {
        dynamicValidateForm.rm.splice(index, 1);
      }
    };
    const addAdvisor = () => {
      dynamicValidateForm.advisors.push({
        id: '',
        coordinates: '',
      });
    };
    const addRM = () => {
      dynamicValidateForm.rm.push({
        email: '',
        coordinates: '',
      });
    };
    const handleAssetClose = (tag) => {
      const removedValue = tag.value;
      let tempData = dynamicValidateForm.assetClass
        .filter((assetClass) => assetClass !== removedValue);
      dynamicValidateForm.assetClass = tempData;
      const assetClasses = selectedAssetClasses.value;
      tempData = assetClasses.filter((assetClass) => assetClass.value !== removedValue);
      selectedAssetClasses.value = tempData;
    };

    const handleAssetChange = (values) => {
      console.log('values: ', values);
      selectedAssetClasses.value = values.map((value) => {
        const assetClasses = localAssetData.value;
        return (assetClasses.find((asset) => asset.value === value));
      });
      console.log('selectedAssetClasses: ', selectedAssetClasses.value);
    };

    const handleCheckboxChange = (e) => {
      dynamicValidateForm.sameMobileRelation = true;
      dynamicValidateForm.sameEmailRelation = true;
      console.log(e);
    };
    const options = ref([
      {
        value: 'father',
        label: 'Father',
      },
      {
        value: 'mother',
        label: 'Mother',
      },
      {
        value: 'brother',
        label: 'Brother',
      },
      {
        value: 'sister',
        label: 'Sister',
      },
    ]);
    const gender = ref([
      {
        value: 'male',
        label: 'Male',
      },
      {
        value: 'female',
        label: 'Female',
      },
    ]);
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };
    const handleGender = (value) => {
      console.log(`selected ${value}`);
    };

    const handleBlur = () => {
      console.log('blur');
    };

    const handleFocus = () => {
      console.log('focus');
    };
    const createClient = async (values) => {
      console.log('create client');
      await services
        .createClient(values)
        .then((response) => {
          console.log('response', response);
        })
        .catch((error1) => {
          console.log('error', error1);
        });
    };
    const onFinish = (values) => {
      console.log('Received values of form:', values);
      console.log('dynamicValidateForm:', dynamicValidateForm);
      createClient(values);
    };
    const maritalStatusChange = () => {
      dynamicValidateForm.maritalStatus = maritalStatus.value;
      console.log(maritalStatus.value);
    };
    const clearFields = () => {
      console.log('Clear fields');
      dynamicValidateForm.mobile = '';
      dynamicValidateForm.sameMobileRelation = '';
      dynamicValidateForm.email = '';
      dynamicValidateForm.sameEmailRelation = '';
      dynamicValidateForm.maritalStatus = '';
      dynamicValidateForm.gender = '';
      dynamicValidateForm.fatherName = '';
      dynamicValidateForm.annualIncome = '';
      dynamicValidateForm.occupation = '';
      dynamicValidateForm.tradingExperience = '';
      dynamicValidateForm.clientId = '';
      dynamicValidateForm.advisors = [{}];
      dynamicValidateForm.rm = [{}];
    };
    const tempData = [];
    const fetchAssetClasses = async () => {
      const payload = {
        q: '',
        pageNo: 1,
      };
      await services
        .fetchAssetClasses(payload)
        .then((response) => {
          const { data } = response;
          showAsset.value = true;
          data.map((x) => {
            tempData.push({
              value: x.id,
              label: x.name,
            });
            return tempData;
          });
        })
        .catch(() => {});
      Object.assign(localAssetData.value, tempData);
      console.log('object assign', localAssetData.value);
    };
    onMounted(() => {
      window.scrollTo(0, 0);
      fetchAssetClasses();
    });
    return {
      message,
      options,
      handleBlur,
      handleFocus,
      handleChange,
      checkboxValue,
      handleCheckboxChange,
      maritalStatus,
      error,
      formRef,
      onFinish,
      dynamicValidateForm,
      gender,
      addAdvisor,
      addRM,
      removeUser,
      removeUser1,
      handleGender,
      maritalStatusChange,
      showAsset,
      clearFields,
      handleAssetClose,
      selectedAssetClasses,
      handleAssetChange,
      tempData,
      localAssetData,
    };
  },
};
</script>
<style lang="scss">
@import "../styles/createNewClient.scss";
</style>
