import type { App } from 'vue';
import _IconCloudyLine from './icon-cloudy-line.vue';

const IconCloudyLine = Object.assign(_IconCloudyLine, {
  install: (app: App) => {
    app.component(_IconCloudyLine.name, _IconCloudyLine);
  }
});

export default IconCloudyLine;