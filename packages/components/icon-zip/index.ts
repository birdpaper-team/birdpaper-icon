import type { App } from 'vue';
import _IconZip from './icon-zip.vue';

const IconZip = Object.assign(_IconZip, {
  install: (app: App) => {
    app.component(_IconZip.name, _IconZip);
  }
});

export default IconZip;