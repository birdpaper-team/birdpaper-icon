import type { App } from 'vue';
import _IconStopMiniLine from './icon-stop-mini-line.vue';

const IconStopMiniLine = Object.assign(_IconStopMiniLine, {
  install: (app: App) => {
    app.component(_IconStopMiniLine.name, _IconStopMiniLine);
  }
});

export default IconStopMiniLine;