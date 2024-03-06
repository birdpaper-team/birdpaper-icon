import type { App } from 'vue';
import _IconWeightLine from './icon-weight-line.vue';

const IconWeightLine = Object.assign(_IconWeightLine, {
  install: (app: App) => {
    app.component(_IconWeightLine.name, _IconWeightLine);
  }
});

export default IconWeightLine;