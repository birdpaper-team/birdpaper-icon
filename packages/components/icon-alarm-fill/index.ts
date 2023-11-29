import type { App } from 'vue';
import _IconAlarmFill from './icon-alarm-fill.vue';

const IconAlarmFill = Object.assign(_IconAlarmFill, {
  install: (app: App) => {
    app.component(_IconAlarmFill.name, _IconAlarmFill);
  }
});

export default IconAlarmFill;