import type { App } from 'vue';
import _IconCloudOffFill from './icon-cloud-off-fill.vue';

const IconCloudOffFill = Object.assign(_IconCloudOffFill, {
  install: (app: App) => {
    app.component(_IconCloudOffFill.name, _IconCloudOffFill);
  }
});

export default IconCloudOffFill;