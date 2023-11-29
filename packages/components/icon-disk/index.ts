import type { App } from 'vue';
import _IconDisk from './icon-disk.vue';

const IconDisk = Object.assign(_IconDisk, {
  install: (app: App) => {
    app.component(_IconDisk.name, _IconDisk);
  }
});

export default IconDisk;