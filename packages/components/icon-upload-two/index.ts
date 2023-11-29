import type { App } from 'vue';
import _IconUploadTwo from './icon-upload-two.vue';

const IconUploadTwo = Object.assign(_IconUploadTwo, {
  install: (app: App) => {
    app.component(_IconUploadTwo.name, _IconUploadTwo);
  }
});

export default IconUploadTwo;