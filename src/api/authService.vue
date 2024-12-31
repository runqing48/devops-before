<!-- AuthService.vue -->
<script>
import axios from 'axios';
import CryptoJS from 'crypto-js';

export default {
  methods: {
    // 提交注册
    async submitSignup(signupData, timeoutDuration = 10000) {
      // 加密密码
      signupData.password = CryptoJS.SHA512(signupData.password).toString(CryptoJS.enc.Base64);

      let timeout = null;
      const timeoutPromise = new Promise((_, reject) => {
        timeout = setTimeout(() => reject('连接超时！'), timeoutDuration);
      });

      const apiPromise = axios.post("http://127.0.0.1:7990/user_signup/", signupData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      try {
        const response = await Promise.race([apiPromise, timeoutPromise]);
        clearTimeout(timeout); // 清除超时
        return response.data;
      } catch (error) {
        clearTimeout(timeout); // 清除超时
        return {success: false, message: error || 'An error occurred'};
      }
    },

    async submitLogin(loginData, timeoutDuration = 10000) {
      loginData.password = CryptoJS.SHA512(loginData.password).toString(CryptoJS.enc.Base64);

      let timeout = null;
      const timeoutPromise = new Promise((_, reject) => {
        timeout = setTimeout(() => reject('连接超时！'), timeoutDuration);
      });

      const apiPromise = axios.post("http://127.0.0.1:7990/user_login/", loginData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      try {
        const response = await Promise.race([apiPromise, timeoutPromise]);
        clearTimeout(timeout); // 清除超时

        return response.data
      } catch (error) {
        clearTimeout(timeout); // 清除超时

        if (error.response && error.response.status === 401) {
          // Token 无效，跳转到登录页
          this.$router.push({ name: 'Login' });
        }

        return {success: false, message: error || 'An error occurred'};
      }
    },
  }
};
</script>

<template>

</template>

<style scoped>

</style>
