import type { App } from 'vue';
import _IconPantoneFill from './icon-pantone-fill.vue';

const IconPantoneFill = Object.assign(_IconPantoneFill, {
  install: (app: App) => {
    app.component(_IconPantoneFill.name, _IconPantoneFill);
  }
});

export default IconPantoneFill;