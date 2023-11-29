import type { App } from 'vue';
import _IconCloudWindyLine from './icon-cloud-windy-line.vue';

const IconCloudWindyLine = Object.assign(_IconCloudWindyLine, {
  install: (app: App) => {
    app.component(_IconCloudWindyLine.name, _IconCloudWindyLine);
  }
});

export default IconCloudWindyLine;