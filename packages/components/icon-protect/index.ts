import type { App } from 'vue';
import _IconProtect from './icon-protect.vue';

const IconProtect = Object.assign(_IconProtect, {
  install: (app: App) => {
    app.component(_IconProtect.name, _IconProtect);
  }
});

export default IconProtect;