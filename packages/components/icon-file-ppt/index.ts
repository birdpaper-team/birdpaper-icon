import type { App } from 'vue';
import _IconFilePpt from './icon-file-ppt.vue';

const IconFilePpt = Object.assign(_IconFilePpt, {
  install: (app: App) => {
    app.component(_IconFilePpt.name, _IconFilePpt);
  }
});

export default IconFilePpt;