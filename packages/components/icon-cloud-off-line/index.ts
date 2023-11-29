import type { App } from 'vue';
import _IconCloudOffLine from './icon-cloud-off-line.vue';

const IconCloudOffLine = Object.assign(_IconCloudOffLine, {
  install: (app: App) => {
    app.component(_IconCloudOffLine.name, _IconCloudOffLine);
  }
});

export default IconCloudOffLine;