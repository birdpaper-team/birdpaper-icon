import type { App } from 'vue';
import _IconAlibabaCloudFill from './icon-alibaba-cloud-fill.vue';

const IconAlibabaCloudFill = Object.assign(_IconAlibabaCloudFill, {
  install: (app: App) => {
    app.component(_IconAlibabaCloudFill.name, _IconAlibabaCloudFill);
  }
});

export default IconAlibabaCloudFill;