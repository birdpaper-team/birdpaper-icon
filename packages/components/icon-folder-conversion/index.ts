import type { App } from 'vue';
import _IconFolderConversion from './icon-folder-conversion.vue';

const IconFolderConversion = Object.assign(_IconFolderConversion, {
  install: (app: App) => {
    app.component(_IconFolderConversion.name, _IconFolderConversion);
  }
});

export default IconFolderConversion;