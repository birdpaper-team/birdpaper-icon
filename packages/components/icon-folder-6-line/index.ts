import type { App } from 'vue';
import _IconFolder6Line from './icon-folder-6-line.vue';

const IconFolder6Line = Object.assign(_IconFolder6Line, {
  install: (app: App) => {
    app.component(_IconFolder6Line.name, _IconFolder6Line);
  }
});

export default IconFolder6Line;