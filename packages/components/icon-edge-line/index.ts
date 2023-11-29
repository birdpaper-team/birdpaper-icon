import type { App } from 'vue';
import _IconEdgeLine from './icon-edge-line.vue';

const IconEdgeLine = Object.assign(_IconEdgeLine, {
  install: (app: App) => {
    app.component(_IconEdgeLine.name, _IconEdgeLine);
  }
});

export default IconEdgeLine;