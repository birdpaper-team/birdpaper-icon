import type { App } from 'vue';
import _IconCake from './icon-cake.vue';

const IconCake = Object.assign(_IconCake, {
  install: (app: App) => {
    app.component(_IconCake.name, _IconCake);
  }
});

export default IconCake;