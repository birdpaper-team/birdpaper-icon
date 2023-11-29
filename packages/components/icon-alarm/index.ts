import type { App } from 'vue';
import _IconAlarm from './icon-alarm.vue';

const IconAlarm = Object.assign(_IconAlarm, {
  install: (app: App) => {
    app.component(_IconAlarm.name, _IconAlarm);
  }
});

export default IconAlarm;