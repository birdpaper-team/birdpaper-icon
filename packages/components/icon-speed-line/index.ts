import type { App } from 'vue';
import _IconSpeedLine from './icon-speed-line.vue';

const IconSpeedLine = Object.assign(_IconSpeedLine, {
  install: (app: App) => {
    app.component(_IconSpeedLine.name, _IconSpeedLine);
  }
});

export default IconSpeedLine;