import type { App } from 'vue';
import _IconFileCloudFill from './icon-file-cloud-fill.vue';

const IconFileCloudFill = Object.assign(_IconFileCloudFill, {
  install: (app: App) => {
    app.component(_IconFileCloudFill.name, _IconFileCloudFill);
  }
});

export default IconFileCloudFill;