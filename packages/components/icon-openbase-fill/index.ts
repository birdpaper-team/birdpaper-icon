import type { App } from 'vue';
import _IconOpenbaseFill from './icon-openbase-fill.vue';

const IconOpenbaseFill = Object.assign(_IconOpenbaseFill, {
  install: (app: App) => {
    app.component(_IconOpenbaseFill.name, _IconOpenbaseFill);
  }
});

export default IconOpenbaseFill;