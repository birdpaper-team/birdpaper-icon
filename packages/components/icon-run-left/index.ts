import type { App } from 'vue';
import _IconRunLeft from './icon-run-left.vue';

const IconRunLeft = Object.assign(_IconRunLeft, {
  install: (app: App) => {
    app.component(_IconRunLeft.name, _IconRunLeft);
  }
});

export default IconRunLeft;