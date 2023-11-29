import type { App } from 'vue';
import _IconUploadOne from './icon-upload-one.vue';

const IconUploadOne = Object.assign(_IconUploadOne, {
  install: (app: App) => {
    app.component(_IconUploadOne.name, _IconUploadOne);
  }
});

export default IconUploadOne;