import type { App } from 'vue';
import _IconForwardEndMiniLine from './icon-forward-end-mini-line.vue';

const IconForwardEndMiniLine = Object.assign(_IconForwardEndMiniLine, {
  install: (app: App) => {
    app.component(_IconForwardEndMiniLine.name, _IconForwardEndMiniLine);
  }
});

export default IconForwardEndMiniLine;