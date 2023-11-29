import type { App } from 'vue';
import _IconFolderShieldFill from './icon-folder-shield-fill.vue';

const IconFolderShieldFill = Object.assign(_IconFolderShieldFill, {
  install: (app: App) => {
    app.component(_IconFolderShieldFill.name, _IconFolderShieldFill);
  }
});

export default IconFolderShieldFill;