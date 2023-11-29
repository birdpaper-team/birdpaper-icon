import type { App } from 'vue';
import _IconLoopLeftFill from './icon-loop-left-fill.vue';

const IconLoopLeftFill = Object.assign(_IconLoopLeftFill, {
  install: (app: App) => {
    app.component(_IconLoopLeftFill.name, _IconLoopLeftFill);
  }
});

export default IconLoopLeftFill;