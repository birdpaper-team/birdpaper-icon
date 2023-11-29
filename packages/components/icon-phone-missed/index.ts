import type { App } from 'vue';
import _IconPhoneMissed from './icon-phone-missed.vue';

const IconPhoneMissed = Object.assign(_IconPhoneMissed, {
  install: (app: App) => {
    app.component(_IconPhoneMissed.name, _IconPhoneMissed);
  }
});

export default IconPhoneMissed;