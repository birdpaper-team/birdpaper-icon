import type { App } from 'vue';
import _IconFolderFocus from './icon-folder-focus.vue';

const IconFolderFocus = Object.assign(_IconFolderFocus, {
  install: (app: App) => {
    app.component(_IconFolderFocus.name, _IconFolderFocus);
  }
});

export default IconFolderFocus;