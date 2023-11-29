import type { App } from 'vue';
import _IconShowersLine from './icon-showers-line.vue';

const IconShowersLine = Object.assign(_IconShowersLine, {
  install: (app: App) => {
    app.component(_IconShowersLine.name, _IconShowersLine);
  }
});

export default IconShowersLine;