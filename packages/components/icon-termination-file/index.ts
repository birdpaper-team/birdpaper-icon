import type { App } from 'vue';
import _IconTerminationFile from './icon-termination-file.vue';

const IconTerminationFile = Object.assign(_IconTerminationFile, {
  install: (app: App) => {
    app.component(_IconTerminationFile.name, _IconTerminationFile);
  }
});

export default IconTerminationFile;