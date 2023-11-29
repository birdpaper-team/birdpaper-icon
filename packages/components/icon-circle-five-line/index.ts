import type { App } from 'vue';
import _IconCircleFiveLine from './icon-circle-five-line.vue';

const IconCircleFiveLine = Object.assign(_IconCircleFiveLine, {
  install: (app: App) => {
    app.component(_IconCircleFiveLine.name, _IconCircleFiveLine);
  }
});

export default IconCircleFiveLine;