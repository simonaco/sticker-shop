<template>
  <button @click="login">{{ provider }}</button>
</template>

<script>
export default {
  props: {
    provider: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    login() {
      const { pathname } = window.location;
      const redirect = `post_login_redirect_uri=${pathname}`;
      const url = `/.auth/login/${this.provider}?${redirect}`;
      window.location.href = url;
    },
  },
};
</script>

<style lang="css" scoped>
</style>
