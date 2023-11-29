import type { App } from 'vue';
import _IconIndustrialScales from './icon-industrial-scales.vue';

const IconIndustrialScales = Object.assign(_IconIndustrialScales, {
  install: (app: App) => {
    app.component(_IconIndustrialScales.name, _IconIndustrialScales);
  }
});

export default IconIndustrialScales;