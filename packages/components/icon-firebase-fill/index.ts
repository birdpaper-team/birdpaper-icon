import type { App } from 'vue';
import _IconFirebaseFill from './icon-firebase-fill.vue';

const IconFirebaseFill = Object.assign(_IconFirebaseFill, {
  install: (app: App) => {
    app.component(_IconFirebaseFill.name, _IconFirebaseFill);
  }
});

export default IconFirebaseFill;