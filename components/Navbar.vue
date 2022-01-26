<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji">
        <img src="~/assets/azure-staticwebapps.png" class="logo" height="100" width="100" />
      </span>
    </nuxt-link>

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
      }
    };
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
