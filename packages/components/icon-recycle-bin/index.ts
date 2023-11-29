import type { App } from 'vue';
import _IconRecycleBin from './icon-recycle-bin.vue';

const IconRecycleBin = Object.assign(_IconRecycleBin, {
  install: (app: App) => {
    app.component(_IconRecycleBin.name, _IconRecycleBin);
  }
});

export default IconRecycleBin;