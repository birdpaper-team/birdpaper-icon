import type { App } from 'vue';
import _IconLoopRightFill from './icon-loop-right-fill.vue';

const IconLoopRightFill = Object.assign(_IconLoopRightFill, {
  install: (app: App) => {
    app.component(_IconLoopRightFill.name, _IconLoopRightFill);
  }
});

export default IconLoopRightFill;