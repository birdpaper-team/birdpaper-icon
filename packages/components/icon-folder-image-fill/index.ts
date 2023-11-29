import type { App } from 'vue';
import _IconFolderImageFill from './icon-folder-image-fill.vue';

const IconFolderImageFill = Object.assign(_IconFolderImageFill, {
  install: (app: App) => {
    app.component(_IconFolderImageFill.name, _IconFolderImageFill);
  }
});

export default IconFolderImageFill;