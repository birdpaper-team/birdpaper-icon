import type { App } from 'vue';
import _IconOpenbaseLine from './icon-openbase-line.vue';

const IconOpenbaseLine = Object.assign(_IconOpenbaseLine, {
  install: (app: App) => {
    app.component(_IconOpenbaseLine.name, _IconOpenbaseLine);
  }
});

export default IconOpenbaseLine;