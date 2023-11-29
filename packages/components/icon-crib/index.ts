import type { App } from 'vue';
import _IconCrib from './icon-crib.vue';

const IconCrib = Object.assign(_IconCrib, {
  install: (app: App) => {
    app.component(_IconCrib.name, _IconCrib);
  }
});

export default IconCrib;