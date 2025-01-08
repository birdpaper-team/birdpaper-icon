<template>
  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" v-wechat-title="$route.meta.title" />
    </Suspense>
  </router-view>
</template>