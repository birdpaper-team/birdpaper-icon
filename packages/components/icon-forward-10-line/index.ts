import type { App } from 'vue';
import _IconForward10Line from './icon-forward-10-line.vue';

const IconForward10Line = Object.assign(_IconForward10Line, {
  install: (app: App) => {
    app.component(_IconForward10Line.name, _IconForward10Line);
  }
});

export default IconForward10Line;