import type { App } from 'vue';
import _IconFolderKeyholeLine from './icon-folder-keyhole-line.vue';

const IconFolderKeyholeLine = Object.assign(_IconFolderKeyholeLine, {
  install: (app: App) => {
    app.component(_IconFolderKeyholeLine.name, _IconFolderKeyholeLine);
  }
});

export default IconFolderKeyholeLine;