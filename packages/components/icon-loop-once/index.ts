import type { App } from 'vue';
import _IconLoopOnce from './icon-loop-once.vue';

const IconLoopOnce = Object.assign(_IconLoopOnce, {
  install: (app: App) => {
    app.component(_IconLoopOnce.name, _IconLoopOnce);
  }
});

export default IconLoopOnce;