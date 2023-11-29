import type { App } from 'vue';
import _IconFolderVideoFill from './icon-folder-video-fill.vue';

const IconFolderVideoFill = Object.assign(_IconFolderVideoFill, {
  install: (app: App) => {
    app.component(_IconFolderVideoFill.name, _IconFolderVideoFill);
  }
});

export default IconFolderVideoFill;