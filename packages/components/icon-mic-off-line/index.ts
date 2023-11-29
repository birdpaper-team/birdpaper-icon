import type { App } from 'vue';
import _IconMicOffLine from './icon-mic-off-line.vue';

const IconMicOffLine = Object.assign(_IconMicOffLine, {
  install: (app: App) => {
    app.component(_IconMicOffLine.name, _IconMicOffLine);
  }
});

export default IconMicOffLine;