<template>
  <main class="main-layout">
    <BaseHeader />
    <NuxtPage />
    <BaseFooter />
  </main>
</template>

<script setup>
const route = useRoute()

useHead({
  title: route.meta.title
})
</script>

<style scoped>
.main-layout {
  min-height: 100vh;

  display: grid;
  grid-template-rows: min-content 1fr min-content;

  background: rgb(37, 17, 93);
  color: rgb(236, 232, 248);
}
</style>

