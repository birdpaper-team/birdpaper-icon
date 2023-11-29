import type { App } from 'vue';
import _IconArrowRightDoubleFill from './icon-arrow-right-double-fill.vue';

const IconArrowRightDoubleFill = Object.assign(_IconArrowRightDoubleFill, {
  install: (app: App) => {
    app.component(_IconArrowRightDoubleFill.name, _IconArrowRightDoubleFill);
  }
});

export default IconArrowRightDoubleFill;