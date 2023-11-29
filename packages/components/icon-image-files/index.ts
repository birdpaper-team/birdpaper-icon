import type { App } from 'vue';
import _IconImageFiles from './icon-image-files.vue';

const IconImageFiles = Object.assign(_IconImageFiles, {
  install: (app: App) => {
    app.component(_IconImageFiles.name, _IconImageFiles);
  }
});

export default IconImageFiles;