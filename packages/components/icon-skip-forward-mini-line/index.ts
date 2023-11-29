import type { App } from 'vue';
import _IconSkipForwardMiniLine from './icon-skip-forward-mini-line.vue';

const IconSkipForwardMiniLine = Object.assign(_IconSkipForwardMiniLine, {
  install: (app: App) => {
    app.component(_IconSkipForwardMiniLine.name, _IconSkipForwardMiniLine);
  }
});

export default IconSkipForwardMiniLine;