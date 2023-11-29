import type { App } from 'vue';
import _IconToLeft from './icon-to-left.vue';

const IconToLeft = Object.assign(_IconToLeft, {
  install: (app: App) => {
    app.component(_IconToLeft.name, _IconToLeft);
  }
});

export default IconToLeft;