import type { App } from 'vue';
import _IconZcoolLine from './icon-zcool-line.vue';

const IconZcoolLine = Object.assign(_IconZcoolLine, {
  install: (app: App) => {
    app.component(_IconZcoolLine.name, _IconZcoolLine);
  }
});

export default IconZcoolLine;