import type { App } from 'vue';
import _IconSsd from './icon-ssd.vue';

const IconSsd = Object.assign(_IconSsd, {
  install: (app: App) => {
    app.component(_IconSsd.name, _IconSsd);
  }
});

export default IconSsd;