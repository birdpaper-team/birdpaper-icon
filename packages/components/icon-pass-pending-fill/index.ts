import type { App } from 'vue';
import _IconPassPendingFill from './icon-pass-pending-fill.vue';

const IconPassPendingFill = Object.assign(_IconPassPendingFill, {
  install: (app: App) => {
    app.component(_IconPassPendingFill.name, _IconPassPendingFill);
  }
});

export default IconPassPendingFill;