import type { App } from 'vue';
import _IconArrowLeftDoubleFill from './icon-arrow-left-double-fill.vue';

const IconArrowLeftDoubleFill = Object.assign(_IconArrowLeftDoubleFill, {
  install: (app: App) => {
    app.component(_IconArrowLeftDoubleFill.name, _IconArrowLeftDoubleFill);
  }
});

export default IconArrowLeftDoubleFill;