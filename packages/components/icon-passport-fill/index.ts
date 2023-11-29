import type { App } from 'vue';
import _IconPassportFill from './icon-passport-fill.vue';

const IconPassportFill = Object.assign(_IconPassportFill, {
  install: (app: App) => {
    app.component(_IconPassportFill.name, _IconPassportFill);
  }
});

export default IconPassportFill;