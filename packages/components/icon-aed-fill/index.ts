import type { App } from 'vue';
import _IconAedFill from './icon-aed-fill.vue';

const IconAedFill = Object.assign(_IconAedFill, {
  install: (app: App) => {
    app.component(_IconAedFill.name, _IconAedFill);
  }
});

export default IconAedFill;