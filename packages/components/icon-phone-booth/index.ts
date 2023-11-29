import type { App } from 'vue';
import _IconPhoneBooth from './icon-phone-booth.vue';

const IconPhoneBooth = Object.assign(_IconPhoneBooth, {
  install: (app: App) => {
    app.component(_IconPhoneBooth.name, _IconPhoneBooth);
  }
});

export default IconPhoneBooth;