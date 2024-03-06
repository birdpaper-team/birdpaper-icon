import type { App } from 'vue';
import _IconApps2AddFill from './icon-apps-2-add-fill.vue';

const IconApps2AddFill = Object.assign(_IconApps2AddFill, {
  install: (app: App) => {
    app.component(_IconApps2AddFill.name, _IconApps2AddFill);
  }
});

export default IconApps2AddFill;