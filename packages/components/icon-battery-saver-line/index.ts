import type { App } from 'vue';
import _IconBatterySaverLine from './icon-battery-saver-line.vue';

const IconBatterySaverLine = Object.assign(_IconBatterySaverLine, {
  install: (app: App) => {
    app.component(_IconBatterySaverLine.name, _IconBatterySaverLine);
  }
});

export default IconBatterySaverLine;