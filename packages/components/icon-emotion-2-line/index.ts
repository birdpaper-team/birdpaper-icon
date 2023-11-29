import type { App } from 'vue';
import _IconEmotion2Line from './icon-emotion-2-line.vue';

const IconEmotion2Line = Object.assign(_IconEmotion2Line, {
  install: (app: App) => {
    app.component(_IconEmotion2Line.name, _IconEmotion2Line);
  }
});

export default IconEmotion2Line;