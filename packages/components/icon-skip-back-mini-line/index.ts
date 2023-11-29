import type { App } from 'vue';
import _IconSkipBackMiniLine from './icon-skip-back-mini-line.vue';

const IconSkipBackMiniLine = Object.assign(_IconSkipBackMiniLine, {
  install: (app: App) => {
    app.component(_IconSkipBackMiniLine.name, _IconSkipBackMiniLine);
  }
});

export default IconSkipBackMiniLine;