import type { App } from 'vue';
import _IconAlarmClock from './icon-alarm-clock.vue';

const IconAlarmClock = Object.assign(_IconAlarmClock, {
  install: (app: App) => {
    app.component(_IconAlarmClock.name, _IconAlarmClock);
  }
});

export default IconAlarmClock;