import type { App } from 'vue';
import _IconDoubleLeft from './icon-double-left.vue';

const IconDoubleLeft = Object.assign(_IconDoubleLeft, {
  install: (app: App) => {
    app.component(_IconDoubleLeft.name, _IconDoubleLeft);
  }
});

export default IconDoubleLeft;