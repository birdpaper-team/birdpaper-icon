import type { App } from 'vue';
import _IconForward5Line from './icon-forward-5-line.vue';

const IconForward5Line = Object.assign(_IconForward5Line, {
  install: (app: App) => {
    app.component(_IconForward5Line.name, _IconForward5Line);
  }
});

export default IconForward5Line;