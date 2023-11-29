import type { App } from 'vue';
import _IconFolderQuality from './icon-folder-quality.vue';

const IconFolderQuality = Object.assign(_IconFolderQuality, {
  install: (app: App) => {
    app.component(_IconFolderQuality.name, _IconFolderQuality);
  }
});

export default IconFolderQuality;