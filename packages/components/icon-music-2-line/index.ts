import type { App } from 'vue';
import _IconMusic2Line from './icon-music-2-line.vue';

const IconMusic2Line = Object.assign(_IconMusic2Line, {
  install: (app: App) => {
    app.component(_IconMusic2Line.name, _IconMusic2Line);
  }
});

export default IconMusic2Line;