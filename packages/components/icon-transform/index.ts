import type { App } from 'vue';
import _IconTransform from './icon-transform.vue';

const IconTransform = Object.assign(_IconTransform, {
  install: (app: App) => {
    app.component(_IconTransform.name, _IconTransform);
  }
});

export default IconTransform;