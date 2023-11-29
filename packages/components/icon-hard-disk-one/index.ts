import type { App } from 'vue';
import _IconHardDiskOne from './icon-hard-disk-one.vue';

const IconHardDiskOne = Object.assign(_IconHardDiskOne, {
  install: (app: App) => {
    app.component(_IconHardDiskOne.name, _IconHardDiskOne);
  }
});

export default IconHardDiskOne;