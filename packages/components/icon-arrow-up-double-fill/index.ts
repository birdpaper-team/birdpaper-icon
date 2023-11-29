import type { App } from 'vue';
import _IconArrowUpDoubleFill from './icon-arrow-up-double-fill.vue';

const IconArrowUpDoubleFill = Object.assign(_IconArrowUpDoubleFill, {
  install: (app: App) => {
    app.component(_IconArrowUpDoubleFill.name, _IconArrowUpDoubleFill);
  }
});

export default IconArrowUpDoubleFill;