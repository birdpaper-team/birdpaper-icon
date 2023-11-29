import type { App } from 'vue';
import _IconSpeedUpLine from './icon-speed-up-line.vue';

const IconSpeedUpLine = Object.assign(_IconSpeedUpLine, {
  install: (app: App) => {
    app.component(_IconSpeedUpLine.name, _IconSpeedUpLine);
  }
});

export default IconSpeedUpLine;