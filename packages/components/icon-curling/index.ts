import type { App } from 'vue';
import _IconCurling from './icon-curling.vue';

const IconCurling = Object.assign(_IconCurling, {
  install: (app: App) => {
    app.component(_IconCurling.name, _IconCurling);
  }
});

export default IconCurling;