import type { App } from 'vue';
import _IconAlarmWarningFill from './icon-alarm-warning-fill.vue';

const IconAlarmWarningFill = Object.assign(_IconAlarmWarningFill, {
  install: (app: App) => {
    app.component(_IconAlarmWarningFill.name, _IconAlarmWarningFill);
  }
});

export default IconAlarmWarningFill;