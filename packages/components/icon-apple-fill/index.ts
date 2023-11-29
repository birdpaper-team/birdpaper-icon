import type { App } from 'vue';
import _IconAppleFill from './icon-apple-fill.vue';

const IconAppleFill = Object.assign(_IconAppleFill, {
  install: (app: App) => {
    app.component(_IconAppleFill.name, _IconAppleFill);
  }
});

export default IconAppleFill;