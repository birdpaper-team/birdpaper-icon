import type { App } from 'vue';
import _IconRegisteredFill from './icon-registered-fill.vue';

const IconRegisteredFill = Object.assign(_IconRegisteredFill, {
  install: (app: App) => {
    app.component(_IconRegisteredFill.name, _IconRegisteredFill);
  }
});

export default IconRegisteredFill;