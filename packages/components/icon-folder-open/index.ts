import type { App } from 'vue';
import _IconFolderOpen from './icon-folder-open.vue';

const IconFolderOpen = Object.assign(_IconFolderOpen, {
  install: (app: App) => {
    app.component(_IconFolderOpen.name, _IconFolderOpen);
  }
});

export default IconFolderOpen;