<template>
  <div class="app-layout">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
