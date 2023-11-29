import type { App } from 'vue';
import _IconContrast from './icon-contrast.vue';

const IconContrast = Object.assign(_IconContrast, {
  install: (app: App) => {
    app.component(_IconContrast.name, _IconContrast);
  }
});

export default IconContrast;