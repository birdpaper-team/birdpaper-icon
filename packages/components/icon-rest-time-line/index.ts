import type { App } from 'vue';
import _IconRestTimeLine from './icon-rest-time-line.vue';

const IconRestTimeLine = Object.assign(_IconRestTimeLine, {
  install: (app: App) => {
    app.component(_IconRestTimeLine.name, _IconRestTimeLine);
  }
});

export default IconRestTimeLine;