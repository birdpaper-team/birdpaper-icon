import type { App } from 'vue';
import _IconCircleFourLine from './icon-circle-four-line.vue';

const IconCircleFourLine = Object.assign(_IconCircleFourLine, {
  install: (app: App) => {
    app.component(_IconCircleFourLine.name, _IconCircleFourLine);
  }
});

export default IconCircleFourLine;