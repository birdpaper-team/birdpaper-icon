import type { App } from 'vue';
import _IconCriminalLine from './icon-criminal-line.vue';

const IconCriminalLine = Object.assign(_IconCriminalLine, {
  install: (app: App) => {
    app.component(_IconCriminalLine.name, _IconCriminalLine);
  }
});

export default IconCriminalLine;