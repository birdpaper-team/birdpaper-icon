import type { App } from 'vue';
import _IconSunCloudyLine from './icon-sun-cloudy-line.vue';

const IconSunCloudyLine = Object.assign(_IconSunCloudyLine, {
  install: (app: App) => {
    app.component(_IconSunCloudyLine.name, _IconSunCloudyLine);
  }
});

export default IconSunCloudyLine;