import type { App } from 'vue';
import _IconCornerUpLeftFill from './icon-corner-up-left-fill.vue';

const IconCornerUpLeftFill = Object.assign(_IconCornerUpLeftFill, {
  install: (app: App) => {
    app.component(_IconCornerUpLeftFill.name, _IconCornerUpLeftFill);
  }
});

export default IconCornerUpLeftFill;