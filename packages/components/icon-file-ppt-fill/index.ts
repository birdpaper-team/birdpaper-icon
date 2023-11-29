import type { App } from 'vue';
import _IconFilePptFill from './icon-file-ppt-fill.vue';

const IconFilePptFill = Object.assign(_IconFilePptFill, {
  install: (app: App) => {
    app.component(_IconFilePptFill.name, _IconFilePptFill);
  }
});

export default IconFilePptFill;