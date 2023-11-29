import type { App } from 'vue';
import _IconMaya from './icon-maya.vue';

const IconMaya = Object.assign(_IconMaya, {
  install: (app: App) => {
    app.component(_IconMaya.name, _IconMaya);
  }
});

export default IconMaya;