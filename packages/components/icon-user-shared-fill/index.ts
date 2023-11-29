import type { App } from 'vue';
import _IconUserSharedFill from './icon-user-shared-fill.vue';

const IconUserSharedFill = Object.assign(_IconUserSharedFill, {
  install: (app: App) => {
    app.component(_IconUserSharedFill.name, _IconUserSharedFill);
  }
});

export default IconUserSharedFill;