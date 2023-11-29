import type { App } from 'vue';
import _IconXboxFill from './icon-xbox-fill.vue';

const IconXboxFill = Object.assign(_IconXboxFill, {
  install: (app: App) => {
    app.component(_IconXboxFill.name, _IconXboxFill);
  }
});

export default IconXboxFill;