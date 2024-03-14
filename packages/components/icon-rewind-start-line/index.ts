import type { App } from 'vue';
import _IconRewindStartLine from './icon-rewind-start-line.vue';

const IconRewindStartLine = Object.assign(_IconRewindStartLine, {
  install: (app: App) => {
    app.component(_IconRewindStartLine.name, _IconRewindStartLine);
  }
});

export default IconRewindStartLine;