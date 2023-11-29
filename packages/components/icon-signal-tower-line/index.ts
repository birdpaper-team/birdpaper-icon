import type { App } from 'vue';
import _IconSignalTowerLine from './icon-signal-tower-line.vue';

const IconSignalTowerLine = Object.assign(_IconSignalTowerLine, {
  install: (app: App) => {
    app.component(_IconSignalTowerLine.name, _IconSignalTowerLine);
  }
});

export default IconSignalTowerLine;