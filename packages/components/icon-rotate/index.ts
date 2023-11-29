import type { App } from 'vue';
import _IconRotate from './icon-rotate.vue';

const IconRotate = Object.assign(_IconRotate, {
  install: (app: App) => {
    app.component(_IconRotate.name, _IconRotate);
  }
});

export default IconRotate;