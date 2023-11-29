import type { App } from 'vue';
import _IconCornerUpRightDoubleFill from './icon-corner-up-right-double-fill.vue';

const IconCornerUpRightDoubleFill = Object.assign(_IconCornerUpRightDoubleFill, {
  install: (app: App) => {
    app.component(_IconCornerUpRightDoubleFill.name, _IconCornerUpRightDoubleFill);
  }
});

export default IconCornerUpRightDoubleFill;