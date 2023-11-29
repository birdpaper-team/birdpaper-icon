import type { App } from 'vue';
import _IconCornerUpLeftDoubleFill from './icon-corner-up-left-double-fill.vue';

const IconCornerUpLeftDoubleFill = Object.assign(_IconCornerUpLeftDoubleFill, {
  install: (app: App) => {
    app.component(_IconCornerUpLeftDoubleFill.name, _IconCornerUpLeftDoubleFill);
  }
});

export default IconCornerUpLeftDoubleFill;