<template>
  <IonPage>
    <IonContent class="main-content">
      <IonText>
        <h1>Friends</h1>
      </IonText>
    </IonContent>
  </IonPage>
</template>

<script setup>
useHead({
  title: 'Friends'
})
</script>

<style scoped>
.main-content {
  --padding-top: 1.5rem;
  --padding-start: 1.5rem;
  --padding-end: 1.5rem;
  --padding-bottom: 1.5rem;
}
.main-content h1 {
  margin-top: .5rem;
  margin-bottom: 1.5rem;
}
</style>