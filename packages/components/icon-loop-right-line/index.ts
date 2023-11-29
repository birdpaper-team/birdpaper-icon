import type { App } from 'vue';
import _IconLoopRightLine from './icon-loop-right-line.vue';

const IconLoopRightLine = Object.assign(_IconLoopRightLine, {
  install: (app: App) => {
    app.component(_IconLoopRightLine.name, _IconLoopRightLine);
  }
});

export default IconLoopRightLine;