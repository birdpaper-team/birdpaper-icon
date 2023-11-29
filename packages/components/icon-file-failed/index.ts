import type { App } from 'vue';
import _IconFileFailed from './icon-file-failed.vue';

const IconFileFailed = Object.assign(_IconFileFailed, {
  install: (app: App) => {
    app.component(_IconFileFailed.name, _IconFileFailed);
  }
});

export default IconFileFailed;