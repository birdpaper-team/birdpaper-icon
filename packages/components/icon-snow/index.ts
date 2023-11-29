import type { App } from 'vue';
import _IconSnow from './icon-snow.vue';

const IconSnow = Object.assign(_IconSnow, {
  install: (app: App) => {
    app.component(_IconSnow.name, _IconSnow);
  }
});

export default IconSnow;