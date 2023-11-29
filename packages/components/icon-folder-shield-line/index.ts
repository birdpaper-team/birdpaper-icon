import type { App } from 'vue';
import _IconFolderShieldLine from './icon-folder-shield-line.vue';

const IconFolderShieldLine = Object.assign(_IconFolderShieldLine, {
  install: (app: App) => {
    app.component(_IconFolderShieldLine.name, _IconFolderShieldLine);
  }
});

export default IconFolderShieldLine;