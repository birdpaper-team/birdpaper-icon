import type { App } from 'vue';
import _IconCircleTwoLine from './icon-circle-two-line.vue';

const IconCircleTwoLine = Object.assign(_IconCircleTwoLine, {
  install: (app: App) => {
    app.component(_IconCircleTwoLine.name, _IconCircleTwoLine);
  }
});

export default IconCircleTwoLine;