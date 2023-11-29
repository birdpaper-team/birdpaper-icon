import type { App } from 'vue';
import _IconFileHwpFill from './icon-file-hwp-fill.vue';

const IconFileHwpFill = Object.assign(_IconFileHwpFill, {
  install: (app: App) => {
    app.component(_IconFileHwpFill.name, _IconFileHwpFill);
  }
});

export default IconFileHwpFill;