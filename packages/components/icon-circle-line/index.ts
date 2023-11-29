import type { App } from 'vue';
import _IconCircleLine from './icon-circle-line.vue';

const IconCircleLine = Object.assign(_IconCircleLine, {
  install: (app: App) => {
    app.component(_IconCircleLine.name, _IconCircleLine);
  }
});

export default IconCircleLine;