import type { App } from 'vue';
import _IconRewindMiniLine from './icon-rewind-mini-line.vue';

const IconRewindMiniLine = Object.assign(_IconRewindMiniLine, {
  install: (app: App) => {
    app.component(_IconRewindMiniLine.name, _IconRewindMiniLine);
  }
});

export default IconRewindMiniLine;