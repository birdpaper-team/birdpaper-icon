import type { App } from 'vue';
import _IconToRight from './icon-to-right.vue';

const IconToRight = Object.assign(_IconToRight, {
  install: (app: App) => {
    app.component(_IconToRight.name, _IconToRight);
  }
});

export default IconToRight;