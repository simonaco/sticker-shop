<template>
  <button @click="logout">Logout</button>
</template>

<script>
export default {

  methods: {
    logout() {
      const { pathname } = window.location;
      const redirect = `post_logout_redirect_uri=${pathname}`;
      const url = `/.auth/logout?${redirect}`;
      window.location.href = url;
    },
  },
};
</script>

<style lang="css" scoped>
</style>
