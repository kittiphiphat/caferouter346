<script setup>
import { RouterView } from 'vue-router'
import BlogHeader from './views/BlogHeader.vue'
import jumbo from './views/jumbo.vue'
</script>


<template>

  <div class="container">
  <BlogHeader></BlogHeader>
  <jumbo title="WELCOME TO RELAX AND CHILL" desc="สามารถศึกษารายละเอียดและการจองโต๊ะได้ที่นี่"></jumbo>
      <RouterView/>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>
