import type { App } from 'vue';
import _IconHexagonLine from './icon-hexagon-line.vue';

const IconHexagonLine = Object.assign(_IconHexagonLine, {
  install: (app: App) => {
    app.component(_IconHexagonLine.name, _IconHexagonLine);
  }
});

export default IconHexagonLine;