import type { App } from 'vue';
import _IconFileZip from './icon-file-zip.vue';

const IconFileZip = Object.assign(_IconFileZip, {
  install: (app: App) => {
    app.component(_IconFileZip.name, _IconFileZip);
  }
});

export default IconFileZip;