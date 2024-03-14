import type { App } from 'vue';
import _IconAlibabaCloudLine from './icon-alibaba-cloud-line.vue';

const IconAlibabaCloudLine = Object.assign(_IconAlibabaCloudLine, {
  install: (app: App) => {
    app.component(_IconAlibabaCloudLine.name, _IconAlibabaCloudLine);
  }
});

export default IconAlibabaCloudLine;