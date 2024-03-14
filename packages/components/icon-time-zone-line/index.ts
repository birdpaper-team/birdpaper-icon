import type { App } from 'vue';
import _IconTimeZoneLine from './icon-time-zone-line.vue';

const IconTimeZoneLine = Object.assign(_IconTimeZoneLine, {
  install: (app: App) => {
    app.component(_IconTimeZoneLine.name, _IconTimeZoneLine);
  }
});

export default IconTimeZoneLine;