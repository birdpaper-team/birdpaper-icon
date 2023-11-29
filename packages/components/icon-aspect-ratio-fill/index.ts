import type { App } from 'vue';
import _IconAspectRatioFill from './icon-aspect-ratio-fill.vue';

const IconAspectRatioFill = Object.assign(_IconAspectRatioFill, {
  install: (app: App) => {
    app.component(_IconAspectRatioFill.name, _IconAspectRatioFill);
  }
});

export default IconAspectRatioFill;