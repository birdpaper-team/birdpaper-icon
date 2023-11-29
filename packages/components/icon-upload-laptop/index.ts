import type { App } from 'vue';
import _IconUploadLaptop from './icon-upload-laptop.vue';

const IconUploadLaptop = Object.assign(_IconUploadLaptop, {
  install: (app: App) => {
    app.component(_IconUploadLaptop.name, _IconUploadLaptop);
  }
});

export default IconUploadLaptop;