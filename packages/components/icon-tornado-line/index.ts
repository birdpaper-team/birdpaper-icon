import type { App } from 'vue';
import _IconTornadoLine from './icon-tornado-line.vue';

const IconTornadoLine = Object.assign(_IconTornadoLine, {
  install: (app: App) => {
    app.component(_IconTornadoLine.name, _IconTornadoLine);
  }
});

export default IconTornadoLine;