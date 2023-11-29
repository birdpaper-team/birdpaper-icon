import type { App } from 'vue';
import _IconFloat from './icon-float.vue';

const IconFloat = Object.assign(_IconFloat, {
  install: (app: App) => {
    app.component(_IconFloat.name, _IconFloat);
  }
});

export default IconFloat;