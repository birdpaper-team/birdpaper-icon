import type { App } from 'vue';
import _IconStopCircleLine from './icon-stop-circle-line.vue';

const IconStopCircleLine = Object.assign(_IconStopCircleLine, {
  install: (app: App) => {
    app.component(_IconStopCircleLine.name, _IconStopCircleLine);
  }
});

export default IconStopCircleLine;