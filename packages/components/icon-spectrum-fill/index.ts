import type { App } from 'vue';
import _IconSpectrumFill from './icon-spectrum-fill.vue';

const IconSpectrumFill = Object.assign(_IconSpectrumFill, {
  install: (app: App) => {
    app.component(_IconSpectrumFill.name, _IconSpectrumFill);
  }
});

export default IconSpectrumFill;