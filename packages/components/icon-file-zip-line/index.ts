import type { App } from 'vue';
import _IconFileZipLine from './icon-file-zip-line.vue';

const IconFileZipLine = Object.assign(_IconFileZipLine, {
  install: (app: App) => {
    app.component(_IconFileZipLine.name, _IconFileZipLine);
  }
});

export default IconFileZipLine;