import type { App } from 'vue';
import _IconUniversal from './icon-universal.vue';

const IconUniversal = Object.assign(_IconUniversal, {
  install: (app: App) => {
    app.component(_IconUniversal.name, _IconUniversal);
  }
});

export default IconUniversal;