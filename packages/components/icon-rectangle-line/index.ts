import type { App } from 'vue';
import _IconRectangleLine from './icon-rectangle-line.vue';

const IconRectangleLine = Object.assign(_IconRectangleLine, {
  install: (app: App) => {
    app.component(_IconRectangleLine.name, _IconRectangleLine);
  }
});

export default IconRectangleLine;