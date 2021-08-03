<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">GE SI PAN</h1>
      <loading-spinner v-if="isloding"></loading-spinner>
      <ul v-else>
        <div>게시글</div>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import LoadingSpinner from "../components/common/LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },
  data() {
    return {
      isLoding: false,
    };
  },
  methods: {
    fetchData() {
      this.isLoding = true;
      this.isLoding = false;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
