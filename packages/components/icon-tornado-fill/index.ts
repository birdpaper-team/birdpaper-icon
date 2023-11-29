import type { App } from 'vue';
import _IconTornadoFill from './icon-tornado-fill.vue';

const IconTornadoFill = Object.assign(_IconTornadoFill, {
  install: (app: App) => {
    app.component(_IconTornadoFill.name, _IconTornadoFill);
  }
});

export default IconTornadoFill;