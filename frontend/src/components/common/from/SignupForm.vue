<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="user_id" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="user_pw" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="user_nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            user_id : '',
            user_pw : '',
            user_nickname : '',
        }
    },
    methods: {
        submitForm() {
            try {
                const userData = {
                user_id : this.user_id,
                user_pw : this.user_pw,
                user_nickname : this.user_nickname
                }
            
            } catch (error) {
                console.log(error);
            }finally {
                initForm();
            }
        },
        initForm() {
            this.user_id = "",
            this.user_pw = '',
            this.user_nickname = ''

        }
    }

}
</script>

<style>

</style>