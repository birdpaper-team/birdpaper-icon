import type { App } from 'vue';
import _IconForwardEndLine from './icon-forward-end-line.vue';

const IconForwardEndLine = Object.assign(_IconForwardEndLine, {
  install: (app: App) => {
    app.component(_IconForwardEndLine.name, _IconForwardEndLine);
  }
});

export default IconForwardEndLine;