import type { App } from 'vue';
import _IconFolder3Line from './icon-folder-3-line.vue';

const IconFolder3Line = Object.assign(_IconFolder3Line, {
  install: (app: App) => {
    app.component(_IconFolder3Line.name, _IconFolder3Line);
  }
});

export default IconFolder3Line;