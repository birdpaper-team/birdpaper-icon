import type { App } from 'vue';
import _IconRewindStartMiniLine from './icon-rewind-start-mini-line.vue';

const IconRewindStartMiniLine = Object.assign(_IconRewindStartMiniLine, {
  install: (app: App) => {
    app.component(_IconRewindStartMiniLine.name, _IconRewindStartMiniLine);
  }
});

export default IconRewindStartMiniLine;