import type { App } from 'vue';
import _IconArrowDownDoubleFill from './icon-arrow-down-double-fill.vue';

const IconArrowDownDoubleFill = Object.assign(_IconArrowDownDoubleFill, {
  install: (app: App) => {
    app.component(_IconArrowDownDoubleFill.name, _IconArrowDownDoubleFill);
  }
});

export default IconArrowDownDoubleFill;