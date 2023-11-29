import type { App } from 'vue';
import _IconCloudWindyFill from './icon-cloud-windy-fill.vue';

const IconCloudWindyFill = Object.assign(_IconCloudWindyFill, {
  install: (app: App) => {
    app.component(_IconCloudWindyFill.name, _IconCloudWindyFill);
  }
});

export default IconCloudWindyFill;