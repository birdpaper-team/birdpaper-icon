import type { App } from 'vue';
import _IconPhoneLockFill from './icon-phone-lock-fill.vue';

const IconPhoneLockFill = Object.assign(_IconPhoneLockFill, {
  install: (app: App) => {
    app.component(_IconPhoneLockFill.name, _IconPhoneLockFill);
  }
});

export default IconPhoneLockFill;