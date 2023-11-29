import type { App } from 'vue';
import _IconWorkbench from './icon-workbench.vue';

const IconWorkbench = Object.assign(_IconWorkbench, {
  install: (app: App) => {
    app.component(_IconWorkbench.name, _IconWorkbench);
  }
});

export default IconWorkbench;