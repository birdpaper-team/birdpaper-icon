import type { App } from 'vue';
import _IconInvalidFiles from './icon-invalid-files.vue';

const IconInvalidFiles = Object.assign(_IconInvalidFiles, {
  install: (app: App) => {
    app.component(_IconInvalidFiles.name, _IconInvalidFiles);
  }
});

export default IconInvalidFiles;