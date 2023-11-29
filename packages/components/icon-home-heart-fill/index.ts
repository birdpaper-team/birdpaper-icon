import type { App } from 'vue';
import _IconHomeHeartFill from './icon-home-heart-fill.vue';

const IconHomeHeartFill = Object.assign(_IconHomeHeartFill, {
  install: (app: App) => {
    app.component(_IconHomeHeartFill.name, _IconHomeHeartFill);
  }
});

export default IconHomeHeartFill;