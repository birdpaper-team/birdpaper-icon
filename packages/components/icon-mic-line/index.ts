import type { App } from 'vue';
import _IconMicLine from './icon-mic-line.vue';

const IconMicLine = Object.assign(_IconMicLine, {
  install: (app: App) => {
    app.component(_IconMicLine.name, _IconMicLine);
  }
});

export default IconMicLine;