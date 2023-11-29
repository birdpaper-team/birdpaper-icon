import type { App } from 'vue';
import _IconAlarmLine from './icon-alarm-line.vue';

const IconAlarmLine = Object.assign(_IconAlarmLine, {
  install: (app: App) => {
    app.component(_IconAlarmLine.name, _IconAlarmLine);
  }
});

export default IconAlarmLine;