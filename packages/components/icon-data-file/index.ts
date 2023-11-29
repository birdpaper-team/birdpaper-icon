import type { App } from 'vue';
import _IconDataFile from './icon-data-file.vue';

const IconDataFile = Object.assign(_IconDataFile, {
  install: (app: App) => {
    app.component(_IconDataFile.name, _IconDataFile);
  }
});

export default IconDataFile;