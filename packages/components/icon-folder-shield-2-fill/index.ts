import type { App } from 'vue';
import _IconFolderShield2Fill from './icon-folder-shield-2-fill.vue';

const IconFolderShield2Fill = Object.assign(_IconFolderShield2Fill, {
  install: (app: App) => {
    app.component(_IconFolderShield2Fill.name, _IconFolderShield2Fill);
  }
});

export default IconFolderShield2Fill;