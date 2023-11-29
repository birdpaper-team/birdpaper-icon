import type { App } from 'vue';
import _IconEarthLine from './icon-earth-line.vue';

const IconEarthLine = Object.assign(_IconEarthLine, {
  install: (app: App) => {
    app.component(_IconEarthLine.name, _IconEarthLine);
  }
});

export default IconEarthLine;