import type { App } from 'vue';
import _IconAlarmWarningLine from './icon-alarm-warning-line.vue';

const IconAlarmWarningLine = Object.assign(_IconAlarmWarningLine, {
  install: (app: App) => {
    app.component(_IconAlarmWarningLine.name, _IconAlarmWarningLine);
  }
});

export default IconAlarmWarningLine;