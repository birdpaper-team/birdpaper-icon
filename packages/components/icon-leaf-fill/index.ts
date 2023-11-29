import type { App } from 'vue';
import _IconLeafFill from './icon-leaf-fill.vue';

const IconLeafFill = Object.assign(_IconLeafFill, {
  install: (app: App) => {
    app.component(_IconLeafFill.name, _IconLeafFill);
  }
});

export default IconLeafFill;