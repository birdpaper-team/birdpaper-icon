import type { App } from 'vue';
import _IconStopLine from './icon-stop-line.vue';

const IconStopLine = Object.assign(_IconStopLine, {
  install: (app: App) => {
    app.component(_IconStopLine.name, _IconStopLine);
  }
});

export default IconStopLine;