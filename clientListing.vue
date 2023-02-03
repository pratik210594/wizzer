 <template>
  <div class="client-listing-container">
    <h3 class="client-listing-title">Client Listing</h3>
    <div class="text-section">
      <p class="listing-description">
        Nullam dictum ligula gravida mauris ullamcorper, id co a nvallis turpis
        gra vida. Nunc solli citudin elit in lacus egestas, eget auctor ante
        inte rdum. Ut risus rhoncus conse ctetur. Suspe ndisse lorem tortor,
        mole stie non libero eget, eleifend cursus magna. Vestibu lum luctus
        gravida libero et male Morbi vestibu lum orci in luctus imperdiet. Nam
        egestas arcu nec scele risque molestie. Curabitur ut mollis tellus,
        sagittis pellentesque lacus.
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
