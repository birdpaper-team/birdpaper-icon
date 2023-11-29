import type { App } from 'vue';
import _IconCloudFill from './icon-cloud-fill.vue';

const IconCloudFill = Object.assign(_IconCloudFill, {
  install: (app: App) => {
    app.component(_IconCloudFill.name, _IconCloudFill);
  }
});

export default IconCloudFill;