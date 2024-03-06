import type { App } from 'vue';
import _IconToothLine from './icon-tooth-line.vue';

const IconToothLine = Object.assign(_IconToothLine, {
  install: (app: App) => {
    app.component(_IconToothLine.name, _IconToothLine);
  }
});

export default IconToothLine;