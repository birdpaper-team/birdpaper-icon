import type { App } from 'vue';
import _IconAsterisk from './icon-asterisk.vue';

const IconAsterisk = Object.assign(_IconAsterisk, {
  install: (app: App) => {
    app.component(_IconAsterisk.name, _IconAsterisk);
  }
});

export default IconAsterisk;