import type { App } from 'vue';
import _IconCheck from './icon-check.vue';

const IconCheck = Object.assign(_IconCheck, {
  install: (app: App) => {
    app.component(_IconCheck.name, _IconCheck);
  }
});

export default IconCheck;