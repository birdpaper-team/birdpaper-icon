import type { App } from 'vue';
import _IconFolderSettingsOne from './icon-folder-settings-one.vue';

const IconFolderSettingsOne = Object.assign(_IconFolderSettingsOne, {
  install: (app: App) => {
    app.component(_IconFolderSettingsOne.name, _IconFolderSettingsOne);
  }
});

export default IconFolderSettingsOne;