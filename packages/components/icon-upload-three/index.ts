import type { App } from 'vue';
import _IconUploadThree from './icon-upload-three.vue';

const IconUploadThree = Object.assign(_IconUploadThree, {
  install: (app: App) => {
    app.component(_IconUploadThree.name, _IconUploadThree);
  }
});

export default IconUploadThree;