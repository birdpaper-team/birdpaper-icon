import type { App } from 'vue';
import _IconFolderCloseFill from './icon-folder-close-fill.vue';

const IconFolderCloseFill = Object.assign(_IconFolderCloseFill, {
  install: (app: App) => {
    app.component(_IconFolderCloseFill.name, _IconFolderCloseFill);
  }
});

export default IconFolderCloseFill;