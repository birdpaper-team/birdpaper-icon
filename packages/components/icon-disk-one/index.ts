import type { App } from 'vue';
import _IconDiskOne from './icon-disk-one.vue';

const IconDiskOne = Object.assign(_IconDiskOne, {
  install: (app: App) => {
    app.component(_IconDiskOne.name, _IconDiskOne);
  }
});

export default IconDiskOne;