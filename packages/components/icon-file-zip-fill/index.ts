import type { App } from 'vue';
import _IconFileZipFill from './icon-file-zip-fill.vue';

const IconFileZipFill = Object.assign(_IconFileZipFill, {
  install: (app: App) => {
    app.component(_IconFileZipFill.name, _IconFileZipFill);
  }
});

export default IconFileZipFill;