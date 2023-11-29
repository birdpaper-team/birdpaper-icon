import type { App } from 'vue';
import _IconPhoneFill from './icon-phone-fill.vue';

const IconPhoneFill = Object.assign(_IconPhoneFill, {
  install: (app: App) => {
    app.component(_IconPhoneFill.name, _IconPhoneFill);
  }
});

export default IconPhoneFill;