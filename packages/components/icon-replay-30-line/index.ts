import type { App } from 'vue';
import _IconReplay30Line from './icon-replay-30-line.vue';

const IconReplay30Line = Object.assign(_IconReplay30Line, {
  install: (app: App) => {
    app.component(_IconReplay30Line.name, _IconReplay30Line);
  }
});

export default IconReplay30Line;