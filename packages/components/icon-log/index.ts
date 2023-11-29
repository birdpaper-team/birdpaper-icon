import type { App } from 'vue';
import _IconLog from './icon-log.vue';

const IconLog = Object.assign(_IconLog, {
  install: (app: App) => {
    app.component(_IconLog.name, _IconLog);
  }
});

export default IconLog;