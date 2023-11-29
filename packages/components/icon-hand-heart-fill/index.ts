import type { App } from 'vue';
import _IconHandHeartFill from './icon-hand-heart-fill.vue';

const IconHandHeartFill = Object.assign(_IconHandHeartFill, {
  install: (app: App) => {
    app.component(_IconHandHeartFill.name, _IconHandHeartFill);
  }
});

export default IconHandHeartFill;