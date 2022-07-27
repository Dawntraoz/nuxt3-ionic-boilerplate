<template>
  <IonPage>
    <IonContent class="main-content">
      <IonText>
        <p>Welcome to</p>
        <h1>Nuxtion</h1>
      </IonText>
      <IonSearchbar class="main-searchbar" mode="ios" show-clear-button="never" />
    </IonContent>
  </IonPage>
</template>

<script setup>
useHead({
  title: 'Discover'
})
</script>

<style scoped>
.main-content {
  --padding-top: 3rem;
  --padding-start: 1.5rem;
  --padding-end: 1.5rem;
  --padding-bottom: 1.5rem;
}
.main-content h1 {
  margin-top: .5rem;
  margin-bottom: 1.5rem;
}

/** Searchbar */
.main-searchbar {
  --color: var(--ion-text-color);
  --icon-color: var(--ion-text-color);
  
  padding: 0;
}
.main-searchbar :deep(.searchbar-input-container) {
  height: 50px;
}
.main-searchbar :deep(.searchbar-input-container) input.sc-ion-searchbar-ios {
  background-color: var(--ion-background-light-color);
  border-radius: 50px;
  padding-left: 1.25rem;
  padding-right: 3rem;
}
.main-searchbar :deep(.searchbar-input-container) .searchbar-search-icon {
  left: auto;
  right: 1rem;
  opacity: .5;
}
</style>