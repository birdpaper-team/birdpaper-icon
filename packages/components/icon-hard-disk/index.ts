import type { App } from 'vue';
import _IconHardDisk from './icon-hard-disk.vue';

const IconHardDisk = Object.assign(_IconHardDisk, {
  install: (app: App) => {
    app.component(_IconHardDisk.name, _IconHardDisk);
  }
});

export default IconHardDisk;