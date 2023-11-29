import type { App } from 'vue';
import _IconInvertLeft from './icon-invert-left.vue';

const IconInvertLeft = Object.assign(_IconInvertLeft, {
  install: (app: App) => {
    app.component(_IconInvertLeft.name, _IconInvertLeft);
  }
});

export default IconInvertLeft;