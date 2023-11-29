import type { App } from 'vue';
import _IconReplay10Line from './icon-replay-10-line.vue';

const IconReplay10Line = Object.assign(_IconReplay10Line, {
  install: (app: App) => {
    app.component(_IconReplay10Line.name, _IconReplay10Line);
  }
});

export default IconReplay10Line;