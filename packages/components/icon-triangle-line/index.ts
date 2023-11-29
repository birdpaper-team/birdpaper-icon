import type { App } from 'vue';
import _IconTriangleLine from './icon-triangle-line.vue';

const IconTriangleLine = Object.assign(_IconTriangleLine, {
  install: (app: App) => {
    app.component(_IconTriangleLine.name, _IconTriangleLine);
  }
});

export default IconTriangleLine;