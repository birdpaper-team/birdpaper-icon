import type { App } from 'vue';
import _IconSkipForwardLine from './icon-skip-forward-line.vue';

const IconSkipForwardLine = Object.assign(_IconSkipForwardLine, {
  install: (app: App) => {
    app.component(_IconSkipForwardLine.name, _IconSkipForwardLine);
  }
});

export default IconSkipForwardLine;