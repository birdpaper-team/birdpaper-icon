import type { App } from 'vue';
import _IconLoopLeftLine from './icon-loop-left-line.vue';

const IconLoopLeftLine = Object.assign(_IconLoopLeftLine, {
  install: (app: App) => {
    app.component(_IconLoopLeftLine.name, _IconLoopLeftLine);
  }
});

export default IconLoopLeftLine;