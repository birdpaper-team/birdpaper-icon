import type { App } from 'vue';
import _IconFoldersFill from './icon-folders-fill.vue';

const IconFoldersFill = Object.assign(_IconFoldersFill, {
  install: (app: App) => {
    app.component(_IconFoldersFill.name, _IconFoldersFill);
  }
});

export default IconFoldersFill;