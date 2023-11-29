import type { App } from 'vue';
import _IconSpeedMiniLine from './icon-speed-mini-line.vue';

const IconSpeedMiniLine = Object.assign(_IconSpeedMiniLine, {
  install: (app: App) => {
    app.component(_IconSpeedMiniLine.name, _IconSpeedMiniLine);
  }
});

export default IconSpeedMiniLine;