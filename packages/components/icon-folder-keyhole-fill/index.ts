import type { App } from 'vue';
import _IconFolderKeyholeFill from './icon-folder-keyhole-fill.vue';

const IconFolderKeyholeFill = Object.assign(_IconFolderKeyholeFill, {
  install: (app: App) => {
    app.component(_IconFolderKeyholeFill.name, _IconFolderKeyholeFill);
  }
});

export default IconFolderKeyholeFill;