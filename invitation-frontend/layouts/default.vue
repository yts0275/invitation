<template>
  <div>
    <ul class="flex">
      <li class="mx-10 my-5"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="mx-10 my-5"><NuxtLink to="/TestPage">About</NuxtLink></li>
    </ul>
    <hr class="mb-5"/>
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>