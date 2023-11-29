import type { App } from 'vue';
import _IconReplay5Line from './icon-replay-5-line.vue';

const IconReplay5Line = Object.assign(_IconReplay5Line, {
  install: (app: App) => {
    app.component(_IconReplay5Line.name, _IconReplay5Line);
  }
});

export default IconReplay5Line;