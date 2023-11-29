import type { App } from 'vue';
import _IconCompass from './icon-compass.vue';

const IconCompass = Object.assign(_IconCompass, {
  install: (app: App) => {
    app.component(_IconCompass.name, _IconCompass);
  }
});

export default IconCompass;