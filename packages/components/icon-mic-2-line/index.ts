import type { App } from 'vue';
import _IconMic2Line from './icon-mic-2-line.vue';

const IconMic2Line = Object.assign(_IconMic2Line, {
  install: (app: App) => {
    app.component(_IconMic2Line.name, _IconMic2Line);
  }
});

export default IconMic2Line;