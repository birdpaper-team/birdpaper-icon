import type { App } from 'vue';
import _IconFolderSettingsFill from './icon-folder-settings-fill.vue';

const IconFolderSettingsFill = Object.assign(_IconFolderSettingsFill, {
  install: (app: App) => {
    app.component(_IconFolderSettingsFill.name, _IconFolderSettingsFill);
  }
});

export default IconFolderSettingsFill;