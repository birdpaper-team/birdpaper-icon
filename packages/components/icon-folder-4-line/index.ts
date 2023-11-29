import type { App } from 'vue';
import _IconFolder4Line from './icon-folder-4-line.vue';

const IconFolder4Line = Object.assign(_IconFolder4Line, {
  install: (app: App) => {
    app.component(_IconFolder4Line.name, _IconFolder4Line);
  }
});

export default IconFolder4Line;