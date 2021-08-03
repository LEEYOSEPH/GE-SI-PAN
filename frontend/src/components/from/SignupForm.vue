<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="id" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="name" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../../api/index";

export default {
  data() {
    return {
      id: "",
      password: "",
      name: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          id: this.id,
          password: this.password,
          name: this.name,
        };
        const { data } = await registerUser(userData);
        console.log(data.name);
      } catch (error) {
        console.log(error);
      } finally {
        initForm();
      }
    },
    initForm() {
      (this.id = ""), (this.password = ""), (this.name = "");
    },
  },
};
</script>

<style></style>
