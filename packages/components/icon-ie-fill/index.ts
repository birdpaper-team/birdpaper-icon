import type { App } from 'vue';
import _IconIeFill from './icon-ie-fill.vue';

const IconIeFill = Object.assign(_IconIeFill, {
  install: (app: App) => {
    app.component(_IconIeFill.name, _IconIeFill);
  }
});

export default IconIeFill;