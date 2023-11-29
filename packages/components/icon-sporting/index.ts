import type { App } from 'vue';
import _IconSporting from './icon-sporting.vue';

const IconSporting = Object.assign(_IconSporting, {
  install: (app: App) => {
    app.component(_IconSporting.name, _IconSporting);
  }
});

export default IconSporting;