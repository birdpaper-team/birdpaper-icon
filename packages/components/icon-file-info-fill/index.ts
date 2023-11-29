import type { App } from 'vue';
import _IconFileInfoFill from './icon-file-info-fill.vue';

const IconFileInfoFill = Object.assign(_IconFileInfoFill, {
  install: (app: App) => {
    app.component(_IconFileInfoFill.name, _IconFileInfoFill);
  }
});

export default IconFileInfoFill;