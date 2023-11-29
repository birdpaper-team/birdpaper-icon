import type { App } from 'vue';
import _IconInvertRight from './icon-invert-right.vue';

const IconInvertRight = Object.assign(_IconInvertRight, {
  install: (app: App) => {
    app.component(_IconInvertRight.name, _IconInvertRight);
  }
});

export default IconInvertRight;