import type { App } from 'vue';
import _IconHexagonFill from './icon-hexagon-fill.vue';

const IconHexagonFill = Object.assign(_IconHexagonFill, {
  install: (app: App) => {
    app.component(_IconHexagonFill.name, _IconHexagonFill);
  }
});

export default IconHexagonFill;