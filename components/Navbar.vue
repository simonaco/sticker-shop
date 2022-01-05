<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji">
        <img src="~/assets/strapi.png" class="logo" height="150" width="150" />
      </span>
    </nuxt-link>
    <div class="menu-list auth">
      <template v-if="!userInfo">
        <template v-for="provider in providers">
          <Login :key="provider" :provider="provider" />
        </template>
      </template>
      <Logout v-if="userInfo" />
    </div>
    <div v-if="userInfo">
      <p>Welcome, {{ userInfo.userDetails }}</p>
    </div>
    <button class="snipcart-checkout flex items-center">
      <Cart />
      <span
        class="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"
      ></span>
    </button>
  </div>
</template>

<script>
import Cart from "./icons/cart.vue";
import Login from "~/components/Login.vue";
import Logout from "~/components/Logout.vue";

export default {
  data() {
    return {
      userInfo: {
        type: Object,
        default() {},
      },
      providers: ["twitter", "github", "aad"],
    };
  },
  async created() {
    this.userInfo = await this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      try {
        const response = await fetch("/.auth/me");
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
      } catch (error) {
        console.error("No profile could be found");
        return undefined;
      }
    },
  },
  components: {
    Cart,
    Login,
    Logout
  },
};
</script>

<style>
.emoji {
  font-size: 30px;
}
</style>
