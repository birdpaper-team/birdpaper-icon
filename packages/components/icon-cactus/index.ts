import type { App } from 'vue';
import _IconCactus from './icon-cactus.vue';

const IconCactus = Object.assign(_IconCactus, {
  install: (app: App) => {
    app.component(_IconCactus.name, _IconCactus);
  }
});

export default IconCactus;