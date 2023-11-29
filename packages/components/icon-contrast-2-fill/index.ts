import type { App } from 'vue';
import _IconContrast2Fill from './icon-contrast-2-fill.vue';

const IconContrast2Fill = Object.assign(_IconContrast2Fill, {
  install: (app: App) => {
    app.component(_IconContrast2Fill.name, _IconContrast2Fill);
  }
});

export default IconContrast2Fill;