 <template>
  <div class="client-listing-container">
    <h3 class="client-listing-title">Client Listing</h3>
    <div class="text-section">
      <p class="listing-description">
        Client Details divided into groups and individual clients.
        This page give a brief of client's current holdings and invested amount status looks like.
      </p>
    </div>
    <div class="listing-tabs">
      <a-tabs v-model:activeKey="activeKey" :animated="false">
        <a-tab-pane key="1" tab="Client Group">
           <clientGroupTab />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Clients">
          <clientTab />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import clientTab from './clientTab.vue';
import clientGroupTab from './clientGroupTab.vue';

export default {
  components: {
    clientTab,
    clientGroupTab,
  },

  setup() {
    const router = useRouter();
    const inviteClient = () => {
      router.push('/clients/create-client');
    };
    return {
      activeKey: ref('1'),
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      inviteClient,
    };
  },
};
</script>
<style lang='scss'>
@import "../styles/clientListing.scss";
</style>
