import type { App } from 'vue';
import _IconFish from './icon-fish.vue';

const IconFish = Object.assign(_IconFish, {
  install: (app: App) => {
    app.component(_IconFish.name, _IconFish);
  }
});

export default IconFish;