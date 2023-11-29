import type { App } from 'vue';
import _IconEdgeNewLine from './icon-edge-new-line.vue';

const IconEdgeNewLine = Object.assign(_IconEdgeNewLine, {
  install: (app: App) => {
    app.component(_IconEdgeNewLine.name, _IconEdgeNewLine);
  }
});

export default IconEdgeNewLine;