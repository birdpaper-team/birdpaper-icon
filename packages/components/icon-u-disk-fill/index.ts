import type { App } from 'vue';
import _IconUDiskFill from './icon-u-disk-fill.vue';

const IconUDiskFill = Object.assign(_IconUDiskFill, {
  install: (app: App) => {
    app.component(_IconUDiskFill.name, _IconUDiskFill);
  }
});

export default IconUDiskFill;