<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji">
        <img src="~/assets/azure-staticwebapps.png" class="logo" height="100" width="100" />
      </span>
    </nuxt-link>

    <div class="menu-list auth">
      <template v-if="!userInfo">
        <div class="flex">
          <p class="text-xs font-semibold text-gray-600">Login</p>
          <a href="/.auth/login/github" class="max-w-xs ml-4">
            <Github />
          </a>
          <a href="/.auth/login/twitter" class="ml-3">
            <Twitter />
          </a>
          <a href="/.auth/login/aad" class="ml-3">
            <AAD />
          </a>
        </div>
      </template>
      
    </div>
    <div v-if="userInfo">
      <div class="flex">
      <p class="text-xs font-semibold text-gray-600">Welcome, {{ userInfo.userDetails }}</p>
      <a href="/.auth/logout" class="ml-3">
            
          <p class="text-xs font-semibold text-gray-600">Logout</p></a>
      </div>
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

import Twitter from "~/components/icons/twitter.vue";
import Github from "~/components/icons/github.vue";
import AAD from "~/components/icons/aad.vue";

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
    Github,
    Twitter,
    AAD,
  },
};
</script>

<style>
.emoji {
  font-size: 30px;
}
</style>
