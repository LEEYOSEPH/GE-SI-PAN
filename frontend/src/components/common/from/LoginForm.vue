<template>
  <div class="contents">
      <div class="form-wrapper form-wrapper-sm">
          <form class="form" @submit.prevent="submitForm">
              <div>
                  <label for="username">id:</label>
                  <input type="text" id="username" v-model="user_id" />
              </div>
              <div>
                  <label for="password">pw:</label>
                  <input type="password" id="password" v-model="user_pw"/>
              </div>
              <button type="submit" class="btn">Login</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            user_id : "",
            user_pw : "",
        }
    },
    methods:{
        submitForm() {
            try {
                const userData = {
                user_id : this.user_id,
                user_pw : this.user_pw
            }
                console.log(userData);
                 this.$router.push('/');
            } catch (error) {
                console.log(error);
            } finally {
                this.initForm();
            }
            
        },
        initForm() {
            this.user_id = '';
            this.user_pw = '';
        },
}
</script>

<style>
.btn {
  color: white;
}
</style>