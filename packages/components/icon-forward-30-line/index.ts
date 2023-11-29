import type { App } from 'vue';
import _IconForward30Line from './icon-forward-30-line.vue';

const IconForward30Line = Object.assign(_IconForward30Line, {
  install: (app: App) => {
    app.component(_IconForward30Line.name, _IconForward30Line);
  }
});

export default IconForward30Line;