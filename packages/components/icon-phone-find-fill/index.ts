import type { App } from 'vue';
import _IconPhoneFindFill from './icon-phone-find-fill.vue';

const IconPhoneFindFill = Object.assign(_IconPhoneFindFill, {
  install: (app: App) => {
    app.component(_IconPhoneFindFill.name, _IconPhoneFindFill);
  }
});

export default IconPhoneFindFill;