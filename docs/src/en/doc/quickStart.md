# Quick Start

This guide provides quick installation and usage steps.

## Installation

::: code-group

```sh [npm]
npm install birdpaper-icon
```

```sh [yarn]
yarn add birdpaper-icon
```

```sh [pnpm]
pnpm add birdpaper-icon
```

:::

## Import

Import in your `main.js` or other entry file:

```js
import { createApp } from "vue";
import App from "./App.vue";

import BirdpaperIcon from "birdpaper-icon";
import "birdpaper-icon/dist/index.css";

const app = createApp(App);
app.use(BirdpaperIcon).mount("#app");
```

## Usage

### Global Registration

After using `app.use(BirdpaperIcon)`, all icon components are globally registered and can be used directly in templates:

```vue
<template>
  <IconVuejsLine />
</template>
```

### On-demand Import

Import specific icons to enable tree-shaking:

```vue
<template>
  <IconShareFill />
</template>

<script setup lang="ts">
import { IconShareFill } from "birdpaper-icon";
</script>
```

### Dynamic Component

```vue
<template>
  <component :is="IconShareFill" />
</template>

<script setup lang="ts">
import { IconShareFill } from "birdpaper-icon";
</script>
```

<script setup lang="ts">
import { PropItem } from "../../.vitepress/components/api-block/src/types";

const props: PropItem[] = [
  {
    name: "size",
    remark: "Icon size",
    type: ["String"],
    default: "18px",
  },
  { name: "fill", remark: "Fill color", type: ["String"], default: "#595959" },
  { name: "spin", remark: "Continuous rotation", type: ["Boolean"], default: "false" },
  { name: "rotate", remark: "Rotation angle", type: ["Number"] },
]

const appends: PropItem[] = [
  {
    name: "iconType",
    remark: "Icon category array",
    type: ["String[]"],
  },
  { name: "iconInfo", remark: "Icon enumeration", type: ["Array<{name:string, list:string[]}>"] },
  { name: "iconNumbers", remark: "Total icon count", type: ["Number"] },
]
</script>

## Icon Properties

<api-block type="prop" :data="props" />

## Additional Exports

```js
import { iconType, iconInfo, iconNumbers } from "birdpaper-icon";
```

<api-block type="prop" :data="appends" />
