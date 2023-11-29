import type { App } from 'vue';
import _IconSmartphoneFill from './icon-smartphone-fill.vue';

const IconSmartphoneFill = Object.assign(_IconSmartphoneFill, {
  install: (app: App) => {
    app.component(_IconSmartphoneFill.name, _IconSmartphoneFill);
  }
});

export default IconSmartphoneFill;