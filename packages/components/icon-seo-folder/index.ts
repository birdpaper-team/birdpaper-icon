import type { App } from 'vue';
import _IconSeoFolder from './icon-seo-folder.vue';

const IconSeoFolder = Object.assign(_IconSeoFolder, {
  install: (app: App) => {
    app.component(_IconSeoFolder.name, _IconSeoFolder);
  }
});

export default IconSeoFolder;