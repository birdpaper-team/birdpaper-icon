import type { App } from 'vue';
import _IconAries from './icon-aries.vue';

const IconAries = Object.assign(_IconAries, {
  install: (app: App) => {
    app.component(_IconAries.name, _IconAries);
  }
});

export default IconAries;