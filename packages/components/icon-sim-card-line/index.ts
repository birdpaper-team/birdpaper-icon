import type { App } from 'vue';
import _IconSimCardLine from './icon-sim-card-line.vue';

const IconSimCardLine = Object.assign(_IconSimCardLine, {
  install: (app: App) => {
    app.component(_IconSimCardLine.name, _IconSimCardLine);
  }
});

export default IconSimCardLine;