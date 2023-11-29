import type { App } from 'vue';
import _IconShareSys from './icon-share-sys.vue';

const IconShareSys = Object.assign(_IconShareSys, {
  install: (app: App) => {
    app.component(_IconShareSys.name, _IconShareSys);
  }
});

export default IconShareSys;