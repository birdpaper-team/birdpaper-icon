import type { App } from 'vue';
import _IconFileUnknowFill from './icon-file-unknow-fill.vue';

const IconFileUnknowFill = Object.assign(_IconFileUnknowFill, {
  install: (app: App) => {
    app.component(_IconFileUnknowFill.name, _IconFileUnknowFill);
  }
});

export default IconFileUnknowFill;