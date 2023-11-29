import type { App } from 'vue';
import _IconToolsFill from './icon-tools-fill.vue';

const IconToolsFill = Object.assign(_IconToolsFill, {
  install: (app: App) => {
    app.component(_IconToolsFill.name, _IconToolsFill);
  }
});

export default IconToolsFill;