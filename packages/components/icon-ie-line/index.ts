import type { App } from 'vue';
import _IconIeLine from './icon-ie-line.vue';

const IconIeLine = Object.assign(_IconIeLine, {
  install: (app: App) => {
    app.component(_IconIeLine.name, _IconIeLine);
  }
});

export default IconIeLine;