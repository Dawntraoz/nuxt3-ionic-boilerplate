<template>
  <IonApp class="main-layout">
    <IonContent class="ion-padding">
      <IonRouterOutlet />
    </IonContent>

    <IonFooter class="main-footer">
      <IonGrid class="footer-grid">
        <IonRow class="row">
          <IonCol class="col">
            <IonButton class="button" router-link="/play">
              <IonIcon :icon="route.path === '/play' ? gameController : gameControllerOutline" size="large" />
            </IonButton>
          </IonCol>
          <IonCol class="col">
            <IonButton class="button" router-link="/friends">
              <IonIcon :icon="route.path === '/friends' ? people : peopleOutline" size="large" />
            </IonButton>
          </IonCol>
          <IonCol class="col">
            <IonButton class="button" router-link="/">
              <IonImg class="main-logo" src="/logos/nuxtion.png" alt="Nuxtion main logo" />
            </IonButton>
          </IonCol>
          <IonCol class="col">
            <IonButton class="button" router-link="#">
              <IonIcon slot="icon-only" :icon="albumsOutline" size="large" />
            </IonButton>
          </IonCol>
          <IonCol class="col">
            <IonButton class="button" router-link="/asd">
              <IonIcon slot="icon-only" :icon="route.path === '/asd' ? person : personOutline" size="large" />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  </IonApp>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { gameControllerOutline, gameController, personOutline, person, peopleOutline, people, albumsOutline } from 'ionicons/icons'

const route = useRoute();

useHead({
  title: route.meta.title
})
</script>

<style scoped>
.main-layout {
  --ion-font-family: Jost, sans-serif;

  --ion-background-color: #040B19;
  --ion-background-light-color: #1F2430;
  --ion-text-color: #FFF;
  background: var(--ion-background-color);
}

.main-logo::part(image) {
  width: 42px;
  height: 42px;
}

.footer-grid {
  border-top: 1px solid var(--ion-background-light-color);
  padding: .5rem 1rem;
}
.footer-grid .row {
  align-items: center;
}
.footer-grid .col {
  display: flex;
  justify-content: center;
}
.footer-grid .button {
  --padding-top: 0;
  --padding-start: .5rem;
  --padding-end: .5rem;
  --padding-bottom: 0;

  --background: transparent;

  height: 44px;
}
</style>

