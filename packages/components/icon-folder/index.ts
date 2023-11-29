import type { App } from 'vue';
import _IconFolder from './icon-folder.vue';

const IconFolder = Object.assign(_IconFolder, {
  install: (app: App) => {
    app.component(_IconFolder.name, _IconFolder);
  }
});

export default IconFolder;