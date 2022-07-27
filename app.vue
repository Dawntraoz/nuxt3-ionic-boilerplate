<template>
  <IonApp class="main-layout">
    <IonContent class="ion-padding">
      <IonRouterOutlet />
    </IonContent>

    <IonFooter class="main-footer">
      <LayoutFooter />
    </IonFooter>
  </IonApp>
</template>

<script setup>
</script>

<style scoped>
.main-layout {
  --ion-font-family: Jost, sans-serif;

  background: var(--ion-background-color);
}
</style>

