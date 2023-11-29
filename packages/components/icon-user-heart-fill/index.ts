import type { App } from 'vue';
import _IconUserHeartFill from './icon-user-heart-fill.vue';

const IconUserHeartFill = Object.assign(_IconUserHeartFill, {
  install: (app: App) => {
    app.component(_IconUserHeartFill.name, _IconUserHeartFill);
  }
});

export default IconUserHeartFill;