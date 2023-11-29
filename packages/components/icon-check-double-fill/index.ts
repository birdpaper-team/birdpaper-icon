import type { App } from 'vue';
import _IconCheckDoubleFill from './icon-check-double-fill.vue';

const IconCheckDoubleFill = Object.assign(_IconCheckDoubleFill, {
  install: (app: App) => {
    app.component(_IconCheckDoubleFill.name, _IconCheckDoubleFill);
  }
});

export default IconCheckDoubleFill;