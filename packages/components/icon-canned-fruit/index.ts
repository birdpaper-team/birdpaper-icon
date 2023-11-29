import type { App } from 'vue';
import _IconCannedFruit from './icon-canned-fruit.vue';

const IconCannedFruit = Object.assign(_IconCannedFruit, {
  install: (app: App) => {
    app.component(_IconCannedFruit.name, _IconCannedFruit);
  }
});

export default IconCannedFruit;