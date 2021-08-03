<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="username">id:</label>
          <input type="text" id="username" v-model="id" />
        </div>
        <div>
          <label for="password">pw:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      try {
        const userData = {
          id: this.id,
          password: this.password,
        };
        console.log(userData);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
