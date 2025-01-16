# 快速上手

该文档提供快速安装并使用的步骤。

## 安装

::: code-group

```sh [npm]
npm install birdpaper-icon
```

```sh [yarn]
yarn install birdpaper-icon
```

```sh [pnpm]
pnpm add birdpaper-icon
```

:::

## 引入
在你的 `main.js` 或者其他入口文件中引入。
```js
import { createApp } from "vue";
import App from "./App.vue";

import BirdpaperIcon from "birdpaper-icon";
import "birdpaper-icon/dist/index.css";

const app = createApp(App);
app.use(BirdpaperIcon).mount("#app");
```

## 直接使用

```vue
<template>
  <IconVuejsLine />
</template>
```

## 动态组件

```vue
<template>
  <component :is="IconShareFill"></component>
</template>

<script setup lang="ts">
import { IconShareFill } from "birdpaper-icon";
</script>
```
