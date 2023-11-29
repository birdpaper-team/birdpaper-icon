import type { App } from 'vue';
import _IconCelsiusLine from './icon-celsius-line.vue';

const IconCelsiusLine = Object.assign(_IconCelsiusLine, {
  install: (app: App) => {
    app.component(_IconCelsiusLine.name, _IconCelsiusLine);
  }
});

export default IconCelsiusLine;