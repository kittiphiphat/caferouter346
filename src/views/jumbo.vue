<template>
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">{{ title }}</h1>
      <p class="lead my-3">{{ desc }}</p>
      <!--<p class="lead mb-0">
        <a href="#" class="text-body-emphasis fw-bold">Continue reading...</a>
      </p>-->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
  /* กำหนดสไตล์พื้นหลัง */
  .bg-body-secondary {
    position: relative;
    background-image: url('https://i.pinimg.com/474x/c7/3c/d5/c73cd5d82713ae6cf059a947839ec21e.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .bg-body-secondary::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.7)); 
  z-index: 1;
}
.bg-body-secondary h1, .bg-body-secondary p {
  position: relative;
  z-index: 2; 
}

</style>
