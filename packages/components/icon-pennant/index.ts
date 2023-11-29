import type { App } from 'vue';
import _IconPennant from './icon-pennant.vue';

const IconPennant = Object.assign(_IconPennant, {
  install: (app: App) => {
    app.component(_IconPennant.name, _IconPennant);
  }
});

export default IconPennant;