import type { App } from 'vue';
import _IconCollectionFiles from './icon-collection-files.vue';

const IconCollectionFiles = Object.assign(_IconCollectionFiles, {
  install: (app: App) => {
    app.component(_IconCollectionFiles.name, _IconCollectionFiles);
  }
});

export default IconCollectionFiles;