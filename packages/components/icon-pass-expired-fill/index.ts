import type { App } from 'vue';
import _IconPassExpiredFill from './icon-pass-expired-fill.vue';

const IconPassExpiredFill = Object.assign(_IconPassExpiredFill, {
  install: (app: App) => {
    app.component(_IconPassExpiredFill.name, _IconPassExpiredFill);
  }
});

export default IconPassExpiredFill;