import type { App } from 'vue';
import _IconMoonCloudyLine from './icon-moon-cloudy-line.vue';

const IconMoonCloudyLine = Object.assign(_IconMoonCloudyLine, {
  install: (app: App) => {
    app.component(_IconMoonCloudyLine.name, _IconMoonCloudyLine);
  }
});

export default IconMoonCloudyLine;