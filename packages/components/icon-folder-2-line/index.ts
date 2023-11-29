import type { App } from 'vue';
import _IconFolder2Line from './icon-folder-2-line.vue';

const IconFolder2Line = Object.assign(_IconFolder2Line, {
  install: (app: App) => {
    app.component(_IconFolder2Line.name, _IconFolder2Line);
  }
});

export default IconFolder2Line;