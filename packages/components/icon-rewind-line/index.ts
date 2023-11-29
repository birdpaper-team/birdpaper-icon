import type { App } from 'vue';
import _IconRewindLine from './icon-rewind-line.vue';

const IconRewindLine = Object.assign(_IconRewindLine, {
  install: (app: App) => {
    app.component(_IconRewindLine.name, _IconRewindLine);
  }
});

export default IconRewindLine;