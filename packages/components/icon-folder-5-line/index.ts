import type { App } from 'vue';
import _IconFolder5Line from './icon-folder-5-line.vue';

const IconFolder5Line = Object.assign(_IconFolder5Line, {
  install: (app: App) => {
    app.component(_IconFolder5Line.name, _IconFolder5Line);
  }
});

export default IconFolder5Line;