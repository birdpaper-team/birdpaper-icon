import type { App } from 'vue';
import _IconFolderSettingsLine from './icon-folder-settings-line.vue';

const IconFolderSettingsLine = Object.assign(_IconFolderSettingsLine, {
  install: (app: App) => {
    app.component(_IconFolderSettingsLine.name, _IconFolderSettingsLine);
  }
});

export default IconFolderSettingsLine;