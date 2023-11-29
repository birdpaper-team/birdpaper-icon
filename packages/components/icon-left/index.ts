import type { App } from 'vue';
import _IconLeft from './icon-left.vue';

const IconLeft = Object.assign(_IconLeft, {
  install: (app: App) => {
    app.component(_IconLeft.name, _IconLeft);
  }
});

export default IconLeft;