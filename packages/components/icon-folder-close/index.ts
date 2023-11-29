import type { App } from 'vue';
import _IconFolderClose from './icon-folder-close.vue';

const IconFolderClose = Object.assign(_IconFolderClose, {
  install: (app: App) => {
    app.component(_IconFolderClose.name, _IconFolderClose);
  }
});

export default IconFolderClose;