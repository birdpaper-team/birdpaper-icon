import type { App } from 'vue';
import _IconUDisk from './icon-u-disk.vue';

const IconUDisk = Object.assign(_IconUDisk, {
  install: (app: App) => {
    app.component(_IconUDisk.name, _IconUDisk);
  }
});

export default IconUDisk;