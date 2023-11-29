import type { App } from 'vue';
import _IconFolderShield2Line from './icon-folder-shield-2-line.vue';

const IconFolderShield2Line = Object.assign(_IconFolderShield2Line, {
  install: (app: App) => {
    app.component(_IconFolderShield2Line.name, _IconFolderShield2Line);
  }
});

export default IconFolderShield2Line;