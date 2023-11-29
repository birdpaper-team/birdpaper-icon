import type { App } from 'vue';
import _IconUploadWeb from './icon-upload-web.vue';

const IconUploadWeb = Object.assign(_IconUploadWeb, {
  install: (app: App) => {
    app.component(_IconUploadWeb.name, _IconUploadWeb);
  }
});

export default IconUploadWeb;